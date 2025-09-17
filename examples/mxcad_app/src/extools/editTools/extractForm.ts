import { McDb, McDbArc, McDbBlockReference, McDbBlockTableRecord, McDbEntity, McDbLine, McDbMText, McDbPolyline, McDbText, McGeMatrix3d, McGePoint3d, McGeVector3d, MxCADSelectionSet, MxCADUiPrDist, MxCADUiPrPoint, MxCADUtility, MxCpp } from "mxcad";
import { deduplicatePoints } from './fitTools';
import * as ExcelJS from 'exceljs';
import { saveAs } from "file-saver";

const explodePl = (ent: McDbPolyline, mart?: McGeMatrix3d): McDbEntity[] => {
	// 如果是多段线，需要打散成线段
	const numVert = ent.numVerts();
	const entsArr: McDbEntity[] = [];
	for (let i = 0; i < numVert; i++) {
		if (i < numVert - 1) {
			const convexity = ent.getBulgeAt(i);
			const pt1 = ent.getPointAt(i).val;
			const pt2 = ent.getPointAt(i + 1).val;
			if (mart) {
				pt1.transformBy(mart);
				pt2.transformBy(mart);
			}
			if (!convexity) {
				const line = new McDbLine(pt1, pt2);
				entsArr.push(line)
			} else {
				const d = (ent.getDistAtPoint(pt1).val + ent.getDistAtPoint(pt2).val) / 2;
				const midPt = ent.getPointAtDist(d).val;
				const arc = new McDbArc();
				arc.computeArc(pt1.x, pt1.y, midPt.x, midPt.y, pt2.x, pt2.y);
				entsArr.push(arc)
			}
		} else {
			if (ent.isClosed) entsArr.push(new McDbLine(ent.getPointAt(0).val, ent.getPointAt(numVert - 1).val))
		}
	}
	return entsArr;
}
// 提取表格
export async function Mx_GetTable() {
	const tableDataArr = await getAllTableDataArr();
	if (tableDataArr && tableDataArr.length) {
		exportExcelFromCells(tableDataArr);
	}
}
export async function getAllTableDataArr(): Promise<CellInput[] | []> {
	let dist = 2.00;
	const precision = 0.0001;
	const getDist = new MxCADUiPrDist();
	getDist.setMessage('请输入表格提取精度' + `(${dist})`);
	const distVal = await getDist.go();
	if (distVal) dist = distVal;

	// 指定提取范围角点
	const getPoint = new MxCADUiPrPoint();
	getPoint.setMessage('选择提取范围第一个角点');
	const corner1 = await getPoint.go();
	if (!corner1) return [];
	getPoint.setMessage('选择提取范围第二个角点')
	getPoint.setUserDraw((pt, pw) => {
		const pts = [pt, new McGePoint3d(pt.x, corner1.y), corner1, new McGePoint3d(corner1.x, pt.y)]
		// 设置范围框颜色即位置
		let pl = new McDbPolyline();
		pl.isClosed = true;
		pts.forEach(pt => pl.addVertexAt(pt));
		pw.setColor(0xFFFFFF);
		pw.drawMcDbEntity(pl);

		// 动态绘制矩形填充框
		const geometry = new THREE.BufferGeometry();
		geometry.setFromPoints([
			new THREE.Vector3(pt.x, pt.y, pt.z),
			new THREE.Vector3(pt.x, corner1.y, corner1.z),
			new THREE.Vector3(corner1.x, corner1.y, corner1.z),
			new THREE.Vector3(corner1.x, pt.y, pt.z)
		]);
		geometry.attributes.uv = new THREE.BufferAttribute(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), 2);
		geometry.setIndex([0, 1, 2, 0, 2, 3]);
		// 创建材质（半透明的颜色）
		const material = new THREE.MeshBasicMaterial({
			color: 0x004D00,
			transparent: true,
			opacity: 0.5,
			side: THREE.DoubleSide
		});
		const mesh = new THREE.Mesh(geometry, material);
		pw.drawEntity(mesh);
	});
	const corner2 = await getPoint.go();
	if (!corner2) return [];

	// 根据精度扩展矩形范围
	const new_corner1 = new McGePoint3d(Math.min(corner1.x, corner2.x) - dist, Math.min(corner1.y, corner2.y) - dist, 0);
	const new_corner2 = new McGePoint3d(Math.max(corner1.x, corner2.x) + dist, Math.max(corner1.y, corner2.y) + dist, 0);

	// 获取范围内的所有实体
	const scopeAllEntity: McDbEntity[] = [];
	const needTransformEntity: { handle: string, mart: McGeMatrix3d }[] = [];
	const Mx_getBlokEntity = (blkRec: McDbBlockTableRecord | null, mart: McGeMatrix3d) => {
		if (!blkRec) return;
		blkRec.getAllEntityId().forEach(id => {
			let ent = id.getMcDbEntity();
			if (ent) {
				if (ent instanceof McDbBlockReference) {
					let blkref = ent as McDbBlockReference;
					let mat = blkref.blockTransform.clone();
					mat.preMultBy(mart);
					Mx_getBlokEntity(blkref.blockTableRecordId.getMcDbBlockTableRecord(), mat);
				} else {
					needTransformEntity.push({ handle: ent.getHandle(), mart });
					if (ent instanceof McDbPolyline) {
						const arr = explodePl(ent, mart);
						scopeAllEntity.push(...arr);
					} else {
						scopeAllEntity.push(ent);
					}
				}
			}
		})
	}
	// 根据矩形范围框选实体
	const ss = new MxCADSelectionSet();
	await ss.crossingSelect(new_corner1.x, new_corner1.y, new_corner2.x, new_corner2.y);
	if (!ss.count()) {
		alert('未识别到有效表格!');
		return []
	}

	ss.forEach(id => {
		const ent = id.getMcDbEntity();
		if (ent) {
			if (ent instanceof McDbBlockReference) {
				let blkRec = ent.blockTableRecordId.getMcDbBlockTableRecord();
				const mart = ent.blockTransform.clone();
				Mx_getBlokEntity(blkRec, mart);
			} else if (ent instanceof McDbPolyline) {
				const arr = explodePl(ent);
				scopeAllEntity.push(...arr);
			} else {
				scopeAllEntity.push(ent)
			}
		}
	});

	// 分类获取所有的横向直线和竖向直线
	const lineArr = scopeAllEntity.filter(item => item.objectName === 'McDbLine');
	if (!lineArr.length) {
		alert('未识别到有效表格!');
		return []
	}

	const horizontalLineArr: McDbLine[] = [];//横向
	const verticalLineArr: McDbLine[] = [];//纵向
	lineArr.forEach(item => {
		const vec_x = McGeVector3d.kXAxis;
		const vec_y = McGeVector3d.kYAxis;
		const line = item.clone() as McDbLine;
		const res = needTransformEntity.find(i => i.handle === item.getHandle());
		if (res) {
			line.startPoint = line.startPoint.clone().transformBy(res.mart);
			line.endPoint = line.endPoint.transformBy(res.mart);
		}
		const _vec = line.startPoint.sub(line.endPoint).normalize().mult(precision);
		if (vec_x.angleTo1(_vec) < precision || Math.abs((vec_x.angleTo1(_vec) - Math.PI)) < precision) {
			horizontalLineArr.push(new McDbLine(line.startPoint.addvec(_vec), line.endPoint.subvec(_vec)))
		}
		if (vec_y.angleTo1(_vec) < precision || Math.abs((vec_y.angleTo1(_vec) - Math.PI)) < precision) {
			verticalLineArr.push(new McDbLine(line.startPoint.addvec(_vec), line.endPoint.subvec(_vec)))
		};
	});

	if (!horizontalLineArr.length || !verticalLineArr.length) {
		alert('未识别到有效表格!');
		return []
	}
	// 根据线拿到所有的点
	const roundToPrecision = (num: number, precision = 0.0001): number => {
		const decimals = Math.abs(Math.floor(Math.log10(precision))); // 计算精度对应的小数位数
		const factor = Math.pow(10, decimals);
		return Math.round(num * factor) / factor;
	}
	let allPoints: McGePoint3d[] = [];
	horizontalLineArr.forEach(line1 => {
		verticalLineArr.forEach(line2 => {
			const res = line1.IntersectWith(line2, McDb.Intersect.kOnBothOperands);
			if (res.length()) res.forEach(pt => {
				pt.x = roundToPrecision(pt.x, precision);
				pt.y = roundToPrecision(pt.y, precision);
				if (arePointsInRectangle([new_corner1, new McGePoint3d(new_corner1.x, new_corner2.y), new_corner2, new McGePoint3d(new_corner2.x, new_corner1.y)], [pt])) {
					allPoints.push(pt)
				}
			})
		})
	});
	allPoints = deduplicatePoints(allPoints);//点数组去重;
	const _x = Array.from(new Set(allPoints.map(item => item.x))).sort((a, b) => a - b);
	const _y = Array.from(new Set(allPoints.map(item => item.y))).sort((a, b) => b - a);

	const cellPointsArr: (McGePoint3d | null)[][] = [];
	_y.forEach((y, row) => {
		const arr: (McGePoint3d | null)[] = [];
		const pts = allPoints.filter(item => item.y === y);
		if (pts.length) {
			_x.forEach((x, col) => {
				const index = pts.findIndex(item => item.x === x);
				// index === -1 ? arr.push(null) : arr.push(pts[index]);
				if (index === -1) {
					if ((row === 0 || row === _y.length - 1) && (col === 0 || row === _x.length - 1)) {
						arr.push(new McGePoint3d(x, y));
					} else {
						arr.push(null)
					}
				} else {
					arr.push(pts[index])
				}
			});
			cellPointsArr.push(arr)
		} else {
			cellPointsArr.push([null]);
		}
	});

	if (!cellPointsArr.length) {
		alert('未识别到有效表格!');
		return []
	}
	// 筛选出所有表格数据
	const tableDataArr: CellInput[] = []
	const results:MergeResult[] = solveWithMerging(cellPointsArr);
	const getTextContent = (matrix: (McGePoint3d|null)[][]): string => {
		let str: string = '';
		const textArr = scopeAllEntity.filter(item => {
			const ent = item.clone() as McDbEntity;
			let _minPt: McGePoint3d|null = null;
			let _maxPt: McGePoint3d|null = null;
			if (ent instanceof McDbText) {
				const { minPt, maxPt } = ent.getBoundingBox();
				_minPt = minPt;
				_maxPt = maxPt;
			} else if (item instanceof McDbMText) {
				const textStyleId = MxCpp.getCurrentMxCAD().getDatabase().getCurrentlyTextStyleId();
				ent.textStyleId = textStyleId;
				(ent as McDbMText).reCompute();
				const { minPt, maxPt } = MxCADUtility.getTextEntityBox(ent, false);
				_minPt = minPt;
				_maxPt = maxPt;
			}
			if (_maxPt && _minPt) {
				// matrix扁平化
				const res = needTransformEntity.find(i => i.handle === item.getHandle())
				if (res) {
					_minPt.transformBy(res.mart);
					_maxPt.transformBy(res.mart);
				}
				return arePointsInRectangle(matrix.flat(), [_minPt.clone().addvec(_maxPt.sub(_minPt).mult(1 / 2))])
			} else {
				return false
			}
		})
		if (textArr.length) {
			textArr.forEach(text => {
				if (text instanceof McDbText) {
					str += `${text.textString}\n`
				} else if (text instanceof McDbMText) {
					str += `${text.contents}\n`
				}
			})
		};
		return str
	}
	results.forEach(async res => {
		if (res.merged) {
			const { fullRangeKeys, matrix } = res.merged;
			const str = getTextContent(matrix);
			tableDataArr.push({ type: DataType.merged, content: str, name: fullRangeKeys.join('+') })
		} else if (res.standalone) {
			const { key, matrix } = res.standalone;
			const str = getTextContent(matrix);
			tableDataArr.push({ type: DataType.standalone, content: str, name: key });
		}
	});
	return tableDataArr;
}
enum DataType {
	standalone,
	merged
}
interface Position {
	row: number;
	col: number;
}

