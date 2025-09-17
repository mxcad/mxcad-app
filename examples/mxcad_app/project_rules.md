# MxCADNpmApp 项目规范

## 1. 项目技术栈

- **前端框架**：Vue 2.6.11
- **开发语言**：TypeScript 4.x
- **构建工具**：Vue CLI 5.x
- **CAD核心库**：mxcad-app 1.0.15
- **3D渲染**：Three.js 0.113.2
- **装饰器支持**：vue-class-component、vue-property-decorator

## 2. 项目结构规范

```
├── src/
│   ├── App.vue              # 应用入口组件
│   ├── main.ts              # 主入口文件
│   ├── runApp.ts            # 应用启动函数
│   ├── components/          # Vue组件目录
│   │   ├── Home.vue         # 首页组件
│   │   ├── MenuItem.vue     # 菜单项组件
│   │   └── index.ts         # 组件导出和初始化
│   ├── gis/                 # GIS相关功能
│   └── assets/              # 静态资源
├── public/                  # 静态资源和配置
│   ├── index.html           # HTML入口
│   └── ini/                 # 配置文件目录
├── package.json             # 项目依赖和脚本
├── tsconfig.json            # TypeScript配置
├── vue.config.js            # Vue CLI配置
└── .gitignore               # Git忽略规则
```

## 3. 编码规范

### 3.1 TypeScript规范
- 严格模式（`"strict": true`）
- 支持装饰器语法（`"experimentalDecorators": true`）
- 使用路径别名 `@/` 表示 `src/` 目录
- 包含类型声明文件（`.d.ts`）支持

### 3.2 Vue组件规范
- 使用类装饰器风格编写组件
- 组件命名采用PascalCase（如 `Home.vue`）
- 组件导出使用index.ts统一管理
- 支持JSX语法（`"jsx": "preserve"`）

### 3.3 导入规范
- 使用相对路径导入同级或子级模块
- 使用 `@/` 别名导入src下的其他模块
- 导入顺序：外部依赖、内部模块、样式文件

## 4. 构建与运行规范

### 4.1 npm脚本
- `npm run serve`：启动开发服务器（端口8081）
- `npm run serve_force`：强制无缓存启动开发服务器
- `npm run build`：构建生产版本
- `npm run lint`：运行代码检查

### 4.2 开发服务器配置
- 端口：8081
- 开发环境公共路径：`/`
- 生产环境公共路径：`./`
- 关闭客户端覆盖层错误提示

### 4.3 Webpack配置
- 使用MxCadAssetsWebpackPlugin处理CAD资源
- 定义NODE_ENV环境变量
- 支持多线程加载wasm（默认开启）
- 可选配置mapbox-gl库

## 5. 版本控制规范

### 5.1 Git忽略规则
- node_modules目录
- 构建输出dist目录
- 本地环境配置文件（.env.*.local）
- 日志文件（npm-debug.log*、yarn-debug.log*等）
- 编辑器配置文件（.idea、.vscode等）
- 系统文件（.DS_Store等）

## 6. 命名规范

- 文件命名：组件文件使用PascalCase，其他文件使用kebab-case或camelCase
- 变量命名：使用camelCase
- 类命名：使用PascalCase
- 函数命名：使用camelCase

## 7. 版权规范

- 源代码文件应包含版权声明信息
- 引用第三方库时应遵守其许可协议

## 8. 特殊功能规范

### 8.1 移动端适配
- 系统会自动检测移动设备并根据配置跳转到移动页面
- 移动端判断基于用户代理、屏幕尺寸和触摸能力

### 8.2 配置文件管理
- 服务器配置文件：`public/ini/myServerConfig.json`
- UI配置文件：`public/ini/myUiConfig.json`
- 主题配置文件：`public/ini/myVuetifyThemeConfig.json`
- 快捷命令配置：`public/ini/myQuickCommand.json`

## 9. 代码质量规范

- 使用ESLint进行代码风格检查
- 遵循TypeScript严格类型检查
- 保持代码简洁、清晰，添加必要的注释