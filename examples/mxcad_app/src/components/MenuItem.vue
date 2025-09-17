<template>
  <div class="menu-item-container">
    <!-- 主菜单项 -->
    <div 
      class="menu-item" 
      :class="{
        'active': isActive,
        'has-children': hasChildren,
        'expanded': isExpanded,
        'disabled': menuItem.disabled
      }"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- 左侧活跃指示器 -->
      <div class="active-indicator" v-if="isActive"></div>
      
      <!-- 图标容器 -->
      <div class="menu-icon-container">
        <SvgIcon
          v-if="menuItem.icon" 
          :name="menuItem.icon"
          :size="24"
          class="menu-icon"
        />
        <div v-else class="menu-icon-placeholder"></div>
      </div>

      <!-- 文字内容 -->
      <div class="menu-content" v-if="!collapsed">
        <span class="menu-title">{{ menuItem.title }}</span>
        <span v-if="menuItem.badge" class="menu-badge">{{ menuItem.badge }}</span>
      </div>

      <!-- 展开指示器 -->
      <div 
        v-if="hasChildren && !collapsed" 
        class="expand-indicator"
        :class="{ 'rotated': isExpanded }"
      >
        <SvgIcon name="chevron-right" :size="18" />
      </div>

      <!-- 收缩状态下的提示框 -->
      <div 
        v-if="collapsed && showTooltip" 
        class="menu-tooltip"
        :style="tooltipStyle"
      >
        <div class="tooltip-content">
          <div class="tooltip-title">{{ menuItem.title }}</div>
          <div v-if="menuItem.tooltip" class="tooltip-description">{{ menuItem.tooltip }}</div>
        </div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>

    <!-- 子菜单容器 -->
    <transition 
      name="submenu" 
      @enter="onSubMenuEnter" 
      @leave="onSubMenuLeave"
    >
      <div 
        v-if="hasChildren && isExpanded && !collapsed" 
        class="submenu-container"
      >
        <MenuItem
          v-for="child in menuItem.children"
          :key="child.id"
          :menu-item="child"
          :collapsed="collapsed"
          :active-menu-id="activeMenuId"
          :expanded-menus="expandedMenus"
          :level="level + 1"
          @menu-click="$emit('menu-click', $event)"
          @submenu-toggle="$emit('submenu-toggle', $event)"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
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

@Component({
  name: 'MenuItem',
  components: {
    SvgIcon
  }
})
export default class MenuItem extends Vue {
  @Prop({ required: true }) menuItem!: MenuItemData;
  @Prop({ default: false }) collapsed!: boolean;
  @Prop({ default: null }) activeMenuId!: string | null;
  @Prop({ default: () => [] }) expandedMenus!: string[];
  @Prop({ default: 0 }) level!: number;

  showTooltip: boolean = false;
  private tooltipTimer: number | null = null;

  // 计算属性
  get isActive(): boolean {
    return this.activeMenuId === this.menuItem.id;
  }

  get hasChildren(): boolean {
    return !!(this.menuItem.children && this.menuItem.children.length > 0);
  }

  get isExpanded(): boolean {
    return this.expandedMenus.includes(this.menuItem.id);
  }

  get tooltipStyle(): object {
    return {
      left: '70px',
      top: '50%',
      transform: 'translateY(-50%)'
    };
  }

  // 处理点击事件
  handleClick(): void {
    if (this.menuItem.disabled) {
      return;
    }

    this.$emit('menu-click', this.menuItem);
  }

  // 鼠标进入事件
  handleMouseEnter(): void {
    if (this.collapsed) {
      // 延迟显示tooltip，避免快速划过时频繁显示
      this.tooltipTimer = setTimeout(() => {
        this.showTooltip = true;
      }, 300);
    }
  }

  // 鼠标离开事件
  handleMouseLeave(): void {
    if (this.tooltipTimer) {
      clearTimeout(this.tooltipTimer);
      this.tooltipTimer = null;
    }
    this.showTooltip = false;
  }

  // 子菜单进入动画
  onSubMenuEnter(el: Element): void {
    const element = el as HTMLElement;
    element.style.maxHeight = '0';
    element.style.opacity = '0';
    
    // 强制重绘
    element.offsetHeight;
    
    element.style.transition = 'max-height 0.25s ease-out, opacity 0.2s ease-out';
    element.style.maxHeight = element.scrollHeight + 'px';
    element.style.opacity = '1';
  }

