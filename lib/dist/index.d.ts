/// <reference path="./mxcad.d.ts" />
/// <reference path="./mxdraw.d.ts" />

import { App } from 'vue';
import { DateInstance } from 'vuetify';
import { DefaultsInstance } from 'vuetify';
import { DisplayInstance } from 'vuetify';
import { GoToInstance } from 'vuetify';
import { IconAliases } from 'vuetify';
import { IconSet } from 'vuetify';
import { LocaleInstance } from 'vuetify';
import { LocaleMessages } from 'vuetify';
import { LocaleOptions } from 'vuetify';
import { McObject } from 'mxcad';
import { Ref } from 'vue';
import { ShallowRef } from 'vue';
import { ThemeInstance } from 'vuetify';

declare interface AppConfig {
    uiConfig?: string;
    serverConfig?: string;
    sketchesUiConfig?: string;
    quickCommandConfig?: string;
    themeConfig?: string;
}

/**
 * 事件总线类
 */
declare class EventBus<EventMap extends Record<string, any>> {
    private handlers;
    /**
     * 注册事件监听器
     * @param event - 事件类型
     * @param handler - 事件处理函数
     */
    on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => any): any;
    /**
     * 移除事件监听器
     */
    off<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => any): any;
    /**
     * 触发事件
     */
    emit<E extends keyof EventMap>(event: E, payload?: EventMap[E]): any;
    /**
     * 注册一次性事件监听器
     */
    once<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => any): any;
    /**
     * 清除指定事件的所有监听器
     */
    clear<E extends keyof EventMap>(event?: E): any;
    /**
     * 获取指定事件的监听器数量
     */
    count<E extends keyof EventMap>(event: E): number;
}

declare class MxCADApp extends MxCADEvents {
    setStaticAssetPath(url: string): void;
    getStaticAssetPath(): string;
    initConfig(config: AppConfig): void;
    /** 获取mxcad-app使用的vuetify实例 */
    getVuetify(): Promise<{
        install: (app: App) => void;
        unmount: () => void;
        defaults: Ref<DefaultsInstance, DefaultsInstance>;
        display: DisplayInstance;
        theme: ThemeInstance & {
            install: (app: App) => void;
        };
        icons: {
            defaultSet: string;
            aliases: Partial<IconAliases>;
            sets: Record<string, IconSet>;
        };
        locale: {
            isRtl: Ref<boolean>;
            rtl: Ref<Record<string, boolean>>;
            rtlClasses: Ref<string>;
            name: string;
            decimalSeparator: ShallowRef<string>;
            messages: Ref<LocaleMessages>;
            current: Ref<string>;
            fallback: Ref<string>;
            t: (key: string, ...params: unknown[]) => string;
            n: (value: number) => string;
            provide: (props: LocaleOptions) => LocaleInstance;
        };
        date: {
            options: {
                adapter: (new (options: {
                    locale: any;
                    formats?: any;
                }) => DateInstance) | DateInstance;
                formats?: Record<string, any>;
                locale: Record<string, any>;
            };
            instance: {
                locale?: any;
                date: (value?: any) => unknown;
                format: (date: unknown, formatString: string) => string;
                toJsDate: (value: unknown) => Date;
                parseISO: (date: string) => unknown;
                toISO: (date: unknown) => string;
                startOfDay: (date: unknown) => unknown;
                endOfDay: (date: unknown) => unknown;
                startOfWeek: (date: unknown, firstDayOfWeek?: number | string) => unknown;
                endOfWeek: (date: unknown) => unknown;
                startOfMonth: (date: unknown) => unknown;
                endOfMonth: (date: unknown) => unknown;
                startOfYear: (date: unknown) => unknown;
                endOfYear: (date: unknown) => unknown;
                isAfter: (date: unknown, comparing: unknown) => boolean;
                isAfterDay: (date: unknown, comparing: unknown) => boolean;
                isSameDay: (date: unknown, comparing: unknown) => boolean;
                isSameMonth: (date: unknown, comparing: unknown) => boolean;
                isSameYear: (date: unknown, comparing: unknown) => boolean;
                isBefore: (date: unknown, comparing: unknown) => boolean;
                isEqual: (date: unknown, comparing: unknown) => boolean;
                isValid: (date: any) => boolean;
                isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean;
                addMinutes: (date: unknown, amount: number) => unknown;
                addHours: (date: unknown, amount: number) => unknown;
                addDays: (date: unknown, amount: number) => unknown;
                addWeeks: (date: unknown, amount: number) => unknown;
                addMonths: (date: unknown, amount: number) => unknown;
                getYear: (date: unknown) => number;
                setYear: (date: unknown, year: number) => unknown;
                getDiff: (date: unknown, comparing: unknown, unit?: string) => number;
                getWeekArray: (date: unknown, firstDayOfWeek?: number | string) => unknown[][];
                getWeekdays: (firstDayOfWeek?: number | string, weekdayFormat?: "long" | "short" | "narrow") => string[];
                getWeek: (date: unknown, firstDayOfWeek?: number | string, firstWeekMinSize?: number) => number;
                getMonth: (date: unknown) => number;
                setMonth: (date: unknown, month: number) => unknown;
                getDate: (date: unknown) => number;
                setDate: (date: unknown, day: number) => unknown;
                getNextMonth: (date: unknown) => unknown;
                getPreviousMonth: (date: unknown) => unknown;
                getHours: (date: unknown) => number;
                setHours: (date: unknown, hours: number) => unknown;
                getMinutes: (date: unknown) => number;
                setMinutes: (date: unknown, minutes: number) => unknown;
            };
        };
        goTo: GoToInstance;
    }>;
}

