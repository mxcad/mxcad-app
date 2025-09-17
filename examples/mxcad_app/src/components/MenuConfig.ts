// 菜单配置数据
export interface MenuItemData {
  id: string;
  title: string;
  icon?: string;
  route?: string;
  action?: string;
  children?: MenuItemData[];
  disabled?: boolean;
  badge?: string | number;
  tooltip?: string;
  cmd?: string;
}

// 左侧菜单配置数据
export const menuConfig: MenuItemData[] = [
  {
    id: 'paramDraw-tools',
    title: '参数化绘图',
    tooltip: '参数化绘图工具',
    icon: 'annotation',
    children: [
      {
        id: "test-draw-line",
        title: "绘直线",
        tooltip: "测试绘直线",
        icon: 'annotation',
        cmd: "Mx_Test_DrawLine"
      }
    ]
  },
  {
    id:'testDemo',
    title: '测试',
    tooltip: '测试',
    icon: 'annotation',
    children: [
      {
        title:'插件测试',
        cmd: 'My_PluginTest',
        id: 'mx-test-plugin',
        icon: 'annotation'
      },
      {
        title:'扩展工具',
        cmd: 'My_Extool',
        id: 'mx-test-extend-tools',
        icon: 'annotation'
      }
    ]
  }
]

// 菜单快捷键配置
export const menuShortcuts: Record<string, string> = {
  'draw-line': 'L',
  'gis-point': 'P',
  'gis-linestring': 'PL',
  'gis-polygon': 'POL',
  'zoom-in': 'Ctrl++',
  'zoom-out': 'Ctrl+-',
  'zoom-fit': 'Ctrl+0'
};

// 菜单权限配置（可扩展用于用户权限控制）
export const menuPermissions: Record<string, string[]> = {
  'drawing-tools': ['user', 'admin'],
  'edit-tools': ['user', 'admin'],
  'view-tools': ['user', 'admin'],
  'map-tools': ['admin'],
  'layer-tools': ['user', 'admin'],
  'settings': ['admin']
};