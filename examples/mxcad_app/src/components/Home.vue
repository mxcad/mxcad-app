<template>
  <div class="app-container">
    <!-- 左侧菜单栏 -->
    <SidebarMenu 
      :menu-items="menuItems"
      @menu-item-click="handleMenuItemClick"
      @menu-toggle="handleMenuToggle"
    />
    
    <!-- CAD应用容器 -->
    <div 
      id="myApp" 
      :class="{ 'app-shifted': !menuCollapsed }"
      :style="{ marginLeft: menuCollapsed ? '64px' : '200px' }"
    ></div>

    <!-- 测试组件 -->
    <Test />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// 导入组件样式和初始化文件
import "./index"
import "mxcad-app/style"

// 导入CAD视图和命令处理
import mxcadview from './index';
// 导入菜单组件和配置
import SidebarMenu from './SidebarMenu.vue';
import { menuConfig, MenuItemData } from './MenuConfig';
import { MxFun } from 'mxdraw';

// 导出测试组件
import Test from './TestDemo.vue';


@Component({
  components: {
    SidebarMenu,
    Test
  }
})
export default class Home extends Vue {
  // 菜单数据
  menuItems: MenuItemData[] = menuConfig;
  
  // 菜单收缩状态
  menuCollapsed: boolean = true;
  
  protected mounted() {
    this.menuItems.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          if (child.children) {
            child.children.forEach(grandChild => {
            });
          }
        });
      }
    });
    
    mxcadview.create("#myApp");
  }
  
  // 处理菜单折叠事件
  handleMenuToggle(collapsed: boolean): void {
    this.menuCollapsed = collapsed;
    
    // 触发CAD视图的重绘以适应新的布局
    this.$nextTick(() => {
      // 延迟触发窗口resize事件，让CAD视图重新计算尺寸
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    });
  }
  
  // 处理菜单项点击事件
  handleMenuItemClick(menuItem: MenuItemData): void {
    if(menuItem.cmd) {
      MxFun.sendStringToExecute(menuItem.cmd)
    }
    // 如果有动作，则执行
    if (menuItem.action) {
    }
    
    // 如果有路由，则导航
    if (menuItem.route) {
    }
  }
}
</script>
<style scoped>
/* 全局样式重置 */
* {
  box-sizing: border-box;
}

body {
  background-color: #1a1a1a;
  color: #ffffff;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow: hidden;
}

/* 应用主容器 */
.app-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #212832;
}

/* CAD应用容器 */
#myApp {
  flex: 1;
  height: 100vh;
  background-color: #000;
  transition: margin-left 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
}

/* 菜单展开时的CAD应用样式 */
#myApp.app-shifted {
  margin-left: 200px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  #myApp {
    margin-left: 0 !important;
  }
  
  .app-container {
    flex-direction: column;
  }
}

/* 确保菜单在最顶层 */
.sidebar-menu {
  z-index: 9999;
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

/* 动画优化 */
.app-container * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 禁用文本选择 */
.app-container {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}</style>