  // 子菜单离开动画
  onSubMenuLeave(el: Element): void {
    const element = el as HTMLElement;
    element.style.maxHeight = element.scrollHeight + 'px';
    element.style.opacity = '1';
    
    // 强制重绘
    element.offsetHeight;
    
    element.style.transition = 'max-height 0.25s ease-in, opacity 0.2s ease-in';
    element.style.maxHeight = '0';
    element.style.opacity = '0';
  }

  // 组件销毁时清理定时器
  beforeDestroy(): void {
    if (this.tooltipTimer) {
      clearTimeout(this.tooltipTimer);
    }
  }
}
</script>

<style scoped>
/* 菜单项容器 */
.menu-item-container {
  position: relative;
}

/* 主菜单项样式 */
.menu-item {
  position: relative;
  height: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  border-radius: 0 24px 24px 0;
  margin: 2px 8px 2px 0;
  color: #fff;
}

/* 不同层级的缩进 */
.menu-item {
  padding-left: calc(16px + var(--level, 0) * 24px);
}

/* 悬停效果 */
.menu-item:hover {
  background-color: rgba(33, 150, 243, 0.1);
  transform: translateX(4px);
}

/* 活跃状态 */
.menu-item.active {
  background-color: rgba(33, 150, 243, 0.2);
  color: #2196f3;
}

.menu-item.active .menu-icon {
  color: #2196f3;
}

/* 禁用状态 */
.menu-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.menu-item.disabled:hover {
  background-color: transparent;
  transform: none;
}

/* 活跃指示器 */
.active-indicator {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 24px;
  background-color: #2196f3;
  border-radius: 0 2px 2px 0;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.menu-item.active .active-indicator {
  opacity: 1;
}

/* 图标容器 */
.menu-icon-container {
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.menu-icon {
  font-size: 24px;
  color: #AEABAB;
  transition: all 0.2s ease;
}

.menu-item:hover .menu-icon {
  color: #FFFFFF;
  transform: scale(1.05);
}

.menu-icon-placeholder {
  width: 24px;
  height: 24px;
  background-color: rgba(174, 171, 171, 0.3);
  border-radius: 50%;
}

/* 菜单内容 */
.menu-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
}

.menu-title {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
}

.menu-item.active .menu-title {
  color: #2196f3;
  font-weight: 500;
}

/* 徽章 */
.menu-badge {
  background-color: #2196f3;
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
  margin-left: 8px;
}

/* 展开指示器 */
.expand-indicator {
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.expand-indicator.rotated {
  transform: rotate(90deg);
}

.expand-indicator i {
  color: #AEABAB;
  font-size: 18px;
  transition: color 0.2s ease;
}

.menu-item:hover .expand-indicator i {
  color: #FFFFFF;
}

/* 子菜单容器 */
.submenu-container {
  background-color: rgba(46, 52, 64, 0.5);
  border-left: 2px solid rgba(33, 150, 243, 0.3);
  margin-left: 24px;
  overflow: hidden;
}

/* 子菜单动画 */
.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.25s ease;
}

.submenu-enter,
.submenu-leave-to {
  max-height: 0 !important;
  opacity: 0 !important;
}

/* 提示框样式 */
.menu-tooltip {
  position: absolute;
  z-index: 9999;
  background-color: #454F61;
  border: 1px solid rgba(174, 171, 171, 0.2);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  white-space: nowrap;
  min-width: 120px;
}

.tooltip-content {
  padding: 8px 12px;
}

.tooltip-title {
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
}

.tooltip-description {
  color: #AEABAB;
  font-size: 12px;
  line-height: 1.3;
}

.tooltip-arrow {
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #454F61;
}

/* 递归子菜单项的缩进调整 */
.submenu-container .menu-item {
  padding-left: calc(40px + var(--level, 0) * 20px);
  height: 25px;
  margin: 1px 4px 1px 0;
}

.submenu-container .menu-item .menu-icon {
  font-size: 20px;
}

.submenu-container .menu-item .menu-title {
  font-size: 13px;
}

/* 深层子菜单的背景色递进 */
.submenu-container .submenu-container {
  background-color: rgba(69, 79, 97, 0.3);
  margin-left: 20px;
}

.submenu-container .submenu-container .submenu-container {
  background-color: rgba(69, 79, 97, 0.5);
}
</style>