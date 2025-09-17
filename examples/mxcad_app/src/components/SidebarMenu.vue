<template>
  <div class="sidebar-menu" :class="{ collapsed: menuState.collapsed }">
    <!-- 折叠切换按钮 -->
    <div class="menu-toggle" @click="toggleMenu">
      <SvgIcon 
        :name="menuState.collapsed ? 'menu' : 'menu-open'" 
        :size="24" 
        class="toggle-icon" 
      />
      <span v-if="!menuState.collapsed" class="toggle-text">功能测试</span>
    </div>

    <!-- 菜单列表容器 -->
    <div class="menu-list">
      <MenuItem
        v-for="item in menuItems"
        :key="item.id"
        :menu-item="item"
        :collapsed="menuState.collapsed"
        :active-menu-id="menuState.activeMenuId"
        :expanded-menus="menuState.expandedMenus"
        @menu-click="handleMenuClick"
        @submenu-toggle="handleSubMenuToggle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import SvgIcon from './SvgIcon.vue';

// 菜单项数据接口
interface MenuItemData {
  id: string;
  title: string;
  icon?: string;
  route?: string;
  action?: string;
  children?: MenuItemData[];
  disabled?: boolean;
  badge?: string | number;
  tooltip?: string;
}

// 菜单状态接口
interface MenuState {
  collapsed: boolean;
  activeMenuId: string | null;
  expandedMenus: string[];
  hoveredMenu: string | null;
}

@Component({
  components: {
    MenuItem,
    SvgIcon
  }
})
export default class SidebarMenu extends Vue {
  @Prop({ default: () => [] }) menuItems!: MenuItemData[];
  
  // 菜单状态管理
  menuState: MenuState = {
    collapsed: true,
    activeMenuId: null,
    expandedMenus: [],
    hoveredMenu: null
  };

  private hoverTimer: number | null = null;

  // 切换菜单展开/收缩状态
  toggleMenu(): void {
    this.menuState.collapsed = !this.menuState.collapsed;
    
    // 收缩时关闭所有子菜单
    if (this.menuState.collapsed) {
      this.menuState.expandedMenus = [];
    }
    
    this.$emit('menu-toggle', this.menuState.collapsed);
  }

  // 处理菜单项点击事件
  handleMenuClick(menuItem: MenuItemData): void {
    // 如果有子菜单，则处理展开/收缩
    if (menuItem.children && menuItem.children.length > 0) {
      this.handleSubMenuToggle(menuItem.id);
      return;
    }

    // 设置当前活跃菜单
    this.menuState.activeMenuId = menuItem.id;

    // 执行相应的动作
    if (menuItem.action) {
      this.executeAction(menuItem.action);
    } else if (menuItem.route) {
      this.navigateToRoute(menuItem.route);
    }

    this.$emit('menu-item-click', menuItem);
  }

  // 处理子菜单展开/收缩
  handleSubMenuToggle(menuId: string): void {
    const index = this.menuState.expandedMenus.indexOf(menuId);
    
    if (index > -1) {
      // 收缩子菜单
      this.menuState.expandedMenus.splice(index, 1);
    } else {
      // 展开子菜单
      this.menuState.expandedMenus.push(menuId);
    }

    this.$emit('submenu-toggle', menuId, index === -1);
  }

  // 执行菜单动作
  private executeAction(action: string): void {
    try {
      // 检查是否是全局函数
      if (typeof (window as any)[action] === 'function') {
        (window as any)[action]();
      } else {
        console.warn(`Action ${action} not found`);
      }
    } catch (error) {
      console.error(`Error executing action ${action}:`, error);
    }
  }

  // 路由导航
  private navigateToRoute(route: string): void {
    try {
      // 简单的路由处理，可以后期扩展
      console.log('Navigate to route:', route);
      // 这里可以添加具体的路由逻辑
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }

  // 组件销毁时清理资源
  beforeDestroy(): void {
    if (this.hoverTimer) {
      clearTimeout(this.hoverTimer);
    }
  }
}
</script>

<style scoped>
/* 主菜单容器 */
.sidebar-menu {
  width: 200px;
  height: 100vh;
  background-color: #212832;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  border-right: 1px solid rgba(174, 171, 171, 0.1);
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
}

.sidebar-menu.collapsed {
  width: 64px;
}

/* 折叠切换按钮 */
.menu-toggle {
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: #2E3440;
  border-bottom: 1px solid rgba(174, 171, 171, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease;
  user-select: none;
}

.menu-toggle:hover {
  background-color: rgba(33, 150, 243, 0.1);
}

.toggle-icon {
  font-size: 24px;
  color: #2196f3;
  transition: transform 0.3s ease;
  min-width: 24px;
}

.sidebar-menu.collapsed .toggle-icon {
  transform: rotate(0deg);
}

.toggle-text {
  margin-left: 12px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.2s ease;
}

.sidebar-menu.collapsed .toggle-text {
  opacity: 0;
  pointer-events: none;
}

/* 菜单列表容器 */
.menu-list {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 0;
}

/* 滚动条样式 */
.menu-list::-webkit-scrollbar {
  width: 4px;
}

.menu-list::-webkit-scrollbar-track {
  background: transparent;
}

.menu-list::-webkit-scrollbar-thumb {
  background-color: rgba(174, 171, 171, 0.3);
  border-radius: 2px;
}

.menu-list::-webkit-scrollbar-thumb:hover {
  background-color: rgba(174, 171, 171, 0.5);
}

/* Material Design Icons 字体支持 */
/* @import url('https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css'); */
</style>