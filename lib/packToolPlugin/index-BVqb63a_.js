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
  "GlobalComponents",
  "GlobalDirectives",
  "HTMLAttributes",
  "InternalAdapter",
  "Intersect",
  "Mutate",
  "Resize",
  "Ripple",
  "SVGAttributes",
  "Scroll",
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
  "VNumberInput",
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
  "VSnackbarQueue",
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
  "VTimePicker",
  "VTimePickerClock",
  "VTimePickerControls",
  "VTimeline",
  "VTimelineItem",
  "VToolbar",
  "VToolbarItems",
  "VToolbarTitle",
  "VTooltip",
  "VTreeview",
  "VTreeviewGroup",
  "VTreeviewItem",
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
  "useHotkey",
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
    enableCompressedAssets: options.enableCompressedAssets || true,
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
function handleConfigFile(srcPath, destPath, filename, options, callback) {
  fs.readFile(srcPath, "utf-8", async (err, content) => {
    if (err) return callback(err);
    try {
      let data = content.trim() ? JSON.parse(content) : {};
      const baseName = filename.replace(/\.json$/i, "");
      const transformKey = `transform${pascalCase(baseName)}`;
      const transformFn = options[transformKey];
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
async function handleConfigRequest(filePath, fileName, options, res, logger) {
  var _a;
  if (!CONFIG_FILENAMES.includes(fileName)) {
    return false;
  }
  try {
    const content = await fs.promises.readFile(filePath, "utf-8");
    let data = content.trim() ? JSON.parse(content) : {};
    const transformKey = `transform${pascalCase(fileName.replace(/\.json$/i, ""))}`;
    const transformFn = options[transformKey];
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
    currentFile = url.fileURLToPath(typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" && _documentCurrentScript.src || new URL("index-BVqb63a_.js", document.baseURI).href);
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
function copyDir(src, dest, publicDir, options, callback) {
  scanPublicDir(publicDir, (err, publicFiles) => {
    if (err) return callback(err);
    doCopy(src, dest, publicDir, publicFiles, options, callback);
  });
}
function doCopy(src, dest, publicDir, publicFiles, options, callback) {
  fs.mkdir(dest, { recursive: true }, (err) => {
    if (err) return callback(err);
    fs.readdir(src, { withFileTypes: true }, (err2, dirents) => {
      if (err2) return callback(err2);
      let pending = dirents.length;
      if (pending === 0) return callback();
      const compressedExts = [".gz"];
      dirents.forEach((dirent) => {
        const srcPath = path.resolve(src, dirent.name);
        const destPath = path.resolve(dest, dirent.name);
        const relativePath = path.relative(src, srcPath).replace(/\\/g, "/");
        if (!options.enableCompressedAssets && compressedExts.some((ext) => relativePath.endsWith(ext))) {
          if (--pending === 0) callback();
          return;
        }
        if (dirent.isDirectory()) {
          doCopy(srcPath, destPath, publicDir, publicFiles, options, () => {
            if (--pending === 0) callback();
          });
        } else if (dirent.isFile()) {
          if (publicFiles.has(relativePath)) {
            const publicFilePath = path.resolve(publicDir, relativePath);
            fs.copyFile(publicFilePath, destPath, (err3) => {
              if (err3) return callback(err3);
              if (--pending === 0) callback();
            });
          } else if (CONFIG_FILENAMES.includes(relativePath)) {
            handleConfigFile(srcPath, destPath, relativePath, options, (err3) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQlZxYjYzYV8uanMiLCJzb3VyY2VzIjpbIi4uLy4uL3BhY2tUb29sUGx1Z2luU3JjL3NoYXJlZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gcGx1Z2lucy9zaGFyZWQvaW5kZXgudHNcclxuaW1wb3J0IHsgYmFzZW5hbWUsIGpvaW4sIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCBmcywgeyBOb1BhcmFtQ2FsbGJhY2sgfSBmcm9tICdmcyc7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xyXG5pbXBvcnQgeyBuYW1lIH0gZnJvbSBcIi4uLy4uL2xpYi9wYWNrYWdlLmpzb25cIlxyXG5cclxuaW1wb3J0IHsgTXhRdWlja0NvbW1hbmQgfSBmcm9tIFwiLi90eXBlcy9teFF1aWNrQ29tbWFuZC5kXCJcclxuaW1wb3J0IHsgTXhTZXJ2ZXJDb25maWcgfSBmcm9tIFwiLi90eXBlcy9teFNlcnZlckNvbmZpZy5kXCJcclxuaW1wb3J0IHsgTXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWcgfSBmcm9tIFwiLi90eXBlcy9teFNrZXRjaGVzQW5kTm90ZXNVaUNvbmZpZy5kXCJcclxuaW1wb3J0IHsgTXhVaUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzL214VWlDb25maWcuZFwiXHJcbmltcG9ydCB7IE14Y2FkVWlDb25maWcgfSBmcm9tIFwiLi90eXBlcy9teGNhZFVpQ29uZmlnLmRcIlxyXG5pbXBvcnQgeyBWdWV0aWZ5VGhlbWVDb25maWcgfSBmcm9tIFwiLi90eXBlcy92dWV0aWZ5VGhlbWVDb25maWcuZFwiXHJcbmltcG9ydCBhcGlNYXAgZnJvbSAnLi4vYXBpLW1hcC5qc29uJ1xyXG5leHBvcnQgY29uc3QgZ2V0QXBpTWFwID0gKCkgPT4gYXBpTWFwXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXhQbHVnaW5Db25maWcge1xyXG4gIHBsdWdpbnM6IChzdHJpbmcgfCB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgaXNBZnRlckxvYWQ/OiBib29sZWFuLFxyXG4gICAgZGlyPzogYm9vbGVhbixcclxuICAgIHZlcnNpb24/OiBzdHJpbmdcclxuICB9KVtdXHJcbn1cclxuLy8gPT09IOaWsOWinu+8mumFjee9ruaWh+S7tuWQjeW4uOmHjyA9PT1cclxuZXhwb3J0IGNvbnN0IENPTkZJR19GSUxFTkFNRVMgPSBbXHJcbiAgLy8gJ214Y2FkVWlDb25maWcuanNvbicsXHJcbiAgJ214UXVpY2tDb21tYW5kLmpzb24nLFxyXG4gICdteFNlcnZlckNvbmZpZy5qc29uJyxcclxuICAnbXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWcuanNvbicsXHJcbiAgJ214VWlDb25maWcuanNvbicsXHJcbiAgJ3Z1ZXRpZnlUaGVtZUNvbmZpZy5qc29uJyxcclxuICAvLyAncGx1Z2lucy9jb25maWcuanNvbidcclxuXSBhcyBjb25zdDtcclxuLyoqXHJcbiAqIOmFjee9ruaWh+S7tuWkhOeQhuWZqFxyXG4gKiDlj6/pgInvvJrlr7nnibnlrprphY3nva7mlofku7bov5vooYzov5DooYzml7bkv67mlLlcclxuICog5Ye95pWw5o6l5pS25Y6f5aeLIEpTT04g5pWw5o2u77yM6L+U5Zue5L+u5pS55ZCO55qEIEpTT04g5pWw5o2u77yI5Y+v5byC5q2l77yJXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZm9ybUZ1bmN0aW9ucyB7XHJcbiAgLy8gdHJhbnNmb3JtTXhjYWRVaUNvbmZpZyhkYXRhOiBNeGNhZFVpQ29uZmlnKTogUHJvbWlzZTxNeGNhZFVpQ29uZmlnPiB8IE14Y2FkVWlDb25maWc7XHJcbiAgdHJhbnNmb3JtTXhRdWlja0NvbW1hbmQoZGF0YTogTXhRdWlja0NvbW1hbmQpOiBQcm9taXNlPE14UXVpY2tDb21tYW5kPiB8IE14UXVpY2tDb21tYW5kO1xyXG4gIHRyYW5zZm9ybU14U2VydmVyQ29uZmlnKGRhdGE6IE14U2VydmVyQ29uZmlnKTogUHJvbWlzZTxNeFNlcnZlckNvbmZpZz4gfCBNeFNlcnZlckNvbmZpZztcclxuICB0cmFuc2Zvcm1NeFNrZXRjaGVzQW5kTm90ZXNVaUNvbmZpZyhkYXRhOiBNeFNrZXRjaGVzQW5kTm90ZXNVaUNvbmZpZyk6IFByb21pc2U8TXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWc+IHwgTXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWc7XHJcbiAgdHJhbnNmb3JtTXhVaUNvbmZpZyhkYXRhOiBNeFVpQ29uZmlnKTogUHJvbWlzZTxNeFVpQ29uZmlnPiB8IE14VWlDb25maWc7XHJcbiAgdHJhbnNmb3JtVnVldGlmeVRoZW1lQ29uZmlnKGRhdGE6IFZ1ZXRpZnlUaGVtZUNvbmZpZyk6IFByb21pc2U8VnVldGlmeVRoZW1lQ29uZmlnPiB8IFZ1ZXRpZnlUaGVtZUNvbmZpZztcclxuICAvLyB0cmFuc2Zvcm1NeFBsdWdpbnNDb25maWcoZGF0YTogTXhQbHVnaW5Db25maWdbXSk6IFByb21pc2U8TXhQbHVnaW5Db25maWdbXT4gfCBNeFBsdWdpbkNvbmZpZ1tdO1xyXG59XHJcbi8vIOaJqeWxleaPkuS7tumAiemhueaOpeWPoyA9PT1cclxuZXhwb3J0IGludGVyZmFjZSBNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnMgZXh0ZW5kcyBQYXJ0aWFsPFRyYW5zZm9ybUZ1bmN0aW9ucz4ge1xyXG4gIC8qKlxyXG4gICAqIOaehOW7uuWQju+8jG14Y2FkQXBwQXNzZXRzIOi1hOa6kOWtmOaUvueahOWtkOebruW9leWQjeOAglxyXG4gICAqIEBkZWZhdWx0ICdteGNhZEFwcEFzc2V0cydcclxuICAgKi9cclxuICBvdXRwdXREaXI/OiBzdHJpbmc7XHJcbiAgLyoqIOesrOS4ieaWueS+nei1liovXHJcbiAgbGlicmFyeU5hbWVzPzogKGtleW9mIHR5cGVvZiBleHRlcm5hbHMpW107XHJcbiAgLyoqIOaYr+WQpuWNlee6v+eoi+WKoOi9vXdhc20gKOm7mOiupOS9v+eUqOWkmue6v+eoi+WPiuWKoOi9vSkgKi9cclxuICBpc1dhc21TdD86IGJvb2xlYW47XHJcbiAgIC8qKlxyXG4gICAqIOaYr+WQpuWQr+eUqOmihOWOi+e8qei1hOa6kO+8iOWmgiAuZ3og5paH5Lu277yJ55qE5ou36LSdIOm7mOiupOaYr3RydWVcclxuICAgKiDorr7nva7kuLogZmFsc2Ug5pe277yMLmd6IOWOi+e8qeaWh+S7tuWwhuS4jeS8muiiq+WkjeWItuWIsOi+k+WHuuebruW9lVxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKi9cclxuICBlbmFibGVDb21wcmVzc2VkQXNzZXRzPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbi8vID09PSDlop7lvLrvvJpyZXNvbHZlT3B0aW9ucyDpu5jorqTlgLwgPT09XHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucyhvcHRpb25zOiBNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnMgPSB7fSk6IFJlcXVpcmVkPE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucz4ge1xyXG4gIGNvbnN0IHJlc29sdmVkOiBSZXF1aXJlZDxNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnM+ID0ge1xyXG4gICAgb3V0cHV0RGlyOiBvcHRpb25zLm91dHB1dERpciB8fCAnbXhjYWRBcHBBc3NldHMnLFxyXG4gICAgbGlicmFyeU5hbWVzOiBvcHRpb25zLmxpYnJhcnlOYW1lcyB8fCBbXSxcclxuICAgIGlzV2FzbVN0OiBvcHRpb25zLmlzV2FzbVN0IHx8IGZhbHNlLFxyXG4gICAgZW5hYmxlQ29tcHJlc3NlZEFzc2V0czogb3B0aW9ucy5lbmFibGVDb21wcmVzc2VkQXNzZXRzIHx8IHRydWUsXHJcbiAgICAvLyB0cmFuc2Zvcm1NeGNhZFVpQ29uZmlnOiBvcHRpb25zLnRyYW5zZm9ybU14Y2FkVWlDb25maWcgfHwgKChkKSA9PiBkKSxcclxuICAgIHRyYW5zZm9ybU14UXVpY2tDb21tYW5kOiBvcHRpb25zLnRyYW5zZm9ybU14UXVpY2tDb21tYW5kIHx8ICgoZCkgPT4gZCksXHJcbiAgICB0cmFuc2Zvcm1NeFNlcnZlckNvbmZpZzogb3B0aW9ucy50cmFuc2Zvcm1NeFNlcnZlckNvbmZpZyB8fCAoKGQpID0+IGQpLFxyXG4gICAgdHJhbnNmb3JtTXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWc6IG9wdGlvbnMudHJhbnNmb3JtTXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWcgfHwgKChkKSA9PiBkKSxcclxuICAgIHRyYW5zZm9ybU14VWlDb25maWc6IG9wdGlvbnMudHJhbnNmb3JtTXhVaUNvbmZpZyB8fCAoKGQpID0+IGQpLFxyXG4gICAgdHJhbnNmb3JtVnVldGlmeVRoZW1lQ29uZmlnOiBvcHRpb25zLnRyYW5zZm9ybVZ1ZXRpZnlUaGVtZUNvbmZpZyB8fCAoKGQpID0+IGQpLFxyXG4gICAgLy8gdHJhbnNmb3JtTXhQbHVnaW5zQ29uZmlnOiBvcHRpb25zLnRyYW5zZm9ybU14UGx1Z2luc0NvbmZpZyB8fCAoKGQpID0+IGQpLFxyXG4gIH07XHJcbiAgcmV0dXJuIHJlc29sdmVkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRQYXRoUmVzdWx0IHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGZpbGVQYXRoPzogc3RyaW5nOyAgICAgICAgIC8vIOW3siByZXNvbHZlIOeahOWuieWFqOaWh+S7tui3r+W+hFxyXG4gIHVybFBhdGg/OiBzdHJpbmc7ICAgICAgICAgIC8vIOino+eggeWQjueahCBVUkwg6Lev5b6E77yI5LiN5ZCrIHF1ZXJ577yJXHJcbiAgZmlsZU5hbWU/OiBzdHJpbmc7ICAgICAgICAgLy8g5paH5Lu25ZCN77yIYmFzZW5hbWXvvIlcclxuICBzdGF0dXNDb2RlPzogbnVtYmVyO1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICog5a6J5YWo6Kej5p6Q5bm26aqM6K+B6K+35rGC6Lev5b6EXHJcbiAqIEBwYXJhbSByZXFVcmwg6K+35rGC55qEIFVSTO+8iOWmgiAnL2Fzc2V0cy9teFNlcnZlckNvbmZpZy5qc29uP3Y9MSfvvIlcclxuICogQHBhcmFtIHJvb3Qg5pys5Zyw5qC555uu5b2V77yI5aaCICdEOi9wcm9qZWN0L2Rpc3QvbXhjYWQn77yJXHJcbiAqIEBwYXJhbSBiYXNlUGF0aCDlj6/pgInnmoTln7rnoYDot6/lvoTliY3nvIDvvIjlpoIgJy9teGNhZC8n77yM55So5LqOIFZpdGXvvIlcclxuICogQHJldHVybnMg6Kej5p6Q57uT5p6c5oiW6ZSZ6K+vXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVNhZmVQYXRoKFxyXG4gIHJlcVVybDogc3RyaW5nLFxyXG4gIHJvb3Q6IHN0cmluZyxcclxuICBiYXNlUGF0aD86IHN0cmluZ1xyXG4pOiBQYXJzZWRQYXRoUmVzdWx0IHtcclxuICAvLyAxLiDln7rmnKzmoKHpqoxcclxuICBpZiAoIXJlcVVybCB8fCB0eXBlb2YgcmVxVXJsICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIHN0YXR1c0NvZGU6IDQwMCwgbWVzc2FnZTogJ0JhZCBSZXF1ZXN0JyB9O1xyXG4gIH1cclxuXHJcbiAgLy8gMi4g5o+Q5Y+W6Lev5b6E77yI5Y67IHF1ZXJ5IOWSjCBoYXNo77yJXHJcbiAgbGV0IHVybFBhdGggPSByZXFVcmwuc3BsaXQoJz8nKVswXS5zcGxpdCgnIycpWzBdO1xyXG5cclxuICAvLyAzLiDop6PnoIEgVVJMXHJcbiAgbGV0IGRlY29kZWRQYXRoOiBzdHJpbmc7XHJcbiAgdHJ5IHtcclxuICAgIGRlY29kZWRQYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybFBhdGgpO1xyXG4gICAgLy8g6Ziy5q2iIG51bGwg5a2X6IqC5pS75Ye7XHJcbiAgICBpZiAoZGVjb2RlZFBhdGguaW5jbHVkZXMoJ1xcMCcpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBzdGF0dXNDb2RlOiA0MDAsIG1lc3NhZ2U6ICdJbnZhbGlkIFVSTCcgfTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBzdGF0dXNDb2RlOiA0MDAsIG1lc3NhZ2U6ICdJbnZhbGlkIFVSTCBlbmNvZGluZycgfTtcclxuICB9XHJcblxyXG4gIC8vIDQuIOWkhOeQhiBiYXNlUGF0aO+8iOWmgiBWaXRlIOeahCBiYXNl77yJXHJcbiAgaWYgKGJhc2VQYXRoICYmIGRlY29kZWRQYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgpKSB7XHJcbiAgICBkZWNvZGVkUGF0aCA9IGRlY29kZWRQYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICAvLyA1LiDmuIXnkIbot6/lvoTvvJrljrvpmaTlvIDlpLTlpJrkvZnnmoQgL1xyXG4gIC8vIOS+i+Wmgu+8mi8vYXNzZXRzL2ZpbGUuanNvbiAtPiBhc3NldHMvZmlsZS5qc29uXHJcbiAgY29uc3QgY2xlYW5lZFBhdGggPSBkZWNvZGVkUGF0aC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcclxuXHJcbiAgLy8gNi4g5ou85o6l5paH5Lu26Lev5b6EXHJcbiAgY29uc3QgZmlsZVBhdGggPSBqb2luKHJvb3QsIGNsZWFuZWRQYXRoIHx8ICcuJyk7XHJcblxyXG4gIC8vIDcuIOWuieWFqOajgOafpe+8mumYsuatoui3r+W+hOepv+i2ilxyXG4gIGxldCBub3JtYWxpemVkRmlsZTogc3RyaW5nO1xyXG4gIGxldCBub3JtYWxpemVkUm9vdDogc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBub3JtYWxpemVkRmlsZSA9IHJlc29sdmUoZmlsZVBhdGgpO1xyXG4gICAgbm9ybWFsaXplZFJvb3QgPSByZXNvbHZlKHJvb3QpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIHN0YXR1c0NvZGU6IDUwMCwgbWVzc2FnZTogJ1BhdGggcmVzb2x1dGlvbiBmYWlsZWQnIH07XHJcbiAgfVxyXG5cclxuICAvLyDinIUg5YWz6ZSu77ya56Gu5L+dIG5vcm1hbGl6ZWRGaWxlIOWcqCBub3JtYWxpemVkUm9vdCDnm67lvZXkuItcclxuICBjb25zdCBub3JtYWxpemVkRmlsZVN0ciA9IG5vcm1hbGl6ZWRGaWxlLnJlcGxhY2UoL1xcXFwvZywgJy8nKSArICcvJztcclxuICBjb25zdCBub3JtYWxpemVkUm9vdFN0ciA9IG5vcm1hbGl6ZWRSb290LnJlcGxhY2UoL1xcXFwvZywgJy8nKSArICcvJztcclxuXHJcbiAgaWYgKCFub3JtYWxpemVkRmlsZVN0ci5zdGFydHNXaXRoKG5vcm1hbGl6ZWRSb290U3RyKSkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIHN0YXR1c0NvZGU6IDQwMywgbWVzc2FnZTogJ0ZvcmJpZGRlbjogUGF0aCB0cmF2ZXJzYWwgZGV0ZWN0ZWQnIH07XHJcbiAgfVxyXG5cclxuICAvLyA4LiDmj5Dlj5YgZmlsZU5hbWVcclxuICBjb25zdCBwYXRoU2VnbWVudHMgPSBjbGVhbmVkUGF0aC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKTtcclxuICBjb25zdCBmaWxlTmFtZSA9IHBhdGhTZWdtZW50cy5sZW5ndGggPiAwID8gYmFzZW5hbWUocGF0aFNlZ21lbnRzW3BhdGhTZWdtZW50cy5sZW5ndGggLSAxXSkgOiAnJztcclxuXHJcbiAgLy8g4pyFIOaIkOWKn1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgZmlsZVBhdGg6IG5vcm1hbGl6ZWRGaWxlLFxyXG4gICAgdXJsUGF0aDogZGVjb2RlZFBhdGgsXHJcbiAgICBmaWxlTmFtZSxcclxuICB9O1xyXG59XHJcblxyXG5cclxudHlwZSBDb25maWdGaWxlbmFtZSA9ICh0eXBlb2YgQ09ORklHX0ZJTEVOQU1FUylbbnVtYmVyXTtcclxuZnVuY3Rpb24gaGFuZGxlQ29uZmlnRmlsZShcclxuICBzcmNQYXRoOiBzdHJpbmcsXHJcbiAgZGVzdFBhdGg6IHN0cmluZyxcclxuICBmaWxlbmFtZTogQ29uZmlnRmlsZW5hbWUsXHJcbiAgb3B0aW9uczogUmVxdWlyZWQ8TXhDYWRBc3NldHNQbHVnaW5PcHRpb25zPixcclxuICBjYWxsYmFjazogTm9QYXJhbUNhbGxiYWNrXHJcbikge1xyXG4gIGZzLnJlYWRGaWxlKHNyY1BhdGgsICd1dGYtOCcsIGFzeW5jIChlcnIsIGNvbnRlbnQpID0+IHtcclxuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBkYXRhID0gY29udGVudC50cmltKCkgPyBKU09OLnBhcnNlKGNvbnRlbnQpIDoge307XHJcblxyXG4gICAgICAvLyDinIUg5q2j56Gu55Sf5oiQIHRyYW5zZm9ybSDlh73mlbDlkI1cclxuICAgICAgY29uc3QgYmFzZU5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC9cXC5qc29uJC9pLCAnJyk7XHJcbiAgICAgIGNvbnN0IHRyYW5zZm9ybUtleSA9IGB0cmFuc2Zvcm0ke3Bhc2NhbENhc2UoYmFzZU5hbWUpfWA7IC8vIOS+i+WmgjogdHJhbnNmb3JtUGx1Z2luc0NvbmZpZyDmiJYgdHJhbnNmb3JtTXhQbHVnaW5zQ29uZmlnXHJcblxyXG4gICAgICBjb25zdCB0cmFuc2Zvcm1GbiA9IChvcHRpb25zIGFzIGFueSlbdHJhbnNmb3JtS2V5XTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtRm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBkYXRhID0gYXdhaXQgdHJhbnNmb3JtRm4oZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcclxuICAgICAgZnMud3JpdGVGaWxlKGRlc3RQYXRoLCBqc29uLCAndXRmLTgnLCBjYWxsYmFjayk7XHJcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vKipcclxuICog5aSE55CG6YWN572u5paH5Lu26K+35rGC77ya6K+75Y+WIOKGkiDovazmjaIg4oaSIOi/lOWbnuWTjeW6lFxyXG4gKiDnlKjkuo4gVml0ZS9XZWJwYWNrIGRldiBzZXJ2ZXIg5Lit6Ze05Lu2XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ29uZmlnUmVxdWVzdChcclxuICBmaWxlUGF0aDogc3RyaW5nLCAgICAgICAgICAgLy8g5bey57uP6aqM6K+B6L+H55qE5a6J5YWo6Lev5b6EXHJcbiAgZmlsZU5hbWU6IHN0cmluZywgICAgICAgICAgIC8vIOaWh+S7tuWQje+8jOWmgiAnbXhTZXJ2ZXJDb25maWcuanNvbidcclxuICBvcHRpb25zOiBSZXF1aXJlZDxNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnM+LFxyXG4gIHJlczogYW55LFxyXG4gIGxvZ2dlcj86IHsgaW5mbz86IChtc2c6IHN0cmluZykgPT4gdm9pZDsgZXJyb3I/OiAobXNnOiBzdHJpbmcpID0+IHZvaWQgfVxyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAvLyDku4XlpITnkIbnmb3lkI3ljZXlhoXnmoTmlofku7ZcclxuICBpZiAoIShDT05GSUdfRklMRU5BTUVTIGFzIHVua25vd24gYXMgc3RyaW5nKS5pbmNsdWRlcyhmaWxlTmFtZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGYtOCcpO1xyXG4gICAgbGV0IGRhdGEgPSBjb250ZW50LnRyaW0oKSA/IEpTT04ucGFyc2UoY29udGVudCkgOiB7fTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm1LZXkgPSBgdHJhbnNmb3JtJHtwYXNjYWxDYXNlKGZpbGVOYW1lLnJlcGxhY2UoL1xcLmpzb24kL2ksICcnKSl9YDtcclxuICAgIGNvbnN0IHRyYW5zZm9ybUZuID0gKG9wdGlvbnMgYXMgYW55KVt0cmFuc2Zvcm1LZXldO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtRm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgZGF0YSA9IGF3YWl0IHRyYW5zZm9ybUZuKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICBsb2dnZXI/LmVycm9yPy4oYFtteGNhZC1hc3NldHNdIOKdjCBGYWlsZWQgdG8gc2VydmUgJHtmaWxlTmFtZX06ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICBpZiAoIXJlcy5oZWFkZXJzU2VudCkge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgcmVzLmVuZCgnSW50ZXJuYWwgU2VydmVyIEVycm9yJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTsgLy8g5bey5aSE55CG6ZSZ6K+vXHJcbiAgfVxyXG59XHJcblxyXG4vKiog5Yib5bu66YCa55So5YWo5bGA5Lit6Ze05Lu2ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHbG9iYWxVbml2ZXJzYWxNaWRkbGV3YXJlKG9wdGlvbnM6IFJlcXVpcmVkPE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucz4pIHtcclxuICByZXR1cm4gYXN5bmMgKHJlcTogYW55LCByZXM6IGFueSwgbmV4dDogYW55KSA9PiB7XHJcbiAgICBpZiAoIW9wdGlvbnMuaXNXYXNtU3QpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcignQ3Jvc3MtT3JpZ2luLU9wZW5lci1Qb2xpY3knLCAnc2FtZS1vcmlnaW4nKTtcclxuICAgICAgcmVzLnNldEhlYWRlcignQ3Jvc3MtT3JpZ2luLUVtYmVkZGVyLVBvbGljeScsICdyZXF1aXJlLWNvcnAnKTtcclxuICAgIH1cclxuICAgIG5leHQoKTtcclxuICB9XHJcbn1cclxuLy8gPT09IOi+heWKqeWHveaVsO+8muWtl+espuS4sui9rCBQYXNjYWxDYXNlID09PVxyXG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHN0clxyXG4gICAgLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAucmVwbGFjZSgvXi4vLCBjID0+IGMudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbi8vID09PSDlhbbku5bljp/mnInlr7zlh7rkv53mjIHkuI3lj5ggPT09XHJcbmV4cG9ydCBjb25zdCBleHRlcm5hbHMgPSB7XHJcbiAgJ3Z1ZSc6ICdNWENBREFQUF9FWFRFUk5BTExJQlJBUklFUy5WdWUnLFxyXG4gICdheGlvcyc6ICdNWENBREFQUF9FWFRFUk5BTExJQlJBUklFUy5heGlvcycsXHJcbiAgJ3Z1ZXRpZnknOiAnTVhDQURBUFBfRVhURVJOQUxMSUJSQVJJRVMudnVldGlmeScsXHJcbiAgJ3Z1ZXRpZnkvY29tcG9uZW50cyc6ICdNWENBREFQUF9FWFRFUk5BTExJQlJBUklFUy52dWV0aWZ5Q29tcG9uZW50cycsXHJcbiAgJ21hcGJveC1nbCc6ICdNWENBREFQUF9FWFRFUk5BTExJQlJBUklFUy5tYXBib3hnbCcsXHJcbiAgJ3BpbmlhJzogJ01YQ0FEQVBQX0VYVEVSTkFMTElCUkFSSUVTLnBpbmlhJ1xyXG59O1xyXG4vLyDlp4vnu4jkv53nlZnnmoTmqKHlnZdcclxuY29uc3QgQUxXQVlTX0tFRVAgPSBuZXcgU2V0KFsnbXhjYWQnLCAnbXhkcmF3J10pO1xyXG5cclxuLyoqXHJcbiAqIOa4heeQhuW5tuWGmeWFpeato+ehrueahOexu+Wei+W8leeUqFxyXG4gKi9cclxuZnVuY3Rpb24gc3luY1R5cGVSZWZlcmVuY2VzKGxpYnJhcnlOYW1lczogc3RyaW5nW10pOiB2b2lkIHtcclxuICBjb25zdCByb290RGlyID0gcHJvY2Vzcy5jd2QoKTtcclxuICBjb25zdCBkaXN0RGlyID0gcmVzb2x2ZShyb290RGlyLCAnbm9kZV9tb2R1bGVzJywgJ214Y2FkLWFwcCcsICdkaXN0Jyk7XHJcbiAgY29uc3QgaW5kZXhQYXRoID0gcmVzb2x2ZShkaXN0RGlyLCAnaW5kZXguZC50cycpO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8g4pyFIDEuIOajgOafpSBkaXN0IOebruW9lVxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpc3REaXIpKSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybihg4pqg77iPIG14Y2FkLWFwcC9kaXN0IOebruW9leS4jeWtmOWcqO+8jOi3s+i/h+exu+Wei+WQjOatpTogJHtkaXN0RGlyfWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4pyFIDIuIOehruS/nSBpbmRleC5kLnRzIOWtmOWcqFxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGluZGV4UGF0aCkpIHtcclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhpbmRleFBhdGgsICcnLCAndXRmLTgnKTtcclxuICAgICAgY29uc29sZS5sb2coYOKchSDlt7LliJvlu7rnqbrnsbvlnovmlofku7Y6ICR7aW5kZXhQYXRofWApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGluZGV4UGF0aCwgJ3V0Zi04Jyk7XHJcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoL1xccj9cXG4vKTtcclxuXHJcbiAgICAvLyDinIUgMy4g5o+Q5Y+W5omA5pyJ546w5pyJ55qEIC8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3h4eC5kLnRzXCIgLz4g6KGMXHJcbiAgICBjb25zdCByZWZlcmVuY2VSZWdleCA9IC9cXC9cXC9cXC9cXHMqPHJlZmVyZW5jZVxccytwYXRoPVwiXFwuXFwvKFteXCJdK1xcLmRcXC50cylcIlxccypcXC8+LztcclxuICAgIGNvbnN0IGV4aXN0aW5nUmVmczogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbnN0IG5vblJlZkxpbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gbGluZS50cmltKCkubWF0Y2gocmVmZXJlbmNlUmVnZXgpO1xyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IG1hdGNoWzFdOyAvLyDlpoIgXCJ2dWUuZC50c1wiXHJcbiAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL1xcLmRcXC50cyQvLCAnJyk7IC8vIOaPkOWPluaooeWdl+WQjVxyXG4gICAgICAgIGV4aXN0aW5nUmVmcy5wdXNoKG1vZHVsZU5hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vblJlZkxpbmVzLnB1c2gobGluZSk7IC8vIOS/neeVmemdniByZWZlcmVuY2Ug6KGMXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOKchSA0LiDorqHnrpfmnIDnu4jlupTor6Xkv53nlZnnmoTmqKHlnZdcclxuICAgIGNvbnN0IHZhbGlkTW9kdWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihBTFdBWVNfS0VFUCk7XHJcblxyXG4gICAgbGlicmFyeU5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIC8vIOW/hemhu+WcqCBleHRlcm5hbHMg5Lit5a6a5LmJ77yM5LiU57G75Z6L5paH5Lu25a2Y5ZyoXHJcbiAgICAgIGlmIChuYW1lIGluIGV4dGVybmFscykge1xyXG4gICAgICAgIGNvbnN0IGR0c1BhdGggPSByZXNvbHZlKGRpc3REaXIsIGAke25hbWV9LmQudHNgKTtcclxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhkdHNQYXRoKSkge1xyXG4gICAgICAgICAgdmFsaWRNb2R1bGVzLmFkZChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOKchSA1LiDnlJ/miJDmnIDnu4jnmoQgcmVmZXJlbmNlIOihjO+8iOS/neaMgSBteGNhZCDlkowgbXhkcmF3IOWcqOacgOWJje+8iVxyXG4gICAgY29uc3QgZmluYWxSZWZzID0gWydteGNhZCcsICdteGRyYXcnXVxyXG4gICAgICAuZmlsdGVyKG5hbWUgPT4gdmFsaWRNb2R1bGVzLmhhcyhuYW1lKSlcclxuICAgICAgLm1hcChuYW1lID0+IGAvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8ke25hbWV9LmQudHNcIiAvPmApO1xyXG5cclxuICAgIC8vIOa3u+WKoOWFtuS7liB2YWxpZE1vZHVsZXMg5Lit55qE77yI5Y676YeN77yJXHJcbiAgICBBcnJheS5mcm9tKHZhbGlkTW9kdWxlcylcclxuICAgICAgLmZpbHRlcihuYW1lID0+ICFBTFdBWVNfS0VFUC5oYXMobmFtZSkpXHJcbiAgICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgIGZpbmFsUmVmcy5wdXNoKGAvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8ke25hbWV9LmQudHNcIiAvPmApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyDinIUgNi4g5ZCI5bm277ya5pyA57uI5byV55SoICsg5Y6f5aeL6Z2e5byV55So6KGMXHJcbiAgICBjb25zdCByZXN1bHRMaW5lcyA9IFsuLi5maW5hbFJlZnMsICcnLCAuLi5ub25SZWZMaW5lcy5maWx0ZXIobCA9PiBsLnRyaW0oKS5sZW5ndGggPiAwKV07XHJcblxyXG4gICAgLy8g56e76Zmk6L+e57ut56m66KGM77yM5L+d55WZ5LiA5Liq5YiG6ZqUXHJcbiAgICBjb25zdCBjbGVhbmVkTGluZXMgPSByZXN1bHRMaW5lcy5maWx0ZXIoKGxpbmUsIGksIGFycikgPT5cclxuICAgICAgIShsaW5lLnRyaW0oKSA9PT0gJycgJiYgaSA+IDAgJiYgYXJyW2kgLSAxXS50cmltKCkgPT09ICcnKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBuZXdDb250ZW50ID0gY2xlYW5lZExpbmVzLmpvaW4oJ1xcbicpLnRyaW0oKSArICdcXG4nO1xyXG5cclxuICAgIC8vIOKchSA3LiDlhpnlm57mlofku7bvvIjku4XlvZPlhoXlrrnlj5jljJbml7bvvIlcclxuICAgIGlmIChjb250ZW50LnRyaW0oKSAhPT0gbmV3Q29udGVudC50cmltKCkpIHtcclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhpbmRleFBhdGgsIG5ld0NvbnRlbnQsICd1dGYtOCcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhg4pyFIOW3suWQjOatpSBteGNhZC1hcHAvZGlzdC9pbmRleC5kLnRzIOexu+Wei+W8leeUqGApO1xyXG4gICAgICBjb25zb2xlLmxvZyhgICAg5L+d55WZOiAke0FycmF5LmZyb20odmFsaWRNb2R1bGVzKS5qb2luKCcsICcpfWApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihg4p2MIOWQjOatpeexu+Wei+W8leeUqOWksei0pTpgLCBlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOmihOWumuS5ieW6k+WQjeWIsOWFqOWxgOWPmOmHj+eahOaYoOWwhFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTElCUkFSWV9NQVA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgbXhjYWQ6ICdNeENBRCcsXHJcbiAgbXhkcmF3OiAnTXgnXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVybmFscyhcclxuICBsaWJyYXJ5TmFtZXM6IFJlcXVpcmVkPE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucz5bJ2xpYnJhcnlOYW1lcyddXHJcbik6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gIHN5bmNUeXBlUmVmZXJlbmNlcyhsaWJyYXJ5TmFtZXMpO1xyXG4gIGNvbnN0IHJlc3VsdDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHsgLi4uREVGQVVMVF9MSUJSQVJZX01BUCB9XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpYnJhcnlOYW1lcykpIHJldHVybiByZXN1bHQ7XHJcbiAgbGlicmFyeU5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBpZiAobmFtZSBpbiBleHRlcm5hbHMpIHtcclxuICAgICAgcmVzdWx0W25hbWVdID0gZXh0ZXJuYWxzW25hbWUgYXMga2V5b2YgdHlwZW9mIGV4dGVybmFsc107XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZUFzc2V0c1BhdGgoKTogc3RyaW5nIHtcclxuICBsZXQgY3VycmVudEZpbGU6IHN0cmluZztcclxuICBpZiAodHlwZW9mIF9fZmlsZW5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjdXJyZW50RmlsZSA9IF9fZmlsZW5hbWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGN1cnJlbnRGaWxlID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xyXG4gIH1cclxuICBjb25zdCBwYWNrYWdlUm9vdCA9IHJlc29sdmUoY3VycmVudEZpbGUsICcuLicsICcuLicsICcuLicpO1xyXG4gIGNvbnN0IGFzc2V0c1BhdGggPSByZXNvbHZlKHBhY2thZ2VSb290LCBuYW1lLCAnZGlzdCcsICdteGNhZEFwcEFzc2V0cycpO1xyXG4gIGlmICghZnMuZXhpc3RzU3luYyhhc3NldHNQYXRoKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBteC1jYWQtYXBwIGFzc2V0cyBub3QgZm91bmQgYXQ6ICR7YXNzZXRzUGF0aH1gKTtcclxuICB9XHJcbiAgcmV0dXJuIGFzc2V0c1BhdGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NvdXJjZUFzc2V0c0V4aXN0KCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHBhdGggPSBnZXRTb3VyY2VBc3NldHNQYXRoKCk7XHJcbiAgcmV0dXJuIGZzLmV4aXN0c1N5bmMocGF0aCkgJiYgZnMubHN0YXRTeW5jKHBhdGgpLmlzRGlyZWN0b3J5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJ1bnRpbWVDb25maWdTY3JpcHQocHVibGljUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gYFxyXG4gICAgPHNjcmlwdD5cclxuICAgICAgd2luZG93Ll9fTVhfQ0FEX0FQUF9BU1NFVF9QQVRIX18gPSAnJHtwdWJsaWNQYXRofSc7XHJcbiAgICA8L3NjcmlwdD5cclxuICBgLnRyaW0oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlEaXIoXHJcbiAgc3JjOiBzdHJpbmcsXHJcbiAgZGVzdDogc3RyaW5nLFxyXG4gIHB1YmxpY0Rpcjogc3RyaW5nLFxyXG4gIG9wdGlvbnM6IFJlcXVpcmVkPE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucz4sXHJcbiAgY2FsbGJhY2s6IChlcnI/OiBFcnJvcikgPT4gdm9pZFxyXG4pOiB2b2lkIHtcclxuICAvLyDnrKzkuIDmraXvvJrmiavmj48gcHVibGljRGlyIOS4i+aJgOacieaWh+S7tu+8iOebuOWvueS6jiBwdWJsaWNEaXIg55qE6Lev5b6E77yJXHJcbiAgc2NhblB1YmxpY0RpcihwdWJsaWNEaXIsIChlcnIsIHB1YmxpY0ZpbGVzKSA9PiB7XHJcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuXHJcbiAgICAvLyDnrKzkuozmraXvvJrlvIDlp4vlpI3liLbvvIzkvKDlhaUgcHVibGljRmlsZXMg57yT5a2YXHJcbiAgICBkb0NvcHkoc3JjLCBkZXN0LCBwdWJsaWNEaXIsIHB1YmxpY0ZpbGVzISwgb3B0aW9ucywgY2FsbGJhY2spO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDlrp7pmYXmiafooYzlpI3liLbnmoTlh73mlbBcclxuZnVuY3Rpb24gZG9Db3B5KFxyXG4gIHNyYzogc3RyaW5nLFxyXG4gIGRlc3Q6IHN0cmluZyxcclxuICBwdWJsaWNEaXI6IHN0cmluZyxcclxuICBwdWJsaWNGaWxlczogU2V0PHN0cmluZz4sXHJcbiAgb3B0aW9uczogUmVxdWlyZWQ8TXhDYWRBc3NldHNQbHVnaW5PcHRpb25zPiwgLy8g5rOo5oSP77ya6L+Z6YeM6ZyA6KaB56Gu5L+dIGVuYWJsZUNvbXByZXNzZWRBc3NldHMg5piv5b+F6YCJ55qEXHJcbiAgY2FsbGJhY2s6IChlcnI/OiBFcnJvcikgPT4gdm9pZFxyXG4pIHtcclxuICBmcy5ta2RpcihkZXN0LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9LCAoZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuXHJcbiAgICBmcy5yZWFkZGlyKHNyYywgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0sIChlcnIsIGRpcmVudHMpID0+IHtcclxuICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcblxyXG4gICAgICBsZXQgcGVuZGluZyA9IGRpcmVudHMubGVuZ3RoO1xyXG4gICAgICBpZiAocGVuZGluZyA9PT0gMCkgcmV0dXJuIGNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAvLyDmj5DliY3lrprkuYnljovnvKnmlofku7bmianlsZXlkI1cclxuICAgICAgY29uc3QgY29tcHJlc3NlZEV4dHMgPSBbJy5neiddOyAvLyDlj6/mjInpnIDmianlsZVcclxuXHJcbiAgICAgIGRpcmVudHMuZm9yRWFjaCgoZGlyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3JjUGF0aCA9IHJlc29sdmUoc3JjLCBkaXJlbnQubmFtZSk7XHJcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSByZXNvbHZlKGRlc3QsIGRpcmVudC5uYW1lKTtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSByZWxhdGl2ZShzcmMsIHNyY1BhdGgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKSBhcyBDb25maWdGaWxlbmFtZTtcclxuXHJcbiAgICAgICAgLy8g5paw5aKe77ya5aaC5p6c56aB55So5Y6L57yp6LWE5rqQ5LiU5piv5Y6L57yp5paH5Lu277yM5YiZ6Lez6L+HXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIW9wdGlvbnMuZW5hYmxlQ29tcHJlc3NlZEFzc2V0cyAmJlxyXG4gICAgICAgICAgY29tcHJlc3NlZEV4dHMuc29tZShleHQgPT4gcmVsYXRpdmVQYXRoLmVuZHNXaXRoKGV4dCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoLS1wZW5kaW5nID09PSAwKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpcmVudC5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgICAgICBkb0NvcHkoc3JjUGF0aCwgZGVzdFBhdGgsIHB1YmxpY0RpciwgcHVibGljRmlsZXMsIG9wdGlvbnMsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKC0tcGVuZGluZyA9PT0gMCkgY2FsbGJhY2soKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZW50LmlzRmlsZSgpKSB7XHJcbiAgICAgICAgICBpZiAocHVibGljRmlsZXMuaGFzKHJlbGF0aXZlUGF0aCkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHVibGljRmlsZVBhdGggPSByZXNvbHZlKHB1YmxpY0RpciwgcmVsYXRpdmVQYXRoKTtcclxuICAgICAgICAgICAgZnMuY29weUZpbGUocHVibGljRmlsZVBhdGgsIGRlc3RQYXRoLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcbiAgICAgICAgICAgICAgaWYgKC0tcGVuZGluZyA9PT0gMCkgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKENPTkZJR19GSUxFTkFNRVMuaW5jbHVkZXMocmVsYXRpdmVQYXRoKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVDb25maWdGaWxlKHNyY1BhdGgsIGRlc3RQYXRoLCByZWxhdGl2ZVBhdGgsIG9wdGlvbnMsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICAgICAgICAgICAgICBpZiAoLS1wZW5kaW5nID09PSAwKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZzLmNvcHlGaWxlKHNyY1BhdGgsIGRlc3RQYXRoLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcbiAgICAgICAgICAgICAgaWYgKC0tcGVuZGluZyA9PT0gMCkgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICgtLXBlbmRpbmcgPT09IDApIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbi8vIOaJq+aPjyBwdWJsaWNEaXIg5LiL5omA5pyJ5paH5Lu277yM6L+U5Zue55u45a+55LqOIHB1YmxpY0RpciDnmoTot6/lvoTpm4blkIhcclxuZnVuY3Rpb24gc2NhblB1YmxpY0RpcihcclxuICBwdWJsaWNEaXI6IHN0cmluZyxcclxuICBjYWxsYmFjazogKGVycjogTm9kZUpTLkVycm5vRXhjZXB0aW9uIHwgbnVsbCwgZmlsZXM/OiBTZXQ8c3RyaW5nPikgPT4gdm9pZFxyXG4pIHtcclxuICBjb25zdCByZXN1bHQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcbiAgZnVuY3Rpb24gd2FsayhkaXI6IHN0cmluZykge1xyXG4gICAgZnMucmVhZGRpcihkaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9LCAoZXJyLCBkaXJlbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG5cclxuICAgICAgbGV0IHBlbmRpbmcgPSBkaXJlbnRzLmxlbmd0aDtcclxuICAgICAgaWYgKHBlbmRpbmcgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlyZW50cy5mb3JFYWNoKChkaXJlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHJlc29sdmUoZGlyLCBkaXJlbnQubmFtZSk7XHJcbiAgICAgICAgY29uc3QgcmVsUGF0aCA9IHJlbGF0aXZlKHB1YmxpY0RpciwgZnVsbFBhdGgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcclxuXHJcbiAgICAgICAgaWYgKGRpcmVudC5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgICAgICB3YWxrKGZ1bGxQYXRoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVudC5pc0ZpbGUoKSkge1xyXG4gICAgICAgICAgcmVzdWx0LmFkZChyZWxQYXRoKTtcclxuICAgICAgICAgIGlmICgtLXBlbmRpbmcgPT09IDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKC0tcGVuZGluZyA9PT0gMCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdhbGsocHVibGljRGlyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnRUeXBlKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGV4dCA9IGZpbGVQYXRoLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCkgfHwgJyc7XHJcbiAgY29uc3QgdHlwZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICAnY3NzJzogJ3RleHQvY3NzJyxcclxuICAgICdqcyc6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcclxuICAgICdqc29uJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgJ3BuZyc6ICdpbWFnZS9wbmcnLFxyXG4gICAgJ2pwZyc6ICdpbWFnZS9qcGVnJyxcclxuICAgICdqcGVnJzogJ2ltYWdlL2pwZWcnLFxyXG4gICAgJ2dpZic6ICdpbWFnZS9naWYnLFxyXG4gICAgJ3N2Zyc6ICdpbWFnZS9zdmcreG1sJyxcclxuICAgICd3b2ZmJzogJ2ZvbnQvd29mZicsXHJcbiAgICAnd29mZjInOiAnZm9udC93b2ZmMicsXHJcbiAgICAndHRmJzogJ2ZvbnQvdHRmJyxcclxuICAgICdlb3QnOiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxyXG4gICAgJ2ljbyc6ICdpbWFnZS94LWljb24nLFxyXG4gICAgJ3dhc20nOiAnYXBwbGljYXRpb24vd2FzbSdcclxuICB9O1xyXG4gIHJldHVybiB0eXBlc1tleHRdIHx8ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOagh+WHhuWMlui3r+W+hO+8jOehruS/neS7pSAnLycg57uT5bC+XHJcbiAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoKHA6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHJlc29sdmUocCkucmVwbGFjZSgvXFxcXC9nLCAnLycpICsgJy8nO1xyXG59XHJcblxyXG4vKipcclxuICog5Yib5bu66YCa55So5Lit6Ze05Lu277ya5LyY5YWI5L2/55SoIHB1YmxpYyDotYTmupDvvIzlm57pgIDliLAgc291cmNlQXNzZXRzUGF0aFxyXG4gKiDlr7nmoIcgY3JlYXRlU3RhdGljTWlkZGxld2FyZSDpo47moLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNeENhZEFzc2V0c01pZGRsZXdhcmUoXHJcbiAgcm9vdDogc3RyaW5nLFxyXG4gIG9wdGlvbnM6IFJlcXVpcmVkPE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucz4sXHJcbiAgcHVibGljRGlyOiBzdHJpbmcsXHJcbiAgbG9nZ2VyPzogYW55XHJcbikge1xyXG4gIGNvbnN0IHsgb3V0cHV0RGlyLCBpc1dhc21TdCA9IGZhbHNlIH0gPSBvcHRpb25zO1xyXG4gIC8vIOKchSAxLiDop4TojIPljJbot6/lvoRcclxuICBjb25zdCBiYXNlUGF0aCA9IGAvJHtvdXRwdXREaXIucmVwbGFjZSgvXlxcLysvLCAnJyl9YDsgLy8gJy9teGNhZEFwcEFzc2V0cydcclxuICBjb25zdCBzb3VyY2VBc3NldHNSb290ID0gbm9ybWFsaXplUGF0aChyb290KTtcclxuXHJcbiAgcmV0dXJuIGFzeW5jIChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6ICgpID0+IHZvaWQpID0+IHtcclxuICAgIC8vIOKchSAyLiDln7rmnKzmoKHpqoxcclxuICAgIGlmICghcmVxLnVybCB8fCB0eXBlb2YgcmVxLnVybCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDinIUgMy4g6K6+572u5a6J5YWo5aS077yI6Z2eIGlzV2FzbVN0IOaooeW8j++8iVxyXG4gICAgaWYgKCFpc1dhc21TdCkge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKCdDcm9zcy1PcmlnaW4tT3BlbmVyLVBvbGljeScsICdzYW1lLW9yaWdpbicpO1xyXG4gICAgICByZXMuc2V0SGVhZGVyKCdDcm9zcy1PcmlnaW4tRW1iZWRkZXItUG9saWN5JywgJ3JlcXVpcmUtY29ycCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKchSA0LiDop6PmnpAgVVJMIOi3r+W+hO+8iOWOuyBxdWVyee+8jOino+egge+8iVxyXG4gICAgY29uc3QgdXJsUGF0aCA9IHJlcS51cmwuc3BsaXQoJz8nKVswXTtcclxuICAgIGxldCBmaWxlUGF0aCE6IHN0cmluZztcclxuICAgIGxldCBmaWxlTmFtZSE6IHN0cmluZztcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWNvZGVkUGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudCh1cmxQYXRoKTtcclxuICAgICAgLy8g6KeE6IyD5YyW6Lev5b6E77yM6Ziy5q2iIC4uLy4uLyDotormnYNcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBkZWNvZGVkUGF0aC5yZXBsYWNlKC9eWy9cXFxcXSsvLCAnJyk7XHJcblxyXG4gICAgICAvLyDinIUgNS4g5LyY5YWI77ya5qOA5p+lIHB1YmxpYy8ke291dHB1dERpcn0g55uu5b2VXHJcbiAgICAgIGNvbnN0IHB1YmxpY0ZpbGVQYXRoID0gam9pbihwdWJsaWNEaXIsIG5vcm1hbGl6ZWRQYXRoKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBmcy5wcm9taXNlcy5zdGF0KHB1YmxpY0ZpbGVQYXRoKTtcclxuICAgICAgICBpZiAoc3RhdC5pc0ZpbGUoKSkge1xyXG4gICAgICAgICAgZmlsZVBhdGggPSBwdWJsaWNGaWxlUGF0aDtcclxuICAgICAgICAgIGZpbGVOYW1lID0gYmFzZW5hbWUobm9ybWFsaXplZFBhdGgpO1xyXG4gICAgICAgICAgcmV0dXJuIHNlcnZlRmlsZShmaWxlUGF0aCwgZmlsZU5hbWUsIHJlcywgbG9nZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIC8vIHB1YmxpYyDkuK3msqHmnInvvIznu6fnu63mn6Xmib4gc291cmNlQXNzZXRzUGF0aFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDinIUgNi4gZmFsbGJhY2vvvJrmn6Xmib4gc291cmNlQXNzZXRzUGF0aFxyXG4gICAgICBjb25zdCByZXN1bHQgPSByZXNvbHZlU2FmZVBhdGgoZGVjb2RlZFBhdGgsIHNvdXJjZUFzc2V0c1Jvb3QsIGJhc2VQYXRoKTtcclxuICAgICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gcmVzdWx0LnN0YXR1c0NvZGUgfHwgNDAwO1xyXG4gICAgICAgIHJldHVybiByZXMuZW5kKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlc3VsdC5maWxlUGF0aCkgZmlsZVBhdGggPSByZXN1bHQuZmlsZVBhdGg7XHJcbiAgICAgIGlmIChyZXN1bHQuZmlsZU5hbWUpIGZpbGVOYW1lID0gcmVzdWx0LmZpbGVOYW1lO1xyXG5cclxuICAgICAgLy8g4pyFIDcuIOWwneivleeUsSBoYW5kbGVDb25maWdSZXF1ZXN0IOWkhOeQhu+8iOWmguazqOWFpemFjee9ru+8iVxyXG4gICAgICBjb25zdCBoYW5kbGVkID0gYXdhaXQgaGFuZGxlQ29uZmlnUmVxdWVzdChcclxuICAgICAgICBmaWxlUGF0aCxcclxuICAgICAgICBmaWxlTmFtZSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIHJlcyxcclxuICAgICAgICBsb2dnZXJcclxuICAgICAgKTtcclxuICAgICAgaWYgKGhhbmRsZWQpIHJldHVybjtcclxuXHJcbiAgICAgIC8vIOKchSA4LiDnoa7kv53mmK/mlofku7ZcclxuICAgICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZzLnByb21pc2VzLnN0YXQoZmlsZVBhdGgpO1xyXG4gICAgICBpZiAoIXN0YXQuaXNGaWxlKCkpIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcclxuICAgICAgICByZXR1cm4gcmVzLmVuZCgnRmlsZSBub3QgZm91bmQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNlcnZlRmlsZShmaWxlUGF0aCwgZmlsZU5hbWUsIHJlcywgbG9nZ2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBsb2dnZXI/Lndhcm4/LihgW014Q2FkQXNzZXRzXSBTZXJ2ZSBmYWlsZWQgZm9yICR7cmVxLnVybH06ICR7KGVyciBhcyBFcnJvcikubWVzc2FnZX1gKTtcclxuICAgICAgaWYgKHJlcy5oZWFkZXJzU2VudCkgcmV0dXJuO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcclxuICAgICAgcmVzLmVuZCgnRmlsZSBub3QgZm91bmQnKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICog5bCB6KOF5paH5Lu25ZON5bqU6YC76L6R77yI5rWB5byP5Lyg6L6T77yJXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJ2ZUZpbGUoZmlsZVBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgcmVzOiBhbnksIGxvZ2dlcj86IGFueSkge1xyXG4gIGNvbnN0IHN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZVBhdGgpO1xyXG5cclxuICBzdHJlYW0ub24oJ2Vycm9yJywgKGVycjogTm9kZUpTLkVycm5vRXhjZXB0aW9uKSA9PiB7XHJcbiAgICBpZiAocmVzLmhlYWRlcnNTZW50KSByZXR1cm47XHJcbiAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnIHx8IGVyci5jb2RlID09PSAnRUFDQ0VTJykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1c0NvZGUgPT09IDIwMCA/IHJlcy5lbmQoKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGxvZ2dlcj8uZXJyb3I/LihgW014Q2FkQXNzZXRzXSBSZWFkIGVycm9yOiAke2Vyci5tZXNzYWdlfWAsIGVycik7XHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgIHJlcy5lbmQoJ0ludGVybmFsIFNlcnZlciBFcnJvcicpO1xyXG4gIH0pO1xyXG5cclxuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBnZXRDb250ZW50VHlwZShmaWxlTmFtZSkpO1xyXG4gIHJlcy5zZXRIZWFkZXIoJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnLCAnbm9zbmlmZicpO1xyXG5cclxuICBzdHJlYW0ucGlwZShyZXMpO1xyXG59Il0sIm5hbWVzIjpbImpvaW4iLCJyZXNvbHZlIiwiYmFzZW5hbWUiLCJlcnIiLCJuYW1lIiwiZmlsZVVSTFRvUGF0aCIsInJlbGF0aXZlIiwic3RhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