type MatrixValue = McGePoint3d | null;

interface MergeResult {
	merged?: {
		originalKeys?: string[];
		fullRangeKeys: string[]; // 重命名后的完整范围
		matrix: MatrixValue[][];
	};
	standalone?: {
		key: string;
		matrix: MatrixValue[][];
	};
}
// 合并表格
function solveWithMerging(input: MatrixValue[][]): MergeResult[] {
	const rows = input.length;
	const cols = input[0].length;
	if (rows < 2 || cols < 2) {
		return[];
	}

	// 1. 提取所有 2x2 子矩阵
	const blocks: Record<string, MatrixValue[][]> = {};
	const positions: Record<string, Position> = {};

	for (let r = 0; r <= rows - 2; r++) {
		for (let c = 0; c <= cols - 2; c++) {
			const key = `${String.fromCharCode(65 + c)}${r + 1}`;
			blocks[key] = [
				[input[r][c], input[r][c + 1]],
				[input[r + 1][c], input[r + 1][c + 1]]
			];
			positions[key] = { row: r, col: c };
		}
	}

	// 工具：判断是否含 null
	const hasNull = (mat: MatrixValue[][]): boolean =>
		mat.some(row => row.some(cell => cell === null));

	const processed = new Set<string>(); // 已参与合并的块
	const results: MergeResult[] = [];

	// 筛选出所有块
	const getAllBlockNames = (visited: Set<string>): { fullRangeKeys: string[], newMatrix: MatrixValue[][] } => {
		// 获取包围盒（原始合并区域）
		let minRow = Infinity, maxRow = -Infinity;
		let minCol = Infinity, maxCol = -Infinity;

		Array.from(visited).forEach(key => {
			const { row, col } = positions[key];
			minRow = Math.min(minRow, row);
			maxRow = Math.max(maxRow, row);
			minCol = Math.min(minCol, col);
			maxCol = Math.max(maxCol, col);
		});

		// ===== 拓展：生成包围盒内所有 2×2 块名（完整矩形区域）=====
		const fullRangeKeys: string[] = [];
		for (let r = minRow; r <= maxRow; r++) {
			for (let c = minCol; c <= maxCol; c++) {
				const key = `${String.fromCharCode(65 + c)}${r + 1}`;
				fullRangeKeys.push(key);
				// 标记这些块为已处理（防止在独立块中重复）
				processed.add(key);
			}
		};

		// 提取新 2x2 矩阵（四个角）
		const safeGet = (r: number, c: number): MatrixValue =>
			r < rows && c < cols ? input[r][c] : null;

		const newMatrix: MatrixValue[][] = [
			[safeGet(minRow, minCol), safeGet(minRow, maxCol + 1)],
			[safeGet(maxRow + 1, minCol), safeGet(maxRow + 1, maxCol + 1)]
		];
		return { fullRangeKeys, newMatrix }
	}

	// ===== 第一阶段：处理含 null 的合并组 =====
	for (const startKey in blocks) {
		if (processed.has(startKey) || !hasNull(blocks[startKey])) continue;

		const visited = new Set<string>();
		const queue: string[] = [startKey];
		visited.add(startKey);
		processed.add(startKey);

		while (queue.length > 0) {
			const key = queue.shift()!;
			const { row, col } = positions[key];
			const block = blocks[key];
			const [a, b] = block[0];
			const [c, d] = block[1];

			const leftKey = col > 0 ? `${String.fromCharCode(64 + col)}${row + 1}` : null;
			const rightKey = col < cols - 2 ? `${String.fromCharCode(66 + col)}${row + 1}` : null;

			// 先横向合并，如果符合要求就跳出循环

			// 规则1: 第一个元素 null → 上方第三个 或 左边第二个
			if (a === null) {
				if (leftKey && blocks[leftKey] && !visited.has(leftKey) && blocks[leftKey][0][1] === null) {
					visited.add(leftKey);
					queue.push(leftKey);
					processed.add(leftKey);
				}
			}

			// 规则2: 第二个元素 null → 上方第四个 或 右边第一个
			if (b === null) {
				if (rightKey && blocks[rightKey] && !visited.has(rightKey) && blocks[rightKey][0][0] === null) {
					visited.add(rightKey);
					queue.push(rightKey);
					processed.add(rightKey);
				}
			}

			// 规则3: 第三个元素 null → 下方第一个 或 左边第四个
			if (c === null) {
				if (leftKey && blocks[leftKey] && !visited.has(leftKey) && blocks[leftKey][1][1] === null) {
					visited.add(leftKey);
					queue.push(leftKey);
					processed.add(leftKey);
				}
			}

			// 规则4: 第四个元素 null → 下方第二个 或 右边第三个
			if (d === null) {
				if (rightKey && blocks[rightKey] && !visited.has(rightKey) && blocks[rightKey][1][0] === null) {
					visited.add(rightKey);
					queue.push(rightKey);
					processed.add(rightKey);
				}
			};
		}
		if (visited.size === 1) queue.push(startKey);
		if (!getAllBlockNames(visited).newMatrix.flat().every(item => item !== null)) {
			while (queue.length > 0) {
				const key = queue.shift()!;
				const { row, col } = positions[key];
				const block = blocks[key];
				const [a, b] = block[0];
				const [c, d] = block[1];

				const upKey = row > 0 ? `${String.fromCharCode(65 + col)}${row}` : null;
				const downKey = row < rows - 2 ? `${String.fromCharCode(65 + col)}${row + 2}` : null;
				// 规则1: 第一个元素 null → 上方第三个 或 左边第二个
				if (a === null) {
					if (upKey && blocks[upKey] && !visited.has(upKey) && blocks[upKey][1][0] === null) {
						visited.add(upKey);
						queue.push(upKey);
						processed.add(upKey);
					}
				}

				// 规则2: 第二个元素 null → 上方第四个 或 右边第一个
				if (b === null) {
					if (upKey && blocks[upKey] && !visited.has(upKey) && blocks[upKey][1][1] === null) {
						visited.add(upKey);
						queue.push(upKey);
						processed.add(upKey);
					}
				}

				// 规则3: 第三个元素 null → 下方第一个 或 左边第四个
				if (c === null) {
					if (downKey && blocks[downKey] && !visited.has(downKey) && blocks[downKey][0][0] === null) {
						visited.add(downKey);
						queue.push(downKey);
						processed.add(downKey);
					}
				}

				// 规则4: 第四个元素 null → 下方第二个 或 右边第三个
				if (d === null) {
					if (downKey && blocks[downKey] && !visited.has(downKey) && blocks[downKey][0][1] === null) {
						visited.add(downKey);
						queue.push(downKey);
						processed.add(downKey);
					}
				};
			}
		}
		const { fullRangeKeys, newMatrix } = getAllBlockNames(visited);
		const isOnlyCol = (cells: string[]): Boolean => {
			const prefixes = new Set<string>();
			for (const cell of cells) {
				// 提取开头的字母部分（连续的大写A-Z）
				const match = cell.match(/^[A-Z]+/);
				if (match) {
					prefixes.add(match[0]);
				}
			}
			return prefixes.size === 1;
		}
		if (isOnlyCol(fullRangeKeys)) {
			results.push({
				merged: {
					fullRangeKeys: fullRangeKeys, // 重命名后的完整范围
					matrix: newMatrix
				}
			});
		} else {
			// 拿到所有合并元素后再重新组合
			const res = combineSubMatrices(input, fullRangeKeys);
			res.forEach(item => {
				results.push({
					merged: {
						fullRangeKeys: getAllBlockNames(new Set(item.name.split('+'))).fullRangeKeys, // 重命名后的完整范围
						matrix: item.data
					}
				});
			})
		}
	}
	// ===== 第二阶段：处理独立块（未被合并且未被覆盖）=====
	for (const key in blocks) {
		if (!processed.has(key)) {
			results.push({
				standalone: {
					key,
					matrix: blocks[key]
				}
			});
		}
	}
	return results
}
/**
 * 判断点是否都在矩形范围内（含边界）
 * @param rectPoints - 矩形的四个顶点（顺序无关，要求为轴对齐矩形）
 * @param points - 点数组
 * @returns 两个点都在矩形内返回 true，否则返回 false
 */
export function arePointsInRectangle(
	_rectPoints: (McGePoint3d|null)[],
	_points: (McGePoint3d|null)[],
): boolean {
	// 提取所有 x 和 y 坐标
	const rectPoints = _rectPoints.filter(p => p !== null);
	const points = _points.filter(p => p !== null);
	const xs = rectPoints.map(p => p.x);
	const ys = rectPoints.map(p => p.y);

	const minX = Math.min(...xs);
	const maxX = Math.max(...xs);
	const minY = Math.min(...ys);
	const maxY = Math.max(...ys);

	/**
	 * 检查单个点是否在矩形边界内（含边界）
	 */
	const isPointInRect = (p: McGePoint3d): boolean => {
		return p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
	};

	// 两个点都必须在矩形内
	return points.every(pt => isPointInRect(pt));
}

/**
 * 将 CellInput 数组导出为 Excel 文件
 * @param data 输入数据
 * @param filename 输出文件名（浏览器）或路径（Node.js）
 */
interface CellInput {
	type: DataType;
	content: string;
	name: string;
}
/**
 * 将单元格数据导出为 Excel
 */
async function exportExcelFromCells(
	data: CellInput[],
	filename: string = 'tableData.xlsx'
) {
	const workbook = new ExcelJS.Workbook();
	const worksheet = workbook.addWorksheet('Sheet1');

	const cellRegex = /^([A-Z]+)(\d+)$/;
	const parsedMerges: { start: { row: number; col: number }; end: { row: number; col: number } }[] = [];
	const cellsToSet: { row: number; col: number; value: string }[] = [];

	/**
	 * 解析 A1 格式为 {row, col}
	 */
	function parseCellRef(cellName: string): { row: number; col: number } {
		const match = cellName.match(cellRegex);
		if (!match) throw new Error(`无效的单元格名: ${cellName}`);
		const [, colStr, rowStr] = match;
		let col = 0;
		for (let i = 0; i < colStr.length; i++) {
			col = col * 26 + (colStr.charCodeAt(i) - 64);
		}
		return { row: parseInt(rowStr), col };
	}

	// 第一步：处理所有数据
	for (const item of data) {
		if (item.type === DataType.merged) {
			const cellNames = item.name.split('+').map(s => s.trim());
			const positions = cellNames.map(parseCellRef);

			const startRow = Math.min(...positions.map(p => p.row));
			const endRow = Math.max(...positions.map(p => p.row));
			const startCol = Math.min(...positions.map(p => p.col));
			const endCol = Math.max(...positions.map(p => p.col));

			parsedMerges.push({
				start: { row: startRow, col: startCol },
				end: { row: endRow, col: endCol }
			});

			worksheet.mergeCells(startRow, startCol, endRow, endCol);
			const masterCell = worksheet.getCell(startRow, startCol);
			masterCell.value = item.content;
			masterCell.alignment = { horizontal: 'center', vertical: 'middle' };
		} else if (item.type === DataType.standalone) {
			const pos = parseCellRef(item.name);
			cellsToSet.push({ row: pos.row, col: pos.col, value: item.content });
		}
	}

	// 第二步：设置独立单元格（跳过合并区域）
	for (const cell of cellsToSet) {
		const isOverlapped = parsedMerges.some(merge =>
			cell.row >= merge.start.row &&
			cell.row <= merge.end.row &&
			cell.col >= merge.start.col &&
			cell.col <= merge.end.col
		);

		if (!isOverlapped) {
			const wsCell = worksheet.getCell(cell.row, cell.col);
			wsCell.value = cell.value;
		}
	}

	//  第三步：添加边框样式到所有已使用的单元格

	//  正确写法：TypeScript 兼容
	const borderStyle = {
		top: { style: 'thin' as const, color: { argb: 'FF000000' } },
		left: { style: 'thin' as const, color: { argb: 'FF000000' } },
		bottom: { style: 'thin' as const, color: { argb: 'FF000000' } },
		right: { style: 'thin' as const, color: { argb: 'FF000000' } }
	};

	// 获取最大行列范围
	let maxRow = 1;
	let maxCol = 1;

	[...cellsToSet, ...parsedMerges.flatMap(merge => [
		merge.start, { row: merge.end.row, col: merge.end.col }
	])].forEach(pos => {
		maxRow = Math.max(maxRow, pos.row);
		maxCol = Math.max(maxCol, pos.col);
	});

	// 为所有可能用到的单元格加边框
	for (let row = 1; row <= maxRow; row++) {
		for (let col = 1; col <= maxCol; col++) {
			const cell = worksheet.getCell(row, col);
			if (cell.value !== null && cell.value !== undefined) {
				cell.border = borderStyle;
				// 可选：默认居中对齐
				if (!cell.alignment) {
					cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
				}
			}
		}
	}

	// 浏览器环境
	const buffer = await workbook.xlsx.writeBuffer();
	const blob = new Blob([buffer], {
		type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	});
	// @ts-ignore
	saveAs(blob, filename);
}

