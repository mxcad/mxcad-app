// postinstall.js
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// 获取当前包的 dist 目录
const distDir = path.join(__dirname, 'dist');

/**
 * 递归读取目录下所有 .gz 文件路径
 * @param {string} dir - 目录路径
 * @returns {string[]} 所有 .gz 文件的绝对路径
 */
function getAllGzFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 递归遍历子目录
      results = results.concat(getAllGzFiles(filePath));
    } else if (file.endsWith('.gz')) {
      // 只收集 .gz 文件
      results.push(filePath);
    }
  });

  return results;
}

/**
 * 解压单个 .gz 文件
 * @param {string} gzPath - .gz 文件路径
 * @returns {Promise<void>}
 */
function gunzipFile(gzPath) {
  const outPath = gzPath.slice(0, -3); // 去掉 .gz 后缀
  const gzip = zlib.createGunzip();
  const inp = fs.createReadStream(gzPath);
  const out = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    inp.pipe(gzip).pipe(out);
    out.on('finish', () => {
      console.log(`✅ 解压完成: ${path.relative(__dirname, outPath)}`);
      resolve();
    });
    out.on('error', (err) => {
      reject(new Error(`解压失败: ${path.basename(gzPath)}\n  ${err.message}`));
    });
  });
}

/**
 * 主函数
 */
async function run() {
  console.log('📦 mxcad-app: 正在递归解压静态资源...');

  if (!fs.existsSync(distDir)) {
    console.warn('⚠️ 未找到 dist 目录，跳过解压');
    return;
  }

  // 获取所有 .gz 文件（递归）
  const gzFiles = getAllGzFiles(distDir);

  if (gzFiles.length === 0) {
    console.log('✅ 无 .gz 文件需要解压');
    return;
  }

  console.log(`🔍 发现 ${gzFiles.length} 个 .gz 文件，开始解压...`);

  let successCount = 0;
  for (const gzPath of gzFiles) {
    const outputPath = gzPath.slice(0, -3);

    // 如果原始文件已存在，跳过
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  已存在，跳过: ${path.relative(__dirname, outputPath)}`);
      continue;
    }

    try {
      await gunzipFile(gzPath);
      successCount++;
      // 可选：解压后删除 .gz 文件（节省磁盘空间）
      // fs.unlinkSync(gzPath);
    } catch (err) {
      console.warn(err.message);
    }
  }

  console.log(`🎉 mxcad-app 静态资源解压完成！共解压 ${successCount}/${gzFiles.length} 个文件`);
}

run().catch((err) => {
  console.error('❌ 解压过程发生错误：', err);
  process.exit(1); // 确保安装失败
});