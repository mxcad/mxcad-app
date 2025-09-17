export interface VuetifyThemeConfigThemesLightColors {
  surface: string;
  background: string;
  accent: string;
  prominent: string;
  hover_herder_btn: string;
  modification: string;
  transition: string;
  undertint: string;
  depth: string;
  "on-undertint-bg": string;
  "undertint-bg": string;
  "depth-bg": string;
  inverse: string;
  inverse1: string;
  console: string;
  "on-console": string;
  "dialog-card": string;
  "dialog-card-text": string;
  hover_electron_view_tab_btn_hover: string;
  hover_electron_view_tab_btn_action: string;
  nav_bg: string;
  nav_bg_active: string;
  sketches_color: string;
  toolbar_header: string;
  [k: string]: any;
}

export interface VuetifyThemeConfigThemesLightVariables {
  "border-color": string;
  "border-opacity": number;
  "high-emphasis-opacity": number;
  "medium-emphasis-opacity": number;
  "disabled-opacity": number;
  "idle-opacity": number;
  "hover-opacity": number;
  "focus-opacity": number;
  "selected-opacity": number;
  "activated-opacity": number;
  "pressed-opacity": number;
  "dragged-opacity": number;
  "theme-kbd": string;
  "theme-on-kbd": string;
  "theme-code": string;
  "theme-on-code": string;
  "theme-tbody": string;
  "theme-btn-hover": string;
  "theme-undertint-bg-overlay-multiplier": number;
  [k: string]: any;
}

export interface VuetifyThemeConfigThemesLight {
  colors: VuetifyThemeConfigThemesLightColors;
  variables: VuetifyThemeConfigThemesLightVariables;
  [k: string]: any;
}

export interface VuetifyThemeConfigThemesDarkColors {
  surface: string;
  background: string;
  accent: string;
  prominent: string;
  hover_herder_btn: string;
  modification: string;
  transition: string;
  undertint: string;
  "on-undertint": string;
  depth: string;
  "on-depth": string;
  "undertint-bg": string;
  "depth-bg": string;
  inverse: string;
  inverse1: string;
  console: string;
  "on-console": string;
  "dialog-card": string;
  "dialog-card-text": string;
  hover_electron_view_tab_btn_hover: string;
  hover_electron_view_tab_btn_action: string;
  nav_bg: string;
  nav_bg_active: string;
  sketches_color: string;
  toolbar_header: string;
  [k: string]: any;
}

export interface VuetifyThemeConfigThemesDarkVariables {
  "border-color": string;
  "border-opacity": number;
  "high-emphasis-opacity": number;
  "medium-emphasis-opacity": number;
  "disabled-opacity": number;
  "idle-opacity": number;
  "hover-opacity": number;
  "focus-opacity": number;
  "selected-opacity": number;
  "activated-opacity": number;
  "pressed-opacity": number;
  "dragged-opacity": number;
  "theme-kbd": string;
  "theme-on-kbd": string;
  "theme-code": string;
  "theme-on-code": string;
  "theme-tbody": string;
  "theme-btn-hover": string;
  "theme-surface-variant": string;
  "theme-on-surface-variant": string;
  [k: string]: any;
}

export interface VuetifyThemeConfigThemesDark {
  colors: VuetifyThemeConfigThemesDarkColors;
  variables: VuetifyThemeConfigThemesDarkVariables;
  [k: string]: any;
}

export interface VuetifyThemeConfigThemes {
  light: VuetifyThemeConfigThemesLight;
  dark: VuetifyThemeConfigThemesDark;
  [k: string]: any;
}

export interface VuetifyThemeConfig {
  defaultTheme: string;
  themes: VuetifyThemeConfigThemes;
  [k: string]: any;
}