type Matrix = any[][];
type SubMatrix2x2 = MatrixValue[][];

interface CombineResult<T> {
	name: string;
	data: SubMatrix2x2;
}
/**
 * 生成所有左块 + 右块组合，只保留左块行号 ≤ 右块行号的组合
 * 规则：
 * - 左块：最左列的子矩阵 (A列)
 * - 右块：最右列的子矩阵 (C列)
 * - 组合：Xr + Ys，其中 r <= s
 * - 输出：所有满足条件的组合
 */
// 改为支持任意类型 T
function combineSubMatrices<T>(matrix: Matrix, inputNames: string[]): CombineResult<T>[] {
	if (!matrix || matrix.length === 0 || matrix[0].length < 2) {
		throw new Error("Matrix must be at least 1x2");
	}

	const nameToPosition = new Map<string, { row: number; col: number }>();

	// 解析输入名称
	for (const rawName of inputNames) {
		const name = rawName.trim().toUpperCase();
		const match = name.match(/^([A-Z])(\d+)$/);
		if (!match) continue;

		const colIndex = match[1].charCodeAt(0) - 65;
		const rowIndex = parseInt(match[2], 10) - 1;

		if (rowIndex >= 0 && colIndex >= 0 &&
			rowIndex <= matrix.length - 2 && colIndex <= matrix[0].length - 2) {
			nameToPosition.set(name, { row: rowIndex, col: colIndex });
		}
	}

	if (nameToPosition.size === 0) {
		console.log("No valid submatrices found in input.");
		return [];
	}

	// 按列分组
	const colGroups = new Map<number, Map<number, string>>(); // col -> row -> name

	nameToPosition.forEach((pos, name) => {
		if (!colGroups.has(pos.col)) {
			colGroups.set(pos.col, new Map());
		}
		colGroups.get(pos.col)!.set(pos.row, name);
	})

	// 找出最左列（左块）和最右列（右块）
	const cols = Array.from(colGroups.keys()).sort((a, b) => a - b);
	if (cols.length < 2) {
		console.log("Need at least two columns for combination.");
		return [];
	}

	const leftCol = cols[0];
	const rightCol = cols[cols.length - 1];

	const leftColMap = colGroups.get(leftCol)!;
	const rightColMap = colGroups.get(rightCol)!;

	// 获取所有行号
	const leftRows = Array.from(leftColMap.keys()).sort((a, b) => a - b);
	const rightRows = Array.from(rightColMap.keys()).sort((a, b) => a - b);

	const results: CombineResult<T>[] = [];

	// 生成所有左块 + 右块组合，只保留左块行号 ≤ 右块行号
	for (const leftRow of leftRows) {
		const leftName = leftColMap.get(leftRow)!;
		const leftRowNum = leftRow + 1; // 0-based to 1-based

		for (const rightRow of rightRows) {
			const rightName = rightColMap.get(rightRow)!;
			const rightRowNum = rightRow + 1;

			// 只保留左块行号 ≤ 右块行号的组合
			if (leftRowNum > rightRowNum) continue;

			const combinedName = `${leftName}+${rightName}`;

			try {
				// 统一规则：对于 Xr + Ys
				// - [0][0]: Xr 的左上角
				// - [0][1]: Yr 的右上角 (同左块行号)
				// - [1][0]: Xs 的左下角 (同右块行号)
				// - [1][1]: Ys 的右下角
				const yRowName = `${String.fromCharCode(65 + rightCol)}${leftRowNum}`;
				const xSRowName = `${String.fromCharCode(65 + leftCol)}${rightRowNum}`;

				if (!nameToPosition.has(yRowName) || !nameToPosition.has(xSRowName)) {
					console.warn(`Required blocks not found for ${combinedName}: ${yRowName}, ${xSRowName}`);
					continue;
				}

				const yRowPos = nameToPosition.get(yRowName)!;
				const xSRowPos = nameToPosition.get(xSRowName)!;

				const topLeft = matrix[leftRow][leftCol];
				const topRight = matrix[yRowPos.row][yRowPos.col + 1];
				const bottomLeft = matrix[xSRowPos.row + 1][xSRowPos.col];
				const bottomRight = matrix[rightRow + 1][rightCol + 1];

				const data: SubMatrix2x2 = [
					[topLeft, topRight],
					[bottomLeft, bottomRight]
				];

				if (!data.flat().filter(item => !item).length) {
					results.push({ name: combinedName, data });
					break;
				}
			} catch (error) {
				console.warn(`Error processing ${combinedName}:`, error);
				continue;
			}
		}
	}

	return results;
}



// 在线编辑表格
function isLocalhost() {
	return (
		location.hostname === 'localhost' ||
		location.hostname === '127.0.0.1' ||
		location.hostname === '::1' // IPv6 的 localhost
	);
}
export async function Mx_EditTable() {
	// 判断是否是本地环境
	if (!isLocalhost()) return alert('请在本地环境测试！');
	const tableDataArr = await getAllTableDataArr();
	if (tableDataArr && tableDataArr.length) {
		window.open(`http://localhost:5500/dist/spreadJs.html?tableData=${JSON.stringify(tableDataArr)}`);
	}
}