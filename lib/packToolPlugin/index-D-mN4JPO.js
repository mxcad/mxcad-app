"use strict";
const path = require("path");
const fs = require("fs");
const url = require("url");
var _documentCurrentScript = typeof document !== "undefined" ? document.currentScript : null;
const name = "mxcad-app";
const mxcad = [
  "BaseElement",
  "CalculateData",
  "CellStyleInfo",
  "ColorIndexType",
  "ColorMethod",
  "ConstructorArguments",
  "CreateColorArgs",
  "CreateData",
  "CustomText",
  "DxfCode",
  "EventType",
  "ExcludePropertiesContainingThisType",
  "FetchAttributes",
  "FileTypes",
  "ICellStyle",
  "ICellStyleInfo",
  "IColumnWidth",
  "IMcDbDwgFiler",
  "IMergeCellInfo",
  "IMxEditorDescendant",
  "IMxEditorElement",
  "IMxEditorNode",
  "IMxEditorPoint",
  "IRowHeight",
  "IsZero",
  "LineInfo",
  "MLStyle",
  "MLStyleElement",
  "MLineJustificationType",
  "Map",
  "MarksStyleText",
  "McAppType",
  "McCmColor",
  "McCmColorJSON",
  "McDb",
  "McDb2LineAngularDimension",
  "McDbAlignedDimension",
  "McDbArc",
  "McDbAttribute",
  "McDbAttributeDefinition",
  "McDbBackgroundEntity",
  "McDbBlockReference",
  "McDbBlockTable",
  "McDbBlockTableRecord",
  "McDbCircle",
  "McDbCurve",
  "McDbCustomEntity",
  "McDbDatabase",
  "McDbDictionary",
  "McDbDimStyleTable",
  "McDbDimStyleTableRecord",
  "McDbDimension",
  "McDbEllipse",
  "McDbEntity",
  "McDbGroup",
  "McDbHatch",
  "McDbLayerTable",
  "McDbLayerTableRecord",
  "McDbLine",
  "McDbLinetypeTable",
  "McDbLinetypeTableRecord",
  "McDbMLine",
  "McDbMText",
  "McDbObject",
  "McDbObjectArray",
  "McDbPoint",
  "McDbPolyline",
  "McDbProxyEntity",
  "McDbRasterImage",
  "McDbRasterImageDef",
  "McDbRotatedDimension",
  "McDbSpatialFilter",
  "McDbSpline",
  "McDbText",
  "McDbTextStyleTable",
  "McDbTextStyleTableRecord",
  "McDbWipeout",
  "McDbXlsxTable",
  "McDbXrecord",
  "McGeBound",
  "McGeDoubleArray",
  "McGeLongArray",
  "McGeMatrix3d",
  "McGePoint3d",
  "McGePoint3dArray",
  "McGeStringArray",
  "McGeVector3d",
  "McObject",
  "McObjectId",
  "McObjectIdType",
  "McRxObject",
  "MxCADBaseCustomElement",
  "MxCADBaseCustomText",
  "MxCADCloneType",
  "MxCADCustomTextCalculateData",
  "MxCADMText",
  "MxCADPluginBase",
  "MxCADPluginMapDefaultData",
  "MxCADPluginSampleCode",
  "MxCADResbuf",
  "MxCADSelectionSet",
  "MxCADSelectionSetStatus",
  "MxCADTempForbiddenIntelliSelect",
  "MxCADUI",
  "MxCADUiPrAngle",
  "MxCADUiPrBase",
  "MxCADUiPrDist",
  "MxCADUiPrEntity",
  "MxCADUiPrInt",
  "MxCADUiPrKeyWord",
  "MxCADUiPrPoint",
  "MxCADUiPrString",
  "MxCADUtility",
  "MxCADUtilityClass",
  "MxCADWorldDraw",
  "MxCADWorldDrawType",
  "MxCadConfig",
  "MxCanvas2Image",
  "MxCheckTheBrowser",
  "MxCompare",
  "MxCoordConvert",
  "MxCoordConvertType",
  "MxCpp",
  "MxCppType",
  "MxMap",
  "MxMapAddGoogleCnLayer",
  "MxMapAddRasterTileLayer",
  "MxModifyColor",
  "MxPropertiesWindowCustom",
  "MxPropertiesWindowCustomValue",
  "MxPropertiesWindowCustomValueType",
  "MxTIFFLoader",
  "MxTools",
  "Mx_About",
  "Mx_Erase",
  "NonPropertyNames",
  "ParagraphElement",
  "PointSegmentRelation",
  "PubSubEvent",
  "RenderData",
  "RenderResult",
  "SegmentPointPair",
  "SegmentRelationsData",
  "SequenceFragment",
  "THREEColorArgs",
  "TextFragment",
  "TextSequence",
  "_ML_String",
  "b64Decode",
  "b64Encode",
  "crateHexString",
  "createCursor",
  "createMcCmColor",
  "createMxCad",
  "downloadFile",
  "downloadFileFromUrl",
  "drawArc",
  "drawCircle",
  "drawEllipticalArc",
  "drawLine",
  "drawMText",
  "drawPolyLine",
  "drawPolygon",
  "drawRectang",
  "drawText",
  "getColorUtils",
  "getFileFromUrl",
  "getFilterImp",
  "getJsonFromUrl",
  "loadMxCADassembly",
  "mx_gcj02_To_gps84",
  "mx_gps84_To_gcj02",
  "postEmscriptenIndexedDBFile",
  "postMemoryFile",
  "saveAsFileDialog",
  "setMcCmColor"
];
const mxdraw = [
  "DetailedResult",
  "DynamicInputType",
  "InputToucheType",
  "Layer",
  "McEdGetPointWorldDrawObject",
  "McGePoint3d",
  "McGePoint3dArray",
  "McGeTool",
  "McGiWorldDraw",
  "McGiWorldDrawType",
  "MrxDbgUiPrAngle",
  "MrxDbgUiPrBase",
  "MrxDbgUiPrBaseReturn",
  "MrxDbgUiPrDist",
  "MrxDbgUiPrInt",
  "MrxDbgUiPrKeyWord",
  "MrxDbgUiPrPoint",
  "MrxDbgUiPrString",
  "MrxDbgUtils",
  "Mx2PointArc",
  "Mx3PointArc",
  "MxCloneType",
  "MxColorType",
  "MxCommandFlag",
  "MxCursorType",
  "MxDb2LineAngularDimension",
  "MxDbAlignedDimension",
  "MxDbAnyLine",
  "MxDbArcShapeDraw",
  "MxDbArea",
  "MxDbArrow",
  "MxDbCircleArc",
  "MxDbCircleShape",
  "MxDbCloudLine",
  "MxDbCoord",
  "MxDbDatabase",
  "MxDbEllipse",
  "MxDbEllipseArc",
  "MxDbEllipseShape",
  "MxDbEntity",
  "MxDbGradientLine",
  "MxDbGroup",
  "MxDbHatch",
  "MxDbImage",
  "MxDbLayerTableRecord",
  "MxDbLeadComment",
  "MxDbLeadTag",
  "MxDbLine",
  "MxDbLineShape",
  "MxDbPolyline",
  "MxDbRect",
  "MxDbRectBoxLeadComment",
  "MxDbRegularPolygon",
  "MxDbRegularPolygonShape",
  "MxDbRingShape",
  "MxDbSVG",
  "MxDbSVGText",
  "MxDbShape",
  "MxDbSplineCurve",
  "MxDbStarShape",
  "MxDbText",
  "MxDefaultRenderOrder",
  "MxDrawObject",
  "MxFilters",
  "MxFun",
  "MxPaintBrush",
  "MxTempMarkDraw",
  "MxThreeJS",
  "MxType",
  "Mxassembly",
  "UnstableColor",
  "UserInputControls",
  "loadCoreCode",
  "store",
  "useCanvasResizeListener"
];
const axios = [
  "AddressFamily",
  "Axios",
  "AxiosAdapter",
  "AxiosBasicCredentials",
  "AxiosDefaults",
  "AxiosError",
  "AxiosHeaderValue",
  "AxiosHeaders",
  "AxiosInstance",
  "AxiosInterceptorManager",
  "AxiosInterceptorOptions",
  "AxiosProgressEvent",
  "AxiosPromise",
  "AxiosProxyConfig",
  "AxiosRequestConfig",
  "AxiosRequestHeaders",
  "AxiosRequestTransformer",
  "AxiosResponse",
  "AxiosResponseHeaders",
  "AxiosResponseTransformer",
  "AxiosStatic",
  "Cancel",
  "CancelStatic",
  "CancelToken",
  "CancelTokenSource",
  "CancelTokenStatic",
  "CanceledError",
  "Canceler",
  "CreateAxiosDefaults",
  "CustomParamsSerializer",
  "FormDataVisitorHelpers",
  "FormSerializerOptions",
  "GenericAbortSignal",
  "GenericFormData",
  "GenericHTMLFormElement",
  "HeadersDefaults",
  "HttpStatusCode",
  "InternalAxiosRequestConfig",
  "LookupAddress",
  "LookupAddressEntry",
  "Method",
  "ParamEncoder",
  "ParamsSerializerOptions",
  "RawAxiosRequestConfig",
  "RawAxiosRequestHeaders",
  "RawAxiosResponseHeaders",
  "ResponseType",
  "SerializerOptions",
  "SerializerVisitor",
  "TransitionalOptions",
  "all",
  "formToJSON",
  "getAdapter",
  "isAxiosError",
  "isCancel",
  "mergeConfig",
  "responseEncoding",
  "spread",
  "toFormData"
];
const vue = [
  "AllowedComponentProps",
  "AnchorHTMLAttributes",
  "App",
  "AppConfig",
  "AppContext",
  "AreaHTMLAttributes",
  "AriaAttributes",
  "AsyncComponentLoader",
  "AsyncComponentOptions",
  "AudioHTMLAttributes",
  "BaseHTMLAttributes",
  "BaseTransition",
  "BaseTransitionProps",
  "BaseTransitionPropsValidators",
  "BlockquoteHTMLAttributes",
  "ButtonHTMLAttributes",
  "CSSProperties",
  "CanvasHTMLAttributes",
  "ColHTMLAttributes",
  "ColgroupHTMLAttributes",
  "Comment",
  "CompatVue",
  "Component",
  "ComponentCustomElementInterface",
  "ComponentCustomOptions",
  "ComponentCustomProperties",
  "ComponentCustomProps",
  "ComponentInjectOptions",
  "ComponentInstance",
  "ComponentInternalInstance",
  "ComponentObjectPropsOptions",
  "ComponentOptions",
  "ComponentOptionsBase",
  "ComponentOptionsMixin",
  "ComponentOptionsWithArrayProps",
  "ComponentOptionsWithObjectProps",
  "ComponentOptionsWithoutProps",
  "ComponentPropsOptions",
  "ComponentProvideOptions",
  "ComponentPublicInstance",
  "ComponentTypeEmits",
  "ComputedGetter",
  "ComputedOptions",
  "ComputedRef",
  "ComputedSetter",
  "ConcreteComponent",
  "CreateAppFunction",
  "CreateComponentPublicInstance",
  "CreateComponentPublicInstanceWithMixins",
  "CustomElementOptions",
  "CustomRefFactory",
  "DataHTMLAttributes",
  "DebuggerEvent",
  "DebuggerEventExtraInfo",
  "DebuggerOptions",
  "DeepReadonly",
  "DefineComponent",
  "DefineProps",
  "DefineSetupFnComponent",
  "DelHTMLAttributes",
  "DeprecationTypes",
  "DetailsHTMLAttributes",
  "DialogHTMLAttributes",
  "Directive",
  "DirectiveArguments",
  "DirectiveBinding",
  "DirectiveHook",
  "EffectScheduler",
  "EffectScope",
  "ElementNamespace",
  "EmbedHTMLAttributes",
  "EmitFn",
  "EmitsOptions",
  "EmitsToProps",
  "ErrorCodes",
  "Events",
  "ExtractDefaultPropTypes",
  "ExtractPropTypes",
  "ExtractPublicPropTypes",
  "FieldsetHTMLAttributes",
  "FormHTMLAttributes",
  "Fragment",
  "FunctionDirective",
  "FunctionPlugin",
  "FunctionalComponent",
  "GlobalComponents",
  "GlobalDirectives",
  "HMRRuntime",
  "HTMLAttributes",
  "HtmlHTMLAttributes",
  "HydrationRenderer",
  "HydrationStrategy",
  "HydrationStrategyFactory",
  "IframeHTMLAttributes",
  "ImgHTMLAttributes",
  "InjectionKey",
  "InputHTMLAttributes",
  "InputTypeHTMLAttribute",
  "InsHTMLAttributes",
  "IntrinsicElementAttributes",
  "KeepAlive",
  "KeepAliveProps",
  "KeygenHTMLAttributes",
  "LabelHTMLAttributes",
  "LegacyConfig",
  "LiHTMLAttributes",
  "LinkHTMLAttributes",
  "MapHTMLAttributes",
  "MaybeRef",
  "MaybeRefOrGetter",
  "MediaHTMLAttributes",
  "MenuHTMLAttributes",
  "MetaHTMLAttributes",
  "MeterHTMLAttributes",
  "MethodOptions",
  "ModelRef",
  "MultiWatchSources",
  "NativeElements",
  "ObjectDirective",
  "ObjectEmitsOptions",
  "ObjectHTMLAttributes",
  "ObjectPlugin",
  "OlHTMLAttributes",
  "OptgroupHTMLAttributes",
  "OptionHTMLAttributes",
  "OptionMergeFunction",
  "OutputHTMLAttributes",
  "ParamHTMLAttributes",
  "Plugin",
  "ProgressHTMLAttributes",
  "Prop",
  "PropType",
  "PublicProps",
  "QuoteHTMLAttributes",
  "Raw",
  "Reactive",
  "ReactiveEffect",
  "ReactiveEffectOptions",
  "ReactiveEffectRunner",
  "ReactiveFlags",
  "Ref",
  "RenderFunction",
  "Renderer",
  "RendererElement",
  "RendererNode",
  "RendererOptions",
  "ReservedProps",
  "RootHydrateFunction",
  "RootRenderFunction",
  "RuntimeCompilerOptions",
  "SVGAttributes",
  "ScriptHTMLAttributes",
  "SelectHTMLAttributes",
  "SetupContext",
  "ShallowReactive",
  "ShallowRef",
  "ShallowUnwrapRef",
  "ShortEmitsToObject",
  "Slot",
  "Slots",
  "SlotsType",
  "SourceHTMLAttributes",
  "Static",
  "StyleHTMLAttributes",
  "StyleValue",
  "Suspense",
  "SuspenseBoundary",
  "SuspenseProps",
  "TableHTMLAttributes",
  "TdHTMLAttributes",
  "Teleport",
  "TeleportProps",
  "TemplateRef",
  "Text",
  "TextareaHTMLAttributes",
  "ThHTMLAttributes",
  "TimeHTMLAttributes",
  "ToRef",
  "ToRefs",
  "TrackHTMLAttributes",
  "TrackOpTypes",
  "Transition",
  "TransitionGroup",
  "TransitionGroupProps",
  "TransitionHooks",
  "TransitionProps",
  "TransitionState",
  "TriggerOpTypes",
  "UnwrapNestedRefs",
  "UnwrapRef",
  "VNode",
  "VNodeArrayChildren",
  "VNodeChild",
  "VNodeNormalizedChildren",
  "VNodeProps",
  "VNodeRef",
  "VNodeTypes",
  "VideoHTMLAttributes",
  "VueElement",
  "VueElementConstructor",
  "WatchCallback",
  "WatchEffect",
  "WatchEffectOptions",
  "WatchHandle",
  "WatchOptions",
  "WatchOptionsBase",
  "WatchSource",
  "WatchStopHandle",
  "WebViewHTMLAttributes",
  "WritableComputedOptions",
  "WritableComputedRef",
  "callWithAsyncErrorHandling",
  "callWithErrorHandling",
  "camelize",
  "capitalize",
  "cloneVNode",
  "compile",
  "compileToFunction",
  "computed",
  "createApp",
  "createBaseVNode",
  "createBlock",
  "createCommentVNode",
  "createElementBlock",
  "createElementVNode",
  "createHydrationRenderer",
  "createRenderer",
  "createSSRApp",
  "createSlots",
  "createStaticVNode",
  "createTextVNode",
  "createVNode",
  "customRef",
  "defineAsyncComponent",
  "defineComponent",
  "defineCustomElement",
  "defineEmits",
  "defineExpose",
  "defineModel",
  "defineOptions",
  "defineProps",
  "defineSSRCustomElement",
  "defineSlots",
  "devtools",
  "effect",
  "effectScope",
  "getCurrentInstance",
  "getCurrentScope",
  "getCurrentWatcher",
  "getTransitionRawChildren",
  "guardReactiveProps",
  "h",
  "handleError",
  "hasInjectionContext",
  "hydrate",
  "hydrateOnIdle",
  "hydrateOnInteraction",
  "hydrateOnMediaQuery",
  "hydrateOnVisible",
  "initCustomFormatter",
  "inject",
  "isMemoSame",
  "isProxy",
  "isReactive",
  "isReadonly",
  "isRef",
  "isRuntimeOnly",
  "isShallow",
  "isVNode",
  "markRaw",
  "mergeProps",
  "nextTick",
  "normalizeClass",
  "normalizeProps",
  "normalizeStyle",
  "onActivated",
  "onBeforeMount",
  "onBeforeUnmount",
  "onBeforeUpdate",
  "onDeactivated",
  "onErrorCaptured",
  "onMounted",
  "onRenderTracked",
  "onRenderTriggered",
  "onScopeDispose",
  "onServerPrefetch",
  "onUnmounted",
  "onUpdated",
  "onWatcherCleanup",
  "openBlock",
  "popScopeId",
  "provide",
  "proxyRefs",
  "pushScopeId",
  "queuePostFlushCb",
  "reactive",
  "readonly",
  "ref",
  "registerRuntimeCompiler",
  "render",
  "renderList",
  "renderSlot",
  "resolveComponent",
  "resolveDirective",
  "resolveDynamicComponent",
  "resolveTransitionHooks",
  "setBlockTracking",
  "setDevtoolsHook",
  "setTransitionHooks",
  "shallowReactive",
  "shallowReadonly",
  "shallowRef",
  "ssrContextKey",
  "stop",
  "toDisplayString",
  "toHandlerKey",
  "toHandlers",
  "toRaw",
  "toRef",
  "toRefs",
  "toValue",
  "transformVNodeArgs",
  "triggerRef",
  "unref",
  "useAttrs",
  "useCssModule",
  "useCssVars",
  "useHost",
  "useId",
  "useModel",
  "useSSRContext",
  "useShadowRoot",
  "useSlots",
  "useTemplateRef",
  "useTransitionState",
  "vModelCheckbox",
  "vModelDynamic",
  "vModelRadio",
  "vModelSelect",
  "vModelText",
  "vShow",
  "version",
  "warn",
  "watch",
  "watchEffect",
  "watchPostEffect",
  "watchSyncEffect",
  "withCtx",
  "withDefaults",
  "withDirectives",
  "withKeys",
  "withMemo",
  "withModifiers",
  "withScopeId"
];
const vuetify = [
  "ClickOutside",
  "ComponentCustomProperties",
  "DateInstance",
  "DefaultsInstance",
  "DisplayBreakpoint",
  "DisplayInstance",
  "DisplayThresholds",
  "GlobalComponents",
  "GoToInstance",
  "HTMLAttributes",
  "IconAliases",
  "IconOptions",
  "IconProps",
  "IconSet",
  "InternalAdapter",
  "Intersect",
  "JSXComponent",
  "LocaleInstance",
  "LocaleMessages",
  "LocaleOptions",
  "Mutate",
  "Resize",
  "Ripple",
  "RtlInstance",
  "RtlOptions",
  "SVGAttributes",
  "Scroll",
  "SubmitEventPromise",
  "ThemeDefinition",
  "ThemeInstance",
  "Tooltip",
  "Touch",
  "VAlert",
  "VAlertTitle",
  "VApp",
  "VAppBar",
  "VAppBarNavIcon",
  "VAppBarTitle",
  "VAutocomplete",
  "VAvatar",
  "VBadge",
  "VBanner",
  "VBannerActions",
  "VBannerText",
  "VBottomNavigation",
  "VBottomSheet",
  "VBreadcrumbs",
  "VBreadcrumbsDivider",
  "VBreadcrumbsItem",
  "VBtn",
  "VBtnGroup",
  "VBtnToggle",
  "VCard",
  "VCardActions",
  "VCardItem",
  "VCardSubtitle",
  "VCardText",
  "VCardTitle",
  "VCarousel",
  "VCarouselItem",
  "VCheckbox",
  "VCheckboxBtn",
  "VChip",
  "VChipGroup",
  "VClassIcon",
  "VCode",
  "VCol",
  "VColorPicker",
  "VCombobox",
  "VComponentIcon",
  "VConfirmEdit",
  "VContainer",
  "VCounter",
  "VDataIterator",
  "VDataTable",
  "VDataTableFooter",
  "VDataTableHeaders",
  "VDataTableRow",
  "VDataTableRows",
  "VDataTableServer",
  "VDataTableVirtual",
  "VDatePicker",
  "VDatePickerControls",
  "VDatePickerHeader",
  "VDatePickerMonth",
  "VDatePickerMonths",
  "VDatePickerYears",
  "VDefaultsProvider",
  "VDialog",
  "VDialogBottomTransition",
  "VDialogTopTransition",
  "VDialogTransition",
  "VDivider",
  "VEmptyState",
  "VExpandTransition",
  "VExpandXTransition",
  "VExpansionPanel",
  "VExpansionPanelText",
  "VExpansionPanelTitle",
  "VExpansionPanels",
  "VFab",
  "VFabTransition",
  "VFadeTransition",
  "VField",
  "VFieldLabel",
  "VFileInput",
  "VFooter",
  "VForm",
  "VHover",
  "VIcon",
  "VImg",
  "VInfiniteScroll",
  "VInput",
  "VItem",
  "VItemGroup",
  "VKbd",
  "VLabel",
  "VLayout",
  "VLayoutItem",
  "VLazy",
  "VLigatureIcon",
  "VList",
  "VListGroup",
  "VListImg",
  "VListItem",
  "VListItemAction",
  "VListItemMedia",
  "VListItemSubtitle",
  "VListItemTitle",
  "VListSubheader",
  "VLocaleProvider",
  "VMain",
  "VMenu",
  "VMessages",
  "VNavigationDrawer",
  "VNoSsr",
  "VOtpInput",
  "VOverlay",
  "VPagination",
  "VParallax",
  "VProgressCircular",
  "VProgressLinear",
  "VRadio",
  "VRadioGroup",
  "VRangeSlider",
  "VRating",
  "VResponsive",
  "VRow",
  "VScaleTransition",
  "VScrollXReverseTransition",
  "VScrollXTransition",
  "VScrollYReverseTransition",
  "VScrollYTransition",
  "VSelect",
  "VSelectionControl",
  "VSelectionControlGroup",
  "VSheet",
  "VSkeletonLoader",
  "VSlideGroup",
  "VSlideGroupItem",
  "VSlideXReverseTransition",
  "VSlideXTransition",
  "VSlideYReverseTransition",
  "VSlideYTransition",
  "VSlider",
  "VSnackbar",
  "VSpacer",
  "VSparkline",
  "VSpeedDial",
  "VStepper",
  "VStepperActions",
  "VStepperHeader",
  "VStepperItem",
  "VStepperWindow",
  "VStepperWindowItem",
  "VSvgIcon",
  "VSwitch",
  "VSystemBar",
  "VTab",
  "VTable",
  "VTabs",
  "VTabsWindow",
  "VTabsWindowItem",
  "VTextField",
  "VTextarea",
  "VThemeProvider",
  "VTimeline",
  "VTimelineItem",
  "VToolbar",
  "VToolbarItems",
  "VToolbarTitle",
  "VTooltip",
  "VValidation",
  "VVirtualScroll",
  "VWindow",
  "VWindowItem",
  "blueprints",
  "components",
  "createVuetify",
  "directives",
  "md1",
  "md2",
  "md3",
  "useDate",
  "useDefaults",
  "useDisplay",
  "useGoTo",
  "useLayout",
  "useLocale",
  "useRtl",
  "useTheme",
  "version"
];
const pinia = [
  "DefineSetupStoreOptions",
  "DefineStoreOptions",
  "DefineStoreOptionsBase",
  "DefineStoreOptionsInPlugin",
  "MapStoresCustomization",
  "MutationType",
  "Pinia",
  "PiniaCustomProperties",
  "PiniaCustomStateProperties",
  "PiniaPlugin",
  "PiniaPluginContext",
  "PiniaStorePlugin",
  "PiniaVuePlugin",
  "SetupStoreDefinition",
  "StateTree",
  "Store",
  "StoreActions",
  "StoreDefinition",
  "StoreGeneric",
  "StoreGetters",
  "StoreOnActionListener",
  "StoreOnActionListenerContext",
  "StoreProperties",
  "StoreState",
  "SubscriptionCallback",
  "SubscriptionCallbackMutation",
  "SubscriptionCallbackMutationDirect",
  "SubscriptionCallbackMutationPatchFunction",
  "SubscriptionCallbackMutationPatchObject",
  "_ActionsTree",
  "_Awaited",
  "_DeepPartial",
  "_ExtractActionsFromSetupStore",
  "_ExtractActionsFromSetupStore_Keys",
  "_ExtractGettersFromSetupStore",
  "_ExtractGettersFromSetupStore_Keys",
  "_ExtractStateFromSetupStore",
  "_ExtractStateFromSetupStore_Keys",
  "_GettersTree",
  "_MapActionsObjectReturn",
  "_MapActionsReturn",
  "_MapStateObjectReturn",
  "_MapStateReturn",
  "_MapWritableStateObjectReturn",
  "_MapWritableStateReturn",
  "_Method",
  "_Spread",
  "_StoreObject",
  "_StoreOnActionListenerContext",
  "_StoreWithActions",
  "_StoreWithGetters",
  "_StoreWithState",
  "_SubscriptionCallbackMutationBase",
  "_UnwrapAll",
  "acceptHMRUpdate",
  "createPinia",
  "defineStore",
  "disposePinia",
  "getActivePinia",
  "mapActions",
  "mapGetters",
  "mapState",
  "mapStores",
  "mapWritableState",
  "setActivePinia",
  "setMapStoreSuffix",
  "shouldHydrate",
  "skipHydrate",
  "storeToRefs"
];
const apiMap = {
  mxcad,
  mxdraw,
  "mapbox-gl": [
    "AnimationOptions",
    "AnyLayer",
    "AnyLayout",
    "AnyPaint",
    "AnySourceData",
    "AnySourceImpl",
    "AttributionControl",
    "BackgroundLayout",
    "BackgroundPaint",
    "BoxZoomHandler",
    "CameraForBoundsOptions",
    "CameraForBoundsResult",
    "CameraFunctionSpecification",
    "CameraOptions",
    "CanonicalCoordinate",
    "CanvasSource",
    "CanvasSourceOptions",
    "CanvasSourceRaw",
    "CircleLayout",
    "CirclePaint",
    "Control",
    "Coordinate",
    "CustomLayerInterface",
    "DoubleClickZoomHandler",
    "DragPanHandler",
    "DragRotateHandler",
    "EaseToOptions",
    "ElevationQueryOptions",
    "ErrorEvent",
    "EventData",
    "Evented",
    "ExpressionSpecification",
    "FeatureIdentifier",
    "FillExtrusionLayout",
    "FillExtrusionPaint",
    "FillLayout",
    "FillPaint",
    "FilterOptions",
    "FitBoundsOptions",
    "FlyToOptions",
    "Fog",
    "FreeCameraOptions",
    "FullscreenControl",
    "FullscreenControlOptions",
    "GeoJSONSource",
    "GeoJSONSourceOptions",
    "GeoJSONSourceRaw",
    "GeolocateControl",
    "HeatmapLayout",
    "HeatmapPaint",
    "HillshadeLayout",
    "HillshadePaint",
    "IControl",
    "ImageSource",
    "ImageSourceOptions",
    "ImageSourceRaw",
    "KeyboardHandler",
    "Layout",
    "Light",
    "LineLayout",
    "LinePaint",
    "LngLat",
    "LngLatBounds",
    "Map",
    "MapBoxZoomEvent",
    "MapContextEvent",
    "MapDataEvent",
    "MapEventType",
    "MapLayerEventType",
    "MapLayerMouseEvent",
    "MapLayerTouchEvent",
    "MapMouseEvent",
    "MapSourceDataEvent",
    "MapStyleDataEvent",
    "MapTouchEvent",
    "MapWheelEvent",
    "MapboxEvent",
    "MapboxGeoJSONFeature",
    "MapboxOptions",
    "Marker",
    "MarkerOptions",
    "MercatorCoordinate",
    "NavigationControl",
    "PaddingOptions",
    "Point",
    "Popup",
    "PopupOptions",
    "PositionOptions",
    "Projection",
    "PromoteIdSpecification",
    "PropertyValueSpecification",
    "RasterLayout",
    "RasterPaint",
    "RequestParameters",
    "ResourceType",
    "ScaleControl",
    "ScrollZoomHandler",
    "SkyLayout",
    "SkyPaint",
    "Source",
    "Sources",
    "Style",
    "StyleFunction",
    "StyleOptions",
    "SymbolLayout",
    "SymbolPaint",
    "TerrainSpecification",
    "TouchPitchHandler",
    "TouchZoomRotateHandler",
    "TransformRequestFunction",
    "Transition",
    "VideoSource",
    "VideoSourceOptions",
    "VideoSourceRaw",
    "clearPrewarmedResources",
    "clearStorage",
    "getRTLTextPluginStatus",
    "mapboxgl",
    "prewarm",
    "setRTLTextPlugin",
    "supported"
  ],
  axios,
  vue,
  vuetify,
  "vuetify/components": [
    "LocationStrategyData",
    "ScrollStrategyData",
    "StrategyProps",
    "StrategyProps$1",
    "VAlert",
    "VAlertTitle",
    "VApp",
    "VAppBar",
    "VAppBarNavIcon",
    "VAppBarTitle",
    "VAutocomplete",
    "VAvatar",
    "VBadge",
    "VBanner",
    "VBannerActions",
    "VBannerText",
    "VBottomNavigation",
    "VBottomSheet",
    "VBreadcrumbs",
    "VBreadcrumbsDivider",
    "VBreadcrumbsItem",
    "VBtn",
    "VBtnGroup",
    "VBtnToggle",
    "VCard",
    "VCardActions",
    "VCardItem",
    "VCardSubtitle",
    "VCardText",
    "VCardTitle",
    "VCarousel",
    "VCarouselItem",
    "VCheckbox",
    "VCheckboxBtn",
    "VChip",
    "VChipGroup",
    "VClassIcon",
    "VCode",
    "VCol",
    "VColorPicker",
    "VCombobox",
    "VComponentIcon",
    "VConfirmEdit",
    "VContainer",
    "VCounter",
    "VDataIterator",
    "VDataTable",
    "VDataTableFooter",
    "VDataTableHeaders",
    "VDataTableRow",
    "VDataTableRows",
    "VDataTableServer",
    "VDataTableVirtual",
    "VDatePicker",
    "VDatePickerControls",
    "VDatePickerHeader",
    "VDatePickerMonth",
    "VDatePickerMonths",
    "VDatePickerYears",
    "VDefaultsProvider",
    "VDialog",
    "VDialogBottomTransition",
    "VDialogTopTransition",
    "VDialogTransition",
    "VDivider",
    "VEmptyState",
    "VExpandTransition",
    "VExpandXTransition",
    "VExpansionPanel",
    "VExpansionPanelText",
    "VExpansionPanelTitle",
    "VExpansionPanels",
    "VFab",
    "VFabTransition",
    "VFadeTransition",
    "VField",
    "VFieldLabel",
    "VFileInput",
    "VFooter",
    "VForm",
    "VHover",
    "VIcon",
    "VImg",
    "VInfiniteScroll",
    "VInput",
    "VItem",
    "VItemGroup",
    "VKbd",
    "VLabel",
    "VLayout",
    "VLayoutItem",
    "VLazy",
    "VLigatureIcon",
    "VList",
    "VListGroup",
    "VListImg",
    "VListItem",
    "VListItemAction",
    "VListItemMedia",
    "VListItemSubtitle",
    "VListItemTitle",
    "VListSubheader",
    "VLocaleProvider",
    "VMain",
    "VMenu",
    "VMessages",
    "VNavigationDrawer",
    "VNoSsr",
    "VOtpInput",
    "VOverlay",
    "VPagination",
    "VParallax",
    "VProgressCircular",
    "VProgressLinear",
    "VRadio",
    "VRadioGroup",
    "VRangeSlider",
    "VRating",
    "VResponsive",
    "VRow",
    "VScaleTransition",
    "VScrollXReverseTransition",
    "VScrollXTransition",
    "VScrollYReverseTransition",
    "VScrollYTransition",
    "VSelect",
    "VSelectionControl",
    "VSelectionControlGroup",
    "VSheet",
    "VSkeletonLoader",
    "VSlideGroup",
    "VSlideGroupItem",
    "VSlideXReverseTransition",
    "VSlideXTransition",
    "VSlideYReverseTransition",
    "VSlideYTransition",
    "VSlider",
    "VSnackbar",
    "VSpacer",
    "VSparkline",
    "VSpeedDial",
    "VStepper",
    "VStepperActions",
    "VStepperHeader",
    "VStepperItem",
    "VStepperWindow",
    "VStepperWindowItem",
    "VSvgIcon",
    "VSwitch",
    "VSystemBar",
    "VTab",
    "VTable",
    "VTabs",
    "VTabsWindow",
    "VTabsWindowItem",
    "VTextField",
    "VTextarea",
    "VThemeProvider",
    "VTimeline",
    "VTimelineItem",
    "VToolbar",
    "VToolbarItems",
    "VToolbarTitle",
    "VTooltip",
    "VValidation",
    "VVirtualScroll",
    "VWindow",
    "VWindowItem"
  ],
  pinia
};
const getApiMap = () => apiMap;
const CONFIG_FILENAMES = [
  // 'mxcadUiConfig.json',
  "mxQuickCommand.json",
  "mxServerConfig.json",
  "mxSketchesAndNotesUiConfig.json",
  "mxUiConfig.json",
  "vuetifyThemeConfig.json"
  // 'plugins/config.json'
];
function resolveOptions(options = {}) {
  const resolved = {
    outputDir: options.outputDir || "mxcadAppAssets",
    libraryNames: options.libraryNames || [],
    isWasmSt: options.isWasmSt || false,
    // transformMxcadUiConfig: options.transformMxcadUiConfig || ((d) => d),
    transformMxQuickCommand: options.transformMxQuickCommand || ((d) => d),
    transformMxServerConfig: options.transformMxServerConfig || ((d) => d),
    transformMxSketchesAndNotesUiConfig: options.transformMxSketchesAndNotesUiConfig || ((d) => d),
    transformMxUiConfig: options.transformMxUiConfig || ((d) => d),
    transformVuetifyThemeConfig: options.transformVuetifyThemeConfig || ((d) => d)
    // transformMxPluginsConfig: options.transformMxPluginsConfig || ((d) => d),
  };
  return resolved;
}
function resolveSafePath(reqUrl, root, basePath) {
  if (!reqUrl || typeof reqUrl !== "string") {
    return { success: false, statusCode: 400, message: "Bad Request" };
  }
  let urlPath = reqUrl.split("?")[0].split("#")[0];
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(urlPath);
    if (decodedPath.includes("\0")) {
      return { success: false, statusCode: 400, message: "Invalid URL" };
    }
  } catch (err) {
    return { success: false, statusCode: 400, message: "Invalid URL encoding" };
  }
  if (basePath && decodedPath.startsWith(basePath)) {
    decodedPath = decodedPath.slice(basePath.length);
  }
  const cleanedPath = decodedPath.replace(/^\/+/, "");
  const filePath = path.join(root, cleanedPath || ".");
  let normalizedFile;
  let normalizedRoot;
  try {
    normalizedFile = path.resolve(filePath);
    normalizedRoot = path.resolve(root);
  } catch (err) {
    return { success: false, statusCode: 500, message: "Path resolution failed" };
  }
  const normalizedFileStr = normalizedFile.replace(/\\/g, "/") + "/";
  const normalizedRootStr = normalizedRoot.replace(/\\/g, "/") + "/";
  if (!normalizedFileStr.startsWith(normalizedRootStr)) {
    return { success: false, statusCode: 403, message: "Forbidden: Path traversal detected" };
  }
  const pathSegments = cleanedPath.split("/").filter(Boolean);
  const fileName = pathSegments.length > 0 ? path.basename(pathSegments[pathSegments.length - 1]) : "";
  return {
    success: true,
    filePath: normalizedFile,
    urlPath: decodedPath,
    fileName
  };
}
function handleConfigFile(srcPath, destPath, filename, transforms, callback) {
  fs.readFile(srcPath, "utf-8", async (err, content) => {
    if (err) return callback(err);
    try {
      let data = content.trim() ? JSON.parse(content) : {};
      const baseName = filename.replace(/\.json$/i, "");
      const transformKey = `transform${pascalCase(baseName)}`;
      const transformFn = transforms[transformKey];
      if (typeof transformFn === "function") {
        data = await transformFn(data);
      }
      const json = JSON.stringify(data, null, 2);
      fs.writeFile(destPath, json, "utf-8", callback);
    } catch (err2) {
      return callback(err2);
    }
  });
}
async function handleConfigRequest(filePath, fileName, transforms, res, logger) {
  var _a;
  if (!CONFIG_FILENAMES.includes(fileName)) {
    return false;
  }
  try {
    const content = await fs.promises.readFile(filePath, "utf-8");
    let data = content.trim() ? JSON.parse(content) : {};
    const transformKey = `transform${pascalCase(fileName.replace(/\.json$/i, ""))}`;
    const transformFn = transforms[transformKey];
    if (typeof transformFn === "function") {
      data = await transformFn(data);
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache");
    res.end(JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    (_a = logger == null ? void 0 : logger.error) == null ? void 0 : _a.call(logger, `[mxcad-assets] ❌ Failed to serve ${fileName}: ${err.message}`);
    if (!res.headersSent) {
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
    return true;
  }
}
function createGlobalUniversalMiddleware(options) {
  return async (req, res, next) => {
    if (!options.isWasmSt) {
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    }
    next();
  };
}
function pascalCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/^./, (c) => c.toUpperCase());
}
const externals = {
  "vue": "MXCADAPP_EXTERNALLIBRARIES.Vue",
  "axios": "MXCADAPP_EXTERNALLIBRARIES.axios",
  "vuetify": "MXCADAPP_EXTERNALLIBRARIES.vuetify",
  "vuetify/components": "MXCADAPP_EXTERNALLIBRARIES.vuetifyComponents",
  "mapbox-gl": "MXCADAPP_EXTERNALLIBRARIES.mapboxgl",
  "pinia": "MXCADAPP_EXTERNALLIBRARIES.pinia"
};
const ALWAYS_KEEP = /* @__PURE__ */ new Set(["mxcad", "mxdraw"]);
function syncTypeReferences(libraryNames) {
  const rootDir = process.cwd();
  const distDir = path.resolve(rootDir, "node_modules", "mxcad-app", "dist");
  const indexPath = path.resolve(distDir, "index.d.ts");
  try {
    if (!fs.existsSync(distDir)) {
      console.warn(`⚠️ mxcad-app/dist 目录不存在，跳过类型同步: ${distDir}`);
      return;
    }
    if (!fs.existsSync(indexPath)) {
      fs.writeFileSync(indexPath, "", "utf-8");
      console.log(`✅ 已创建空类型文件: ${indexPath}`);
    }
    let content = fs.readFileSync(indexPath, "utf-8");
    const lines = content.split(/\r?\n/);
    const referenceRegex = /\/\/\/\s*<reference\s+path="\.\/([^"]+\.d\.ts)"\s*\/>/;
    const existingRefs = [];
    const nonRefLines = [];
    lines.forEach((line) => {
      const match = line.trim().match(referenceRegex);
      if (match) {
        const fileName = match[1];
        const moduleName = fileName.replace(/\.d\.ts$/, "");
        existingRefs.push(moduleName);
      } else {
        nonRefLines.push(line);
      }
    });
    const validModules = new Set(ALWAYS_KEEP);
    libraryNames.forEach((name2) => {
      if (name2 in externals) {
        const dtsPath = path.resolve(distDir, `${name2}.d.ts`);
        if (fs.existsSync(dtsPath)) {
          validModules.add(name2);
        }
      }
    });
    const finalRefs = ["mxcad", "mxdraw"].filter((name2) => validModules.has(name2)).map((name2) => `/// <reference path="./${name2}.d.ts" />`);
    Array.from(validModules).filter((name2) => !ALWAYS_KEEP.has(name2)).forEach((name2) => {
      finalRefs.push(`/// <reference path="./${name2}.d.ts" />`);
    });
    const resultLines = [...finalRefs, "", ...nonRefLines.filter((l) => l.trim().length > 0)];
    const cleanedLines = resultLines.filter(
      (line, i, arr) => !(line.trim() === "" && i > 0 && arr[i - 1].trim() === "")
    );
    const newContent = cleanedLines.join("\n").trim() + "\n";
    if (content.trim() !== newContent.trim()) {
      fs.writeFileSync(indexPath, newContent, "utf-8");
      console.log(`✅ 已同步 mxcad-app/dist/index.d.ts 类型引用`);
      console.log(`   保留: ${Array.from(validModules).join(", ")}`);
    }
  } catch (err) {
    console.error(`❌ 同步类型引用失败:`, err);
  }
}
const DEFAULT_LIBRARY_MAP = {
  mxcad: "MxCAD",
  mxdraw: "Mx"
};
function getExternals(libraryNames) {
  syncTypeReferences(libraryNames);
  const result = { ...DEFAULT_LIBRARY_MAP };
  if (!Array.isArray(libraryNames)) return result;
  libraryNames.forEach((name2) => {
    if (name2 in externals) {
      result[name2] = externals[name2];
    }
  });
  return result;
}
function getSourceAssetsPath() {
  let currentFile;
  if (typeof __filename !== "undefined") {
    currentFile = __filename;
  } else {
    currentFile = url.fileURLToPath(typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" && _documentCurrentScript.src || new URL("index-D-mN4JPO.js", document.baseURI).href);
  }
  const packageRoot = path.resolve(currentFile, "..", "..", "..");
  const assetsPath = path.resolve(packageRoot, name, "dist", "mxcadAppAssets");
  if (!fs.existsSync(assetsPath)) {
    throw new Error(`mx-cad-app assets not found at: ${assetsPath}`);
  }
  return assetsPath;
}
function generateRuntimeConfigScript(publicPath) {
  return `
    <script>
      window.__MX_CAD_APP_ASSET_PATH__ = '${publicPath}';
    <\/script>
  `.trim();
}
function copyDir(src, dest, publicDir, transforms, callback) {
  scanPublicDir(publicDir, (err, publicFiles) => {
    if (err) return callback(err);
    doCopy(src, dest, publicDir, publicFiles, transforms, callback);
  });
}
function doCopy(src, dest, publicDir, publicFiles, transforms, callback) {
  fs.mkdir(dest, { recursive: true }, (err) => {
    if (err) return callback(err);
    fs.readdir(src, { withFileTypes: true }, (err2, dirents) => {
      if (err2) return callback(err2);
      let pending = dirents.length;
      if (pending === 0) return callback();
      dirents.forEach((dirent) => {
        const srcPath = path.resolve(src, dirent.name);
        const destPath = path.resolve(dest, dirent.name);
        const relativePath = path.relative(src, srcPath).replace(/\\/g, "/");
        if (dirent.isDirectory()) {
          doCopy(srcPath, destPath, publicDir, publicFiles, transforms, () => {
            if (--pending === 0) callback();
          });
        } else if (dirent.isFile()) {
          if (publicFiles.has(relativePath)) {
            const publicFilePath = path.resolve(publicDir, relativePath);
            fs.copyFile(publicFilePath, destPath, (err3) => {
              if (err3) return callback(err3);
              if (--pending === 0) callback();
            });
            return;
          }
          if (CONFIG_FILENAMES.includes(relativePath)) {
            handleConfigFile(srcPath, destPath, relativePath, transforms, (err3) => {
              if (err3) return callback(err3);
              if (--pending === 0) callback();
            });
          } else {
            fs.copyFile(srcPath, destPath, (err3) => {
              if (err3) return callback(err3);
              if (--pending === 0) callback();
            });
          }
        } else {
          if (--pending === 0) callback();
        }
      });
    });
  });
}
function scanPublicDir(publicDir, callback) {
  const result = /* @__PURE__ */ new Set();
  function walk(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, dirents) => {
      if (err) return callback(err);
      let pending = dirents.length;
      if (pending === 0) {
        return callback(null, result);
      }
      dirents.forEach((dirent) => {
        const fullPath = path.resolve(dir, dirent.name);
        const relPath = path.relative(publicDir, fullPath).replace(/\\/g, "/");
        if (dirent.isDirectory()) {
          walk(fullPath);
        } else if (dirent.isFile()) {
          result.add(relPath);
          if (--pending === 0) {
            callback(null, result);
          }
        } else {
          if (--pending === 0) {
            callback(null, result);
          }
        }
      });
    });
  }
  walk(publicDir);
}
function getContentType(filePath) {
  var _a;
  const ext = ((_a = filePath.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "";
  const types = {
    "css": "text/css",
    "js": "application/javascript",
    "json": "application/json",
    "png": "image/png",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "gif": "image/gif",
    "svg": "image/svg+xml",
    "woff": "font/woff",
    "woff2": "font/woff2",
    "ttf": "font/ttf",
    "eot": "application/vnd.ms-fontobject",
    "ico": "image/x-icon",
    "wasm": "application/wasm"
  };
  return types[ext] || "application/octet-stream";
}
function normalizePath(p) {
  return path.resolve(p).replace(/\\/g, "/") + "/";
}
function createMxCadAssetsMiddleware(root, options, publicDir, logger) {
  const { outputDir, isWasmSt = false } = options;
  const basePath = `/${outputDir.replace(/^\/+/, "")}`;
  const sourceAssetsRoot = normalizePath(root);
  return async (req, res, next) => {
    var _a;
    if (!req.url || typeof req.url !== "string") {
      return next();
    }
    if (!isWasmSt) {
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    }
    const urlPath = req.url.split("?")[0];
    let filePath;
    let fileName;
    try {
      const decodedPath = decodeURIComponent(urlPath);
      const normalizedPath = decodedPath.replace(/^[/\\]+/, "");
      const publicFilePath = path.join(publicDir, normalizedPath).replace(/\\/g, "/");
      try {
        const stat2 = await fs.promises.stat(publicFilePath);
        if (stat2.isFile()) {
          filePath = publicFilePath;
          fileName = path.basename(normalizedPath);
          return serveFile(filePath, fileName, res, logger);
        }
      } catch (err) {
      }
      const result = resolveSafePath(decodedPath, sourceAssetsRoot, basePath);
      if (!result.success) {
        res.statusCode = result.statusCode || 400;
        return res.end(result.message);
      }
      if (result.filePath) filePath = result.filePath;
      if (result.fileName) fileName = result.fileName;
      const handled = await handleConfigRequest(
        filePath,
        fileName,
        options,
        res,
        logger
      );
      if (handled) return;
      const stat = await fs.promises.stat(filePath);
      if (!stat.isFile()) {
        res.statusCode = 404;
        return res.end("File not found");
      }
      return serveFile(filePath, fileName, res, logger);
    } catch (err) {
      (_a = logger == null ? void 0 : logger.warn) == null ? void 0 : _a.call(logger, `[MxCadAssets] Serve failed for ${req.url}: ${err.message}`);
      if (res.headersSent) return;
      res.statusCode = 404;
      res.end("File not found");
    }
  };
}
function serveFile(filePath, fileName, res, logger) {
  const stream = fs.createReadStream(filePath);
  stream.on("error", (err) => {
    var _a;
    if (res.headersSent) return;
    if (err.code === "ENOENT" || err.code === "EACCES") {
      return res.statusCode === 200 ? res.end() : void 0;
    }
    (_a = logger == null ? void 0 : logger.error) == null ? void 0 : _a.call(logger, `[MxCadAssets] Read error: ${err.message}`, err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  });
  res.setHeader("Content-Type", getContentType(fileName));
  res.setHeader("X-Content-Type-Options", "nosniff");
  stream.pipe(res);
}
exports.copyDir = copyDir;
exports.createGlobalUniversalMiddleware = createGlobalUniversalMiddleware;
exports.createMxCadAssetsMiddleware = createMxCadAssetsMiddleware;
exports.generateRuntimeConfigScript = generateRuntimeConfigScript;
exports.getApiMap = getApiMap;
exports.getContentType = getContentType;
exports.getExternals = getExternals;
exports.getSourceAssetsPath = getSourceAssetsPath;
exports.resolveOptions = resolveOptions;