export declare let mxcadApp: MxCADApp;

declare namespace mxcadApp_2 {
    export {
        MxCADView,
        mxcadApp
    }
}
export default mxcadApp_2;

declare class MxCADEvents extends EventBus<MxCADEventsMap> {
    /**
     * 创建vue app 实例
     */
    on(event: 'createVueApp', handler: (payload: MxCADEventsMap['createVueApp']) => void): void;
    /**
     * 挂载vue app 实例
     */
    on(event: 'mountedVueApp', handler: (payload: MxCADEventsMap['mountedVueApp']) => void): void;
    /**
     * 一次性监听创建vue app 实例
     */
    once(event: 'createVueApp', handler: (payload: MxCADEventsMap['createVueApp']) => void): void;
    /**
     * 一次性监听挂载vue app 实例
     */
    once(event: 'mountedVueApp', handler: (payload: MxCADEventsMap['mountedVueApp']) => void): void;
}

declare interface MxCADEventsMap {
    "createVueApp": App;
    "mountedVueApp": App;
}

export declare class MxCADView {
    constructor(config?: MxCADViewConfig);
    private vueApp?;
    private rootContainer?;
    private _config;
    mxcad: McObject;
    create(rootContainer?: string | HTMLElement): boolean;
    getVueApp(): App<Element> | undefined;
    getRootContainer(): HTMLElement | undefined;
    get config(): MxCADViewConfig;
}

declare interface MxCADViewConfig {
    rootContainer?: string | HTMLElement;
    openFile?: string;
    map?: boolean;
}

export { }

/**
 * plugins/howdyjs
 *
 * @@howdyjs documentation:  https://github.com/leon-kfd/howdyjs
 * doc: https://kongfandong.cn/howdy/
 * @howdyjs/mouse-menu 指令式右键菜单组件 <div v-mouse-menu="options" />
 * @howdyjs/resize  拖拽更改元素尺寸插件
 */
declare module '@howdyjs/to-drag' {
    interface ToDragEvent {
        [key: string]: any;
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size attribute
             */
            setFontSize: (size: string) => ReturnType;
            /**
             * Unset the font size attribute
             */
            unsetFontSize: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        Strike: {
            /**
             * Set the font size attribute
             */
            setStrike: () => ReturnType;
            /**
             * Unset the font size attribute
             */
            unsetStrike: () => ReturnType;
            toggleStrike: () => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        selectedText: {
            setSelectedText: (from: number, to: number) => ReturnType;
            unsetSelectedText: (from: number, to: number) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        Underline: {
            setUnderline: () => ReturnType;
            unsetUnderline: () => ReturnType;
            toggleUnderline: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        TextDecoration: {
            /**
             * Set the font size attribute
             */
            setTextDecoration: (textDecoration: string) => ReturnType;
            /**
             * Unset the font size attribute
             */
            unsetTextDecoration: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        Overline: {
            /**
             * Set the font size attribute
             */
            setOverline: () => ReturnType;
            /**
             * Unset the font size attribute
             */
            unsetOverline: () => ReturnType;
            toggleOverline: () => ReturnType;
        };
    }
}
