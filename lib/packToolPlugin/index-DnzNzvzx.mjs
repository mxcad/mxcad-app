import { resolve, join, basename, relative } from "path";
import fs__default from "fs";
import { fileURLToPath } from "url";
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
  const filePath = join(root, cleanedPath || ".");
  let normalizedFile;
  let normalizedRoot;
  try {
    normalizedFile = resolve(filePath);
    normalizedRoot = resolve(root);
  } catch (err) {
    return { success: false, statusCode: 500, message: "Path resolution failed" };
  }
  const normalizedFileStr = normalizedFile.replace(/\\/g, "/") + "/";
  const normalizedRootStr = normalizedRoot.replace(/\\/g, "/") + "/";
  if (!normalizedFileStr.startsWith(normalizedRootStr)) {
    return { success: false, statusCode: 403, message: "Forbidden: Path traversal detected" };
  }
  const pathSegments = cleanedPath.split("/").filter(Boolean);
  const fileName = pathSegments.length > 0 ? basename(pathSegments[pathSegments.length - 1]) : "";
  return {
    success: true,
    filePath: normalizedFile,
    urlPath: decodedPath,
    fileName
  };
}
function handleConfigFile(srcPath, destPath, filename, options, callback) {
  fs__default.readFile(srcPath, "utf-8", async (err, content) => {
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
      fs__default.writeFile(destPath, json, "utf-8", callback);
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
    const content = await fs__default.promises.readFile(filePath, "utf-8");
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
  const distDir = resolve(rootDir, "node_modules", "mxcad-app", "dist");
  const indexPath = resolve(distDir, "index.d.ts");
  try {
    if (!fs__default.existsSync(distDir)) {
      console.warn(`⚠️ mxcad-app/dist 目录不存在，跳过类型同步: ${distDir}`);
      return;
    }
    if (!fs__default.existsSync(indexPath)) {
      fs__default.writeFileSync(indexPath, "", "utf-8");
      console.log(`✅ 已创建空类型文件: ${indexPath}`);
    }
    let content = fs__default.readFileSync(indexPath, "utf-8");
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
        const dtsPath = resolve(distDir, `${name2}.d.ts`);
        if (fs__default.existsSync(dtsPath)) {
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
      fs__default.writeFileSync(indexPath, newContent, "utf-8");
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
    currentFile = fileURLToPath(import.meta.url);
  }
  const packageRoot = resolve(currentFile, "..", "..", "..");
  const assetsPath = resolve(packageRoot, name, "dist", "mxcadAppAssets");
  if (!fs__default.existsSync(assetsPath)) {
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
  fs__default.mkdir(dest, { recursive: true }, (err) => {
    if (err) return callback(err);
    fs__default.readdir(src, { withFileTypes: true }, (err2, dirents) => {
      if (err2) return callback(err2);
      let pending = dirents.length;
      if (pending === 0) return callback();
      const compressedExts = [".gz"];
      dirents.forEach((dirent) => {
        const srcPath = resolve(src, dirent.name);
        const destPath = resolve(dest, dirent.name);
        const relativePath = relative(src, srcPath).replace(/\\/g, "/");
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
            const publicFilePath = resolve(publicDir, relativePath);
            fs__default.copyFile(publicFilePath, destPath, (err3) => {
              if (err3) return callback(err3);
              if (--pending === 0) callback();
            });
          } else if (CONFIG_FILENAMES.includes(relativePath)) {
            handleConfigFile(srcPath, destPath, relativePath, options, (err3) => {
              if (err3) return callback(err3);
              if (--pending === 0) callback();
            });
          } else {
            fs__default.copyFile(srcPath, destPath, (err3) => {
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
    fs__default.readdir(dir, { withFileTypes: true }, (err, dirents) => {
      if (err) return callback(err);
      let pending = dirents.length;
      if (pending === 0) {
        return callback(null, result);
      }
      dirents.forEach((dirent) => {
        const fullPath = resolve(dir, dirent.name);
        const relPath = relative(publicDir, fullPath).replace(/\\/g, "/");
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
  return resolve(p).replace(/\\/g, "/") + "/";
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
      const publicFilePath = join(publicDir, normalizedPath).replace(/\\/g, "/");
      try {
        const stat2 = await fs__default.promises.stat(publicFilePath);
        if (stat2.isFile()) {
          filePath = publicFilePath;
          fileName = basename(normalizedPath);
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
      const stat = await fs__default.promises.stat(filePath);
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
  const stream = fs__default.createReadStream(filePath);
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
export {
  getExternals as a,
  createGlobalUniversalMiddleware as b,
  copyDir as c,
  createMxCadAssetsMiddleware as d,
  getApiMap as e,
  generateRuntimeConfigScript as f,
  getSourceAssetsPath as g,
  getContentType as h,
  resolveOptions as r
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtRG56Tnp2engubWpzIiwic291cmNlcyI6WyIuLi8uLi9wYWNrVG9vbFBsdWdpblNyYy9zaGFyZWQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHBsdWdpbnMvc2hhcmVkL2luZGV4LnRzXHJcbmltcG9ydCB7IGJhc2VuYW1lLCBqb2luLCByZWxhdGl2ZSwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZnMsIHsgTm9QYXJhbUNhbGxiYWNrIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcclxuaW1wb3J0IHsgbmFtZSB9IGZyb20gXCIuLi8uLi9saWIvcGFja2FnZS5qc29uXCJcclxuXHJcbmltcG9ydCB7IE14UXVpY2tDb21tYW5kIH0gZnJvbSBcIi4vdHlwZXMvbXhRdWlja0NvbW1hbmQuZFwiXHJcbmltcG9ydCB7IE14U2VydmVyQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXMvbXhTZXJ2ZXJDb25maWcuZFwiXHJcbmltcG9ydCB7IE14U2tldGNoZXNBbmROb3Rlc1VpQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXMvbXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWcuZFwiXHJcbmltcG9ydCB7IE14VWlDb25maWcgfSBmcm9tIFwiLi90eXBlcy9teFVpQ29uZmlnLmRcIlxyXG5pbXBvcnQgeyBNeGNhZFVpQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXMvbXhjYWRVaUNvbmZpZy5kXCJcclxuaW1wb3J0IHsgVnVldGlmeVRoZW1lQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXMvdnVldGlmeVRoZW1lQ29uZmlnLmRcIlxyXG5pbXBvcnQgYXBpTWFwIGZyb20gJy4uL2FwaS1tYXAuanNvbidcclxuZXhwb3J0IGNvbnN0IGdldEFwaU1hcCA9ICgpID0+IGFwaU1hcFxyXG5leHBvcnQgaW50ZXJmYWNlIE14UGx1Z2luQ29uZmlnIHtcclxuICBwbHVnaW5zOiAoc3RyaW5nIHwge1xyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIGlzQWZ0ZXJMb2FkPzogYm9vbGVhbixcclxuICAgIGRpcj86IGJvb2xlYW4sXHJcbiAgICB2ZXJzaW9uPzogc3RyaW5nXHJcbiAgfSlbXVxyXG59XHJcbi8vID09PSDmlrDlop7vvJrphY3nva7mlofku7blkI3luLjph48gPT09XHJcbmV4cG9ydCBjb25zdCBDT05GSUdfRklMRU5BTUVTID0gW1xyXG4gIC8vICdteGNhZFVpQ29uZmlnLmpzb24nLFxyXG4gICdteFF1aWNrQ29tbWFuZC5qc29uJyxcclxuICAnbXhTZXJ2ZXJDb25maWcuanNvbicsXHJcbiAgJ214U2tldGNoZXNBbmROb3Rlc1VpQ29uZmlnLmpzb24nLFxyXG4gICdteFVpQ29uZmlnLmpzb24nLFxyXG4gICd2dWV0aWZ5VGhlbWVDb25maWcuanNvbicsXHJcbiAgLy8gJ3BsdWdpbnMvY29uZmlnLmpzb24nXHJcbl0gYXMgY29uc3Q7XHJcbi8qKlxyXG4gKiDphY3nva7mlofku7blpITnkIblmahcclxuICog5Y+v6YCJ77ya5a+554m55a6a6YWN572u5paH5Lu26L+b6KGM6L+Q6KGM5pe25L+u5pS5XHJcbiAqIOWHveaVsOaOpeaUtuWOn+WniyBKU09OIOaVsOaNru+8jOi/lOWbnuS/ruaUueWQjueahCBKU09OIOaVsOaNru+8iOWPr+W8guatpe+8iVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2Zvcm1GdW5jdGlvbnMge1xyXG4gIC8vIHRyYW5zZm9ybU14Y2FkVWlDb25maWcoZGF0YTogTXhjYWRVaUNvbmZpZyk6IFByb21pc2U8TXhjYWRVaUNvbmZpZz4gfCBNeGNhZFVpQ29uZmlnO1xyXG4gIHRyYW5zZm9ybU14UXVpY2tDb21tYW5kKGRhdGE6IE14UXVpY2tDb21tYW5kKTogUHJvbWlzZTxNeFF1aWNrQ29tbWFuZD4gfCBNeFF1aWNrQ29tbWFuZDtcclxuICB0cmFuc2Zvcm1NeFNlcnZlckNvbmZpZyhkYXRhOiBNeFNlcnZlckNvbmZpZyk6IFByb21pc2U8TXhTZXJ2ZXJDb25maWc+IHwgTXhTZXJ2ZXJDb25maWc7XHJcbiAgdHJhbnNmb3JtTXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWcoZGF0YTogTXhTa2V0Y2hlc0FuZE5vdGVzVWlDb25maWcpOiBQcm9taXNlPE14U2tldGNoZXNBbmROb3Rlc1VpQ29uZmlnPiB8IE14U2tldGNoZXNBbmROb3Rlc1VpQ29uZmlnO1xyXG4gIHRyYW5zZm9ybU14VWlDb25maWcoZGF0YTogTXhVaUNvbmZpZyk6IFByb21pc2U8TXhVaUNvbmZpZz4gfCBNeFVpQ29uZmlnO1xyXG4gIHRyYW5zZm9ybVZ1ZXRpZnlUaGVtZUNvbmZpZyhkYXRhOiBWdWV0aWZ5VGhlbWVDb25maWcpOiBQcm9taXNlPFZ1ZXRpZnlUaGVtZUNvbmZpZz4gfCBWdWV0aWZ5VGhlbWVDb25maWc7XHJcbiAgLy8gdHJhbnNmb3JtTXhQbHVnaW5zQ29uZmlnKGRhdGE6IE14UGx1Z2luQ29uZmlnW10pOiBQcm9taXNlPE14UGx1Z2luQ29uZmlnW10+IHwgTXhQbHVnaW5Db25maWdbXTtcclxufVxyXG4vLyDmianlsZXmj5Lku7bpgInpobnmjqXlj6MgPT09XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXhDYWRBc3NldHNQbHVnaW5PcHRpb25zIGV4dGVuZHMgUGFydGlhbDxUcmFuc2Zvcm1GdW5jdGlvbnM+IHtcclxuICAvKipcclxuICAgKiDmnoTlu7rlkI7vvIxteGNhZEFwcEFzc2V0cyDotYTmupDlrZjmlL7nmoTlrZDnm67lvZXlkI3jgIJcclxuICAgKiBAZGVmYXVsdCAnbXhjYWRBcHBBc3NldHMnXHJcbiAgICovXHJcbiAgb3V0cHV0RGlyPzogc3RyaW5nO1xyXG4gIC8qKiDnrKzkuInmlrnkvp3otZYqL1xyXG4gIGxpYnJhcnlOYW1lcz86IChrZXlvZiB0eXBlb2YgZXh0ZXJuYWxzKVtdO1xyXG4gIC8qKiDmmK/lkKbljZXnur/nqIvliqDovb13YXNtICjpu5jorqTkvb/nlKjlpJrnur/nqIvlj4rliqDovb0pICovXHJcbiAgaXNXYXNtU3Q/OiBib29sZWFuO1xyXG4gICAvKipcclxuICAgKiDmmK/lkKblkK/nlKjpooTljovnvKnotYTmupDvvIjlpoIgLmd6IOaWh+S7tu+8ieeahOaLt+i0nSDpu5jorqTmmK90cnVlXHJcbiAgICog6K6+572u5Li6IGZhbHNlIOaXtu+8jC5neiDljovnvKnmlofku7blsIbkuI3kvJrooqvlpI3liLbliLDovpPlh7rnm67lvZVcclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICovXHJcbiAgZW5hYmxlQ29tcHJlc3NlZEFzc2V0cz86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG4vLyA9PT0g5aKe5by677yacmVzb2x2ZU9wdGlvbnMg6buY6K6k5YC8ID09PVxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMob3B0aW9uczogTXhDYWRBc3NldHNQbHVnaW5PcHRpb25zID0ge30pOiBSZXF1aXJlZDxNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnM+IHtcclxuICBjb25zdCByZXNvbHZlZDogUmVxdWlyZWQ8TXhDYWRBc3NldHNQbHVnaW5PcHRpb25zPiA9IHtcclxuICAgIG91dHB1dERpcjogb3B0aW9ucy5vdXRwdXREaXIgfHwgJ214Y2FkQXBwQXNzZXRzJyxcclxuICAgIGxpYnJhcnlOYW1lczogb3B0aW9ucy5saWJyYXJ5TmFtZXMgfHwgW10sXHJcbiAgICBpc1dhc21TdDogb3B0aW9ucy5pc1dhc21TdCB8fCBmYWxzZSxcclxuICAgIGVuYWJsZUNvbXByZXNzZWRBc3NldHM6IG9wdGlvbnMuZW5hYmxlQ29tcHJlc3NlZEFzc2V0cyB8fCB0cnVlLFxyXG4gICAgLy8gdHJhbnNmb3JtTXhjYWRVaUNvbmZpZzogb3B0aW9ucy50cmFuc2Zvcm1NeGNhZFVpQ29uZmlnIHx8ICgoZCkgPT4gZCksXHJcbiAgICB0cmFuc2Zvcm1NeFF1aWNrQ29tbWFuZDogb3B0aW9ucy50cmFuc2Zvcm1NeFF1aWNrQ29tbWFuZCB8fCAoKGQpID0+IGQpLFxyXG4gICAgdHJhbnNmb3JtTXhTZXJ2ZXJDb25maWc6IG9wdGlvbnMudHJhbnNmb3JtTXhTZXJ2ZXJDb25maWcgfHwgKChkKSA9PiBkKSxcclxuICAgIHRyYW5zZm9ybU14U2tldGNoZXNBbmROb3Rlc1VpQ29uZmlnOiBvcHRpb25zLnRyYW5zZm9ybU14U2tldGNoZXNBbmROb3Rlc1VpQ29uZmlnIHx8ICgoZCkgPT4gZCksXHJcbiAgICB0cmFuc2Zvcm1NeFVpQ29uZmlnOiBvcHRpb25zLnRyYW5zZm9ybU14VWlDb25maWcgfHwgKChkKSA9PiBkKSxcclxuICAgIHRyYW5zZm9ybVZ1ZXRpZnlUaGVtZUNvbmZpZzogb3B0aW9ucy50cmFuc2Zvcm1WdWV0aWZ5VGhlbWVDb25maWcgfHwgKChkKSA9PiBkKSxcclxuICAgIC8vIHRyYW5zZm9ybU14UGx1Z2luc0NvbmZpZzogb3B0aW9ucy50cmFuc2Zvcm1NeFBsdWdpbnNDb25maWcgfHwgKChkKSA9PiBkKSxcclxuICB9O1xyXG4gIHJldHVybiByZXNvbHZlZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkUGF0aFJlc3VsdCB7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBmaWxlUGF0aD86IHN0cmluZzsgICAgICAgICAvLyDlt7IgcmVzb2x2ZSDnmoTlronlhajmlofku7bot6/lvoRcclxuICB1cmxQYXRoPzogc3RyaW5nOyAgICAgICAgICAvLyDop6PnoIHlkI7nmoQgVVJMIOi3r+W+hO+8iOS4jeWQqyBxdWVyee+8iVxyXG4gIGZpbGVOYW1lPzogc3RyaW5nOyAgICAgICAgIC8vIOaWh+S7tuWQje+8iGJhc2VuYW1l77yJXHJcbiAgc3RhdHVzQ29kZT86IG51bWJlcjtcclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOWuieWFqOino+aekOW5tumqjOivgeivt+axgui3r+W+hFxyXG4gKiBAcGFyYW0gcmVxVXJsIOivt+axgueahCBVUkzvvIjlpoIgJy9hc3NldHMvbXhTZXJ2ZXJDb25maWcuanNvbj92PTEn77yJXHJcbiAqIEBwYXJhbSByb290IOacrOWcsOagueebruW9le+8iOWmgiAnRDovcHJvamVjdC9kaXN0L214Y2FkJ++8iVxyXG4gKiBAcGFyYW0gYmFzZVBhdGgg5Y+v6YCJ55qE5Z+656GA6Lev5b6E5YmN57yA77yI5aaCICcvbXhjYWQvJ++8jOeUqOS6jiBWaXRl77yJXHJcbiAqIEByZXR1cm5zIOino+aekOe7k+aenOaIlumUmeivr1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVTYWZlUGF0aChcclxuICByZXFVcmw6IHN0cmluZyxcclxuICByb290OiBzdHJpbmcsXHJcbiAgYmFzZVBhdGg/OiBzdHJpbmdcclxuKTogUGFyc2VkUGF0aFJlc3VsdCB7XHJcbiAgLy8gMS4g5Z+65pys5qCh6aqMXHJcbiAgaWYgKCFyZXFVcmwgfHwgdHlwZW9mIHJlcVVybCAhPT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBzdGF0dXNDb2RlOiA0MDAsIG1lc3NhZ2U6ICdCYWQgUmVxdWVzdCcgfTtcclxuICB9XHJcblxyXG4gIC8vIDIuIOaPkOWPlui3r+W+hO+8iOWOuyBxdWVyeSDlkowgaGFzaO+8iVxyXG4gIGxldCB1cmxQYXRoID0gcmVxVXJsLnNwbGl0KCc/JylbMF0uc3BsaXQoJyMnKVswXTtcclxuXHJcbiAgLy8gMy4g6Kej56CBIFVSTFxyXG4gIGxldCBkZWNvZGVkUGF0aDogc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBkZWNvZGVkUGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudCh1cmxQYXRoKTtcclxuICAgIC8vIOmYsuatoiBudWxsIOWtl+iKguaUu+WHu1xyXG4gICAgaWYgKGRlY29kZWRQYXRoLmluY2x1ZGVzKCdcXDAnKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgc3RhdHVzQ29kZTogNDAwLCBtZXNzYWdlOiAnSW52YWxpZCBVUkwnIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgc3RhdHVzQ29kZTogNDAwLCBtZXNzYWdlOiAnSW52YWxpZCBVUkwgZW5jb2RpbmcnIH07XHJcbiAgfVxyXG5cclxuICAvLyA0LiDlpITnkIYgYmFzZVBhdGjvvIjlpoIgVml0ZSDnmoQgYmFzZe+8iVxyXG4gIGlmIChiYXNlUGF0aCAmJiBkZWNvZGVkUGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKSkge1xyXG4gICAgZGVjb2RlZFBhdGggPSBkZWNvZGVkUGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgLy8gNS4g5riF55CG6Lev5b6E77ya5Y676Zmk5byA5aS05aSa5L2Z55qEIC9cclxuICAvLyDkvovlpoLvvJovL2Fzc2V0cy9maWxlLmpzb24gLT4gYXNzZXRzL2ZpbGUuanNvblxyXG4gIGNvbnN0IGNsZWFuZWRQYXRoID0gZGVjb2RlZFBhdGgucmVwbGFjZSgvXlxcLysvLCAnJyk7XHJcblxyXG4gIC8vIDYuIOaLvOaOpeaWh+S7tui3r+W+hFxyXG4gIGNvbnN0IGZpbGVQYXRoID0gam9pbihyb290LCBjbGVhbmVkUGF0aCB8fCAnLicpO1xyXG5cclxuICAvLyA3LiDlronlhajmo4Dmn6XvvJrpmLLmraLot6/lvoTnqb/otopcclxuICBsZXQgbm9ybWFsaXplZEZpbGU6IHN0cmluZztcclxuICBsZXQgbm9ybWFsaXplZFJvb3Q6IHN0cmluZztcclxuICB0cnkge1xyXG4gICAgbm9ybWFsaXplZEZpbGUgPSByZXNvbHZlKGZpbGVQYXRoKTtcclxuICAgIG5vcm1hbGl6ZWRSb290ID0gcmVzb2x2ZShyb290KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBzdGF0dXNDb2RlOiA1MDAsIG1lc3NhZ2U6ICdQYXRoIHJlc29sdXRpb24gZmFpbGVkJyB9O1xyXG4gIH1cclxuXHJcbiAgLy8g4pyFIOWFs+mUru+8muehruS/nSBub3JtYWxpemVkRmlsZSDlnKggbm9ybWFsaXplZFJvb3Qg55uu5b2V5LiLXHJcbiAgY29uc3Qgbm9ybWFsaXplZEZpbGVTdHIgPSBub3JtYWxpemVkRmlsZS5yZXBsYWNlKC9cXFxcL2csICcvJykgKyAnLyc7XHJcbiAgY29uc3Qgbm9ybWFsaXplZFJvb3RTdHIgPSBub3JtYWxpemVkUm9vdC5yZXBsYWNlKC9cXFxcL2csICcvJykgKyAnLyc7XHJcblxyXG4gIGlmICghbm9ybWFsaXplZEZpbGVTdHIuc3RhcnRzV2l0aChub3JtYWxpemVkUm9vdFN0cikpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBzdGF0dXNDb2RlOiA0MDMsIG1lc3NhZ2U6ICdGb3JiaWRkZW46IFBhdGggdHJhdmVyc2FsIGRldGVjdGVkJyB9O1xyXG4gIH1cclxuXHJcbiAgLy8gOC4g5o+Q5Y+WIGZpbGVOYW1lXHJcbiAgY29uc3QgcGF0aFNlZ21lbnRzID0gY2xlYW5lZFBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgY29uc3QgZmlsZU5hbWUgPSBwYXRoU2VnbWVudHMubGVuZ3RoID4gMCA/IGJhc2VuYW1lKHBhdGhTZWdtZW50c1twYXRoU2VnbWVudHMubGVuZ3RoIC0gMV0pIDogJyc7XHJcblxyXG4gIC8vIOKchSDmiJDlip9cclxuICByZXR1cm4ge1xyXG4gICAgc3VjY2VzczogdHJ1ZSxcclxuICAgIGZpbGVQYXRoOiBub3JtYWxpemVkRmlsZSxcclxuICAgIHVybFBhdGg6IGRlY29kZWRQYXRoLFxyXG4gICAgZmlsZU5hbWUsXHJcbiAgfTtcclxufVxyXG5cclxuXHJcbnR5cGUgQ29uZmlnRmlsZW5hbWUgPSAodHlwZW9mIENPTkZJR19GSUxFTkFNRVMpW251bWJlcl07XHJcbmZ1bmN0aW9uIGhhbmRsZUNvbmZpZ0ZpbGUoXHJcbiAgc3JjUGF0aDogc3RyaW5nLFxyXG4gIGRlc3RQYXRoOiBzdHJpbmcsXHJcbiAgZmlsZW5hbWU6IENvbmZpZ0ZpbGVuYW1lLFxyXG4gIG9wdGlvbnM6IFJlcXVpcmVkPE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucz4sXHJcbiAgY2FsbGJhY2s6IE5vUGFyYW1DYWxsYmFja1xyXG4pIHtcclxuICBmcy5yZWFkRmlsZShzcmNQYXRoLCAndXRmLTgnLCBhc3luYyAoZXJyLCBjb250ZW50KSA9PiB7XHJcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZGF0YSA9IGNvbnRlbnQudHJpbSgpID8gSlNPTi5wYXJzZShjb250ZW50KSA6IHt9O1xyXG5cclxuICAgICAgLy8g4pyFIOato+ehrueUn+aIkCB0cmFuc2Zvcm0g5Ye95pWw5ZCNXHJcbiAgICAgIGNvbnN0IGJhc2VOYW1lID0gZmlsZW5hbWUucmVwbGFjZSgvXFwuanNvbiQvaSwgJycpO1xyXG4gICAgICBjb25zdCB0cmFuc2Zvcm1LZXkgPSBgdHJhbnNmb3JtJHtwYXNjYWxDYXNlKGJhc2VOYW1lKX1gOyAvLyDkvovlpoI6IHRyYW5zZm9ybVBsdWdpbnNDb25maWcg5oiWIHRyYW5zZm9ybU14UGx1Z2luc0NvbmZpZ1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmb3JtRm4gPSAob3B0aW9ucyBhcyBhbnkpW3RyYW5zZm9ybUtleV07XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRyYW5zZm9ybUZuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgZGF0YSA9IGF3YWl0IHRyYW5zZm9ybUZuKGRhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMik7XHJcbiAgICAgIGZzLndyaXRlRmlsZShkZXN0UGF0aCwganNvbiwgJ3V0Zi04JywgY2FsbGJhY2spO1xyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIOWkhOeQhumFjee9ruaWh+S7tuivt+axgu+8muivu+WPliDihpIg6L2s5o2iIOKGkiDov5Tlm57lk43lupRcclxuICog55So5LqOIFZpdGUvV2VicGFjayBkZXYgc2VydmVyIOS4remXtOS7tlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNvbmZpZ1JlcXVlc3QoXHJcbiAgZmlsZVBhdGg6IHN0cmluZywgICAgICAgICAgIC8vIOW3sue7j+mqjOivgei/h+eahOWuieWFqOi3r+W+hFxyXG4gIGZpbGVOYW1lOiBzdHJpbmcsICAgICAgICAgICAvLyDmlofku7blkI3vvIzlpoIgJ214U2VydmVyQ29uZmlnLmpzb24nXHJcbiAgb3B0aW9uczogUmVxdWlyZWQ8TXhDYWRBc3NldHNQbHVnaW5PcHRpb25zPixcclxuICByZXM6IGFueSxcclxuICBsb2dnZXI/OiB7IGluZm8/OiAobXNnOiBzdHJpbmcpID0+IHZvaWQ7IGVycm9yPzogKG1zZzogc3RyaW5nKSA9PiB2b2lkIH1cclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgLy8g5LuF5aSE55CG55m95ZCN5Y2V5YaF55qE5paH5Lu2XHJcbiAgaWYgKCEoQ09ORklHX0ZJTEVOQU1FUyBhcyB1bmtub3duIGFzIHN0cmluZykuaW5jbHVkZXMoZmlsZU5hbWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuICAgIGxldCBkYXRhID0gY29udGVudC50cmltKCkgPyBKU09OLnBhcnNlKGNvbnRlbnQpIDoge307XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtS2V5ID0gYHRyYW5zZm9ybSR7cGFzY2FsQ2FzZShmaWxlTmFtZS5yZXBsYWNlKC9cXC5qc29uJC9pLCAnJykpfWA7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1GbiA9IChvcHRpb25zIGFzIGFueSlbdHJhbnNmb3JtS2V5XTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRyYW5zZm9ybUZuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGRhdGEgPSBhd2FpdCB0cmFuc2Zvcm1GbihkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmVzLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgbG9nZ2VyPy5lcnJvcj8uKGBbbXhjYWQtYXNzZXRzXSDinYwgRmFpbGVkIHRvIHNlcnZlICR7ZmlsZU5hbWV9OiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgaWYgKCFyZXMuaGVhZGVyc1NlbnQpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgIHJlcy5lbmQoJ0ludGVybmFsIFNlcnZlciBFcnJvcicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7IC8vIOW3suWkhOeQhumUmeivr1xyXG4gIH1cclxufVxyXG5cclxuLyoqIOWIm+W7uumAmueUqOWFqOWxgOS4remXtOS7tiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2xvYmFsVW5pdmVyc2FsTWlkZGxld2FyZShvcHRpb25zOiBSZXF1aXJlZDxNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnM+KSB7XHJcbiAgcmV0dXJuIGFzeW5jIChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xyXG4gICAgaWYgKCFvcHRpb25zLmlzV2FzbVN0KSB7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0Nyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5JywgJ3NhbWUtb3JpZ2luJyk7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0Nyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3knLCAncmVxdWlyZS1jb3JwJyk7XHJcbiAgICB9XHJcbiAgICBuZXh0KCk7XHJcbiAgfVxyXG59XHJcbi8vID09PSDovoXliqnlh73mlbDvvJrlrZfnrKbkuLLovawgUGFzY2FsQ2FzZSA9PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhc2NhbENhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBzdHJcclxuICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKVxyXG4gICAgLnJlcGxhY2UoL14uLywgYyA9PiBjLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG4vLyA9PT0g5YW25LuW5Y6f5pyJ5a+85Ye65L+d5oyB5LiN5Y+YID09PVxyXG5leHBvcnQgY29uc3QgZXh0ZXJuYWxzID0ge1xyXG4gICd2dWUnOiAnTVhDQURBUFBfRVhURVJOQUxMSUJSQVJJRVMuVnVlJyxcclxuICAnYXhpb3MnOiAnTVhDQURBUFBfRVhURVJOQUxMSUJSQVJJRVMuYXhpb3MnLFxyXG4gICd2dWV0aWZ5JzogJ01YQ0FEQVBQX0VYVEVSTkFMTElCUkFSSUVTLnZ1ZXRpZnknLFxyXG4gICd2dWV0aWZ5L2NvbXBvbmVudHMnOiAnTVhDQURBUFBfRVhURVJOQUxMSUJSQVJJRVMudnVldGlmeUNvbXBvbmVudHMnLFxyXG4gICdtYXBib3gtZ2wnOiAnTVhDQURBUFBfRVhURVJOQUxMSUJSQVJJRVMubWFwYm94Z2wnLFxyXG4gICdwaW5pYSc6ICdNWENBREFQUF9FWFRFUk5BTExJQlJBUklFUy5waW5pYSdcclxufTtcclxuLy8g5aeL57uI5L+d55WZ55qE5qih5Z2XXHJcbmNvbnN0IEFMV0FZU19LRUVQID0gbmV3IFNldChbJ214Y2FkJywgJ214ZHJhdyddKTtcclxuXHJcbi8qKlxyXG4gKiDmuIXnkIblubblhpnlhaXmraPnoa7nmoTnsbvlnovlvJXnlKhcclxuICovXHJcbmZ1bmN0aW9uIHN5bmNUeXBlUmVmZXJlbmNlcyhsaWJyYXJ5TmFtZXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgY29uc3Qgcm9vdERpciA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgY29uc3QgZGlzdERpciA9IHJlc29sdmUocm9vdERpciwgJ25vZGVfbW9kdWxlcycsICdteGNhZC1hcHAnLCAnZGlzdCcpO1xyXG4gIGNvbnN0IGluZGV4UGF0aCA9IHJlc29sdmUoZGlzdERpciwgJ2luZGV4LmQudHMnKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIOKchSAxLiDmo4Dmn6UgZGlzdCDnm67lvZVcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhkaXN0RGlyKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYOKaoO+4jyBteGNhZC1hcHAvZGlzdCDnm67lvZXkuI3lrZjlnKjvvIzot7Pov4fnsbvlnovlkIzmraU6ICR7ZGlzdERpcn1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKchSAyLiDnoa7kv50gaW5kZXguZC50cyDlrZjlnKhcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhpbmRleFBhdGgpKSB7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoaW5kZXhQYXRoLCAnJywgJ3V0Zi04Jyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGDinIUg5bey5Yib5bu656m657G75Z6L5paH5Lu2OiAke2luZGV4UGF0aH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhpbmRleFBhdGgsICd1dGYtOCcpO1xyXG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KC9cXHI/XFxuLyk7XHJcblxyXG4gICAgLy8g4pyFIDMuIOaPkOWPluaJgOacieeOsOacieeahCAvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi94eHguZC50c1wiIC8+IOihjFxyXG4gICAgY29uc3QgcmVmZXJlbmNlUmVnZXggPSAvXFwvXFwvXFwvXFxzKjxyZWZlcmVuY2VcXHMrcGF0aD1cIlxcLlxcLyhbXlwiXStcXC5kXFwudHMpXCJcXHMqXFwvPi87XHJcbiAgICBjb25zdCBleGlzdGluZ1JlZnM6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBub25SZWZMaW5lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICBjb25zdCBtYXRjaCA9IGxpbmUudHJpbSgpLm1hdGNoKHJlZmVyZW5jZVJlZ2V4KTtcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBtYXRjaFsxXTsgLy8g5aaCIFwidnVlLmQudHNcIlxyXG4gICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9cXC5kXFwudHMkLywgJycpOyAvLyDmj5Dlj5bmqKHlnZflkI1cclxuICAgICAgICBleGlzdGluZ1JlZnMucHVzaChtb2R1bGVOYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBub25SZWZMaW5lcy5wdXNoKGxpbmUpOyAvLyDkv53nlZnpnZ4gcmVmZXJlbmNlIOihjFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDinIUgNC4g6K6h566X5pyA57uI5bqU6K+l5L+d55WZ55qE5qih5Z2XXHJcbiAgICBjb25zdCB2YWxpZE1vZHVsZXMgPSBuZXcgU2V0PHN0cmluZz4oQUxXQVlTX0tFRVApO1xyXG5cclxuICAgIGxpYnJhcnlOYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAvLyDlv4XpobvlnKggZXh0ZXJuYWxzIOS4reWumuS5ie+8jOS4lOexu+Wei+aWh+S7tuWtmOWcqFxyXG4gICAgICBpZiAobmFtZSBpbiBleHRlcm5hbHMpIHtcclxuICAgICAgICBjb25zdCBkdHNQYXRoID0gcmVzb2x2ZShkaXN0RGlyLCBgJHtuYW1lfS5kLnRzYCk7XHJcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZHRzUGF0aCkpIHtcclxuICAgICAgICAgIHZhbGlkTW9kdWxlcy5hZGQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDinIUgNS4g55Sf5oiQ5pyA57uI55qEIHJlZmVyZW5jZSDooYzvvIjkv53mjIEgbXhjYWQg5ZKMIG14ZHJhdyDlnKjmnIDliY3vvIlcclxuICAgIGNvbnN0IGZpbmFsUmVmcyA9IFsnbXhjYWQnLCAnbXhkcmF3J11cclxuICAgICAgLmZpbHRlcihuYW1lID0+IHZhbGlkTW9kdWxlcy5oYXMobmFtZSkpXHJcbiAgICAgIC5tYXAobmFtZSA9PiBgLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vJHtuYW1lfS5kLnRzXCIgLz5gKTtcclxuXHJcbiAgICAvLyDmt7vliqDlhbbku5YgdmFsaWRNb2R1bGVzIOS4reeahO+8iOWOu+mHje+8iVxyXG4gICAgQXJyYXkuZnJvbSh2YWxpZE1vZHVsZXMpXHJcbiAgICAgIC5maWx0ZXIobmFtZSA9PiAhQUxXQVlTX0tFRVAuaGFzKG5hbWUpKVxyXG4gICAgICAuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBmaW5hbFJlZnMucHVzaChgLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vJHtuYW1lfS5kLnRzXCIgLz5gKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8g4pyFIDYuIOWQiOW5tu+8muacgOe7iOW8leeUqCArIOWOn+Wni+mdnuW8leeUqOihjFxyXG4gICAgY29uc3QgcmVzdWx0TGluZXMgPSBbLi4uZmluYWxSZWZzLCAnJywgLi4ubm9uUmVmTGluZXMuZmlsdGVyKGwgPT4gbC50cmltKCkubGVuZ3RoID4gMCldO1xyXG5cclxuICAgIC8vIOenu+mZpOi/nue7reepuuihjO+8jOS/neeVmeS4gOS4quWIhumalFxyXG4gICAgY29uc3QgY2xlYW5lZExpbmVzID0gcmVzdWx0TGluZXMuZmlsdGVyKChsaW5lLCBpLCBhcnIpID0+XHJcbiAgICAgICEobGluZS50cmltKCkgPT09ICcnICYmIGkgPiAwICYmIGFycltpIC0gMV0udHJpbSgpID09PSAnJylcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbmV3Q29udGVudCA9IGNsZWFuZWRMaW5lcy5qb2luKCdcXG4nKS50cmltKCkgKyAnXFxuJztcclxuXHJcbiAgICAvLyDinIUgNy4g5YaZ5Zue5paH5Lu277yI5LuF5b2T5YaF5a655Y+Y5YyW5pe277yJXHJcbiAgICBpZiAoY29udGVudC50cmltKCkgIT09IG5ld0NvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoaW5kZXhQYXRoLCBuZXdDb250ZW50LCAndXRmLTgnKTtcclxuICAgICAgY29uc29sZS5sb2coYOKchSDlt7LlkIzmraUgbXhjYWQtYXBwL2Rpc3QvaW5kZXguZC50cyDnsbvlnovlvJXnlKhgKTtcclxuICAgICAgY29uc29sZS5sb2coYCAgIOS/neeVmTogJHtBcnJheS5mcm9tKHZhbGlkTW9kdWxlcykuam9pbignLCAnKX1gKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYOKdjCDlkIzmraXnsbvlnovlvJXnlKjlpLHotKU6YCwgZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpooTlrprkuYnlupPlkI3liLDlhajlsYDlj5jph4/nmoTmmKDlsIRcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xJQlJBUllfTUFQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gIG14Y2FkOiAnTXhDQUQnLFxyXG4gIG14ZHJhdzogJ014J1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlcm5hbHMoXHJcbiAgbGlicmFyeU5hbWVzOiBSZXF1aXJlZDxNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnM+WydsaWJyYXJ5TmFtZXMnXVxyXG4pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICBzeW5jVHlwZVJlZmVyZW5jZXMobGlicmFyeU5hbWVzKTtcclxuICBjb25zdCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IC4uLkRFRkFVTFRfTElCUkFSWV9NQVAgfVxyXG4gIGlmICghQXJyYXkuaXNBcnJheShsaWJyYXJ5TmFtZXMpKSByZXR1cm4gcmVzdWx0O1xyXG4gIGxpYnJhcnlOYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKG5hbWUgaW4gZXh0ZXJuYWxzKSB7XHJcbiAgICAgIHJlc3VsdFtuYW1lXSA9IGV4dGVybmFsc1tuYW1lIGFzIGtleW9mIHR5cGVvZiBleHRlcm5hbHNdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VBc3NldHNQYXRoKCk6IHN0cmluZyB7XHJcbiAgbGV0IGN1cnJlbnRGaWxlOiBzdHJpbmc7XHJcbiAgaWYgKHR5cGVvZiBfX2ZpbGVuYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY3VycmVudEZpbGUgPSBfX2ZpbGVuYW1lO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjdXJyZW50RmlsZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcclxuICB9XHJcbiAgY29uc3QgcGFja2FnZVJvb3QgPSByZXNvbHZlKGN1cnJlbnRGaWxlLCAnLi4nLCAnLi4nLCAnLi4nKTtcclxuICBjb25zdCBhc3NldHNQYXRoID0gcmVzb2x2ZShwYWNrYWdlUm9vdCwgbmFtZSwgJ2Rpc3QnLCAnbXhjYWRBcHBBc3NldHMnKTtcclxuICBpZiAoIWZzLmV4aXN0c1N5bmMoYXNzZXRzUGF0aCkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgbXgtY2FkLWFwcCBhc3NldHMgbm90IGZvdW5kIGF0OiAke2Fzc2V0c1BhdGh9YCk7XHJcbiAgfVxyXG4gIHJldHVybiBhc3NldHNQYXRoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTb3VyY2VBc3NldHNFeGlzdCgpOiBib29sZWFuIHtcclxuICBjb25zdCBwYXRoID0gZ2V0U291cmNlQXNzZXRzUGF0aCgpO1xyXG4gIHJldHVybiBmcy5leGlzdHNTeW5jKHBhdGgpICYmIGZzLmxzdGF0U3luYyhwYXRoKS5pc0RpcmVjdG9yeSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSdW50aW1lQ29uZmlnU2NyaXB0KHB1YmxpY1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDxzY3JpcHQ+XHJcbiAgICAgIHdpbmRvdy5fX01YX0NBRF9BUFBfQVNTRVRfUEFUSF9fID0gJyR7cHVibGljUGF0aH0nO1xyXG4gICAgPC9zY3JpcHQ+XHJcbiAgYC50cmltKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5RGlyKFxyXG4gIHNyYzogc3RyaW5nLFxyXG4gIGRlc3Q6IHN0cmluZyxcclxuICBwdWJsaWNEaXI6IHN0cmluZyxcclxuICBvcHRpb25zOiBSZXF1aXJlZDxNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnM+LFxyXG4gIGNhbGxiYWNrOiAoZXJyPzogRXJyb3IpID0+IHZvaWRcclxuKTogdm9pZCB7XHJcbiAgLy8g56ys5LiA5q2l77ya5omr5o+PIHB1YmxpY0RpciDkuIvmiYDmnInmlofku7bvvIjnm7jlr7nkuo4gcHVibGljRGlyIOeahOi3r+W+hO+8iVxyXG4gIHNjYW5QdWJsaWNEaXIocHVibGljRGlyLCAoZXJyLCBwdWJsaWNGaWxlcykgPT4ge1xyXG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcblxyXG4gICAgLy8g56ys5LqM5q2l77ya5byA5aeL5aSN5Yi277yM5Lyg5YWlIHB1YmxpY0ZpbGVzIOe8k+WtmFxyXG4gICAgZG9Db3B5KHNyYywgZGVzdCwgcHVibGljRGlyLCBwdWJsaWNGaWxlcyEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8g5a6e6ZmF5omn6KGM5aSN5Yi255qE5Ye95pWwXHJcbmZ1bmN0aW9uIGRvQ29weShcclxuICBzcmM6IHN0cmluZyxcclxuICBkZXN0OiBzdHJpbmcsXHJcbiAgcHVibGljRGlyOiBzdHJpbmcsXHJcbiAgcHVibGljRmlsZXM6IFNldDxzdHJpbmc+LFxyXG4gIG9wdGlvbnM6IFJlcXVpcmVkPE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucz4sIC8vIOazqOaEj++8mui/memHjOmcgOimgeehruS/nSBlbmFibGVDb21wcmVzc2VkQXNzZXRzIOaYr+W/hemAieeahFxyXG4gIGNhbGxiYWNrOiAoZXJyPzogRXJyb3IpID0+IHZvaWRcclxuKSB7XHJcbiAgZnMubWtkaXIoZGVzdCwgeyByZWN1cnNpdmU6IHRydWUgfSwgKGVycikgPT4ge1xyXG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcblxyXG4gICAgZnMucmVhZGRpcihzcmMsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9LCAoZXJyLCBkaXJlbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG5cclxuICAgICAgbGV0IHBlbmRpbmcgPSBkaXJlbnRzLmxlbmd0aDtcclxuICAgICAgaWYgKHBlbmRpbmcgPT09IDApIHJldHVybiBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgLy8g5o+Q5YmN5a6a5LmJ5Y6L57yp5paH5Lu25omp5bGV5ZCNXHJcbiAgICAgIGNvbnN0IGNvbXByZXNzZWRFeHRzID0gWycuZ3onXTsgLy8g5Y+v5oyJ6ZyA5omp5bGVXHJcblxyXG4gICAgICBkaXJlbnRzLmZvckVhY2goKGRpcmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNyY1BhdGggPSByZXNvbHZlKHNyYywgZGlyZW50Lm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGRlc3RQYXRoID0gcmVzb2x2ZShkZXN0LCBkaXJlbnQubmFtZSk7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcmVsYXRpdmUoc3JjLCBzcmNQYXRoKS5yZXBsYWNlKC9cXFxcL2csICcvJykgYXMgQ29uZmlnRmlsZW5hbWU7XHJcblxyXG4gICAgICAgIC8vIOaWsOWinu+8muWmguaenOemgeeUqOWOi+e8qei1hOa6kOS4lOaYr+WOi+e8qeaWh+S7tu+8jOWImei3s+i/h1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFvcHRpb25zLmVuYWJsZUNvbXByZXNzZWRBc3NldHMgJiZcclxuICAgICAgICAgIGNvbXByZXNzZWRFeHRzLnNvbWUoZXh0ID0+IHJlbGF0aXZlUGF0aC5lbmRzV2l0aChleHQpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKC0tcGVuZGluZyA9PT0gMCkgY2FsbGJhY2soKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXJlbnQuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgZG9Db3B5KHNyY1BhdGgsIGRlc3RQYXRoLCBwdWJsaWNEaXIsIHB1YmxpY0ZpbGVzLCBvcHRpb25zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgtLXBlbmRpbmcgPT09IDApIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVudC5pc0ZpbGUoKSkge1xyXG4gICAgICAgICAgaWYgKHB1YmxpY0ZpbGVzLmhhcyhyZWxhdGl2ZVBhdGgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHB1YmxpY0ZpbGVQYXRoID0gcmVzb2x2ZShwdWJsaWNEaXIsIHJlbGF0aXZlUGF0aCk7XHJcbiAgICAgICAgICAgIGZzLmNvcHlGaWxlKHB1YmxpY0ZpbGVQYXRoLCBkZXN0UGF0aCwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICAgIGlmICgtLXBlbmRpbmcgPT09IDApIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChDT05GSUdfRklMRU5BTUVTLmluY2x1ZGVzKHJlbGF0aXZlUGF0aCkpIHtcclxuICAgICAgICAgICAgaGFuZGxlQ29uZmlnRmlsZShzcmNQYXRoLCBkZXN0UGF0aCwgcmVsYXRpdmVQYXRoLCBvcHRpb25zLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcbiAgICAgICAgICAgICAgaWYgKC0tcGVuZGluZyA9PT0gMCkgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmcy5jb3B5RmlsZShzcmNQYXRoLCBkZXN0UGF0aCwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICAgIGlmICgtLXBlbmRpbmcgPT09IDApIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoLS1wZW5kaW5nID09PSAwKSBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4vLyDmiavmj48gcHVibGljRGlyIOS4i+aJgOacieaWh+S7tu+8jOi/lOWbnuebuOWvueS6jiBwdWJsaWNEaXIg55qE6Lev5b6E6ZuG5ZCIXHJcbmZ1bmN0aW9uIHNjYW5QdWJsaWNEaXIoXHJcbiAgcHVibGljRGlyOiBzdHJpbmcsXHJcbiAgY2FsbGJhY2s6IChlcnI6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbiB8IG51bGwsIGZpbGVzPzogU2V0PHN0cmluZz4pID0+IHZvaWRcclxuKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gIGZ1bmN0aW9uIHdhbGsoZGlyOiBzdHJpbmcpIHtcclxuICAgIGZzLnJlYWRkaXIoZGlyLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSwgKGVyciwgZGlyZW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuXHJcbiAgICAgIGxldCBwZW5kaW5nID0gZGlyZW50cy5sZW5ndGg7XHJcbiAgICAgIGlmIChwZW5kaW5nID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpcmVudHMuZm9yRWFjaCgoZGlyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSByZXNvbHZlKGRpciwgZGlyZW50Lm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHJlbFBhdGggPSByZWxhdGl2ZShwdWJsaWNEaXIsIGZ1bGxQYXRoKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcblxyXG4gICAgICAgIGlmIChkaXJlbnQuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgd2FsayhmdWxsUGF0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlbnQuaXNGaWxlKCkpIHtcclxuICAgICAgICAgIHJlc3VsdC5hZGQocmVsUGF0aCk7XHJcbiAgICAgICAgICBpZiAoLS1wZW5kaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICgtLXBlbmRpbmcgPT09IDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB3YWxrKHB1YmxpY0Rpcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50VHlwZShmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBleHQgPSBmaWxlUGF0aC5zcGxpdCgnLicpLnBvcCgpPy50b0xvd2VyQ2FzZSgpIHx8ICcnO1xyXG4gIGNvbnN0IHR5cGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgJ2Nzcyc6ICd0ZXh0L2NzcycsXHJcbiAgICAnanMnOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXHJcbiAgICAnanNvbic6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICdwbmcnOiAnaW1hZ2UvcG5nJyxcclxuICAgICdqcGcnOiAnaW1hZ2UvanBlZycsXHJcbiAgICAnanBlZyc6ICdpbWFnZS9qcGVnJyxcclxuICAgICdnaWYnOiAnaW1hZ2UvZ2lmJyxcclxuICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCcsXHJcbiAgICAnd29mZic6ICdmb250L3dvZmYnLFxyXG4gICAgJ3dvZmYyJzogJ2ZvbnQvd29mZjInLFxyXG4gICAgJ3R0Zic6ICdmb250L3R0ZicsXHJcbiAgICAnZW90JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcclxuICAgICdpY28nOiAnaW1hZ2UveC1pY29uJyxcclxuICAgICd3YXNtJzogJ2FwcGxpY2F0aW9uL3dhc20nXHJcbiAgfTtcclxuICByZXR1cm4gdHlwZXNbZXh0XSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDmoIflh4bljJbot6/lvoTvvIznoa7kv53ku6UgJy8nIOe7k+WwvlxyXG4gKi9cclxuZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiByZXNvbHZlKHApLnJlcGxhY2UoL1xcXFwvZywgJy8nKSArICcvJztcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7uumAmueUqOS4remXtOS7tu+8muS8mOWFiOS9v+eUqCBwdWJsaWMg6LWE5rqQ77yM5Zue6YCA5YiwIHNvdXJjZUFzc2V0c1BhdGhcclxuICog5a+55qCHIGNyZWF0ZVN0YXRpY01pZGRsZXdhcmUg6aOO5qC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXhDYWRBc3NldHNNaWRkbGV3YXJlKFxyXG4gIHJvb3Q6IHN0cmluZyxcclxuICBvcHRpb25zOiBSZXF1aXJlZDxNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnM+LFxyXG4gIHB1YmxpY0Rpcjogc3RyaW5nLFxyXG4gIGxvZ2dlcj86IGFueVxyXG4pIHtcclxuICBjb25zdCB7IG91dHB1dERpciwgaXNXYXNtU3QgPSBmYWxzZSB9ID0gb3B0aW9ucztcclxuICAvLyDinIUgMS4g6KeE6IyD5YyW6Lev5b6EXHJcbiAgY29uc3QgYmFzZVBhdGggPSBgLyR7b3V0cHV0RGlyLnJlcGxhY2UoL15cXC8rLywgJycpfWA7IC8vICcvbXhjYWRBcHBBc3NldHMnXHJcbiAgY29uc3Qgc291cmNlQXNzZXRzUm9vdCA9IG5vcm1hbGl6ZVBhdGgocm9vdCk7XHJcblxyXG4gIHJldHVybiBhc3luYyAocmVxOiBhbnksIHJlczogYW55LCBuZXh0OiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAvLyDinIUgMi4g5Z+65pys5qCh6aqMXHJcbiAgICBpZiAoIXJlcS51cmwgfHwgdHlwZW9mIHJlcS51cmwgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4pyFIDMuIOiuvue9ruWuieWFqOWktO+8iOmdniBpc1dhc21TdCDmqKHlvI/vvIlcclxuICAgIGlmICghaXNXYXNtU3QpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcignQ3Jvc3MtT3JpZ2luLU9wZW5lci1Qb2xpY3knLCAnc2FtZS1vcmlnaW4nKTtcclxuICAgICAgcmVzLnNldEhlYWRlcignQ3Jvc3MtT3JpZ2luLUVtYmVkZGVyLVBvbGljeScsICdyZXF1aXJlLWNvcnAnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDinIUgNC4g6Kej5p6QIFVSTCDot6/lvoTvvIjljrsgcXVlcnnvvIzop6PnoIHvvIlcclxuICAgIGNvbnN0IHVybFBhdGggPSByZXEudXJsLnNwbGl0KCc/JylbMF07XHJcbiAgICBsZXQgZmlsZVBhdGghOiBzdHJpbmc7XHJcbiAgICBsZXQgZmlsZU5hbWUhOiBzdHJpbmc7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGVjb2RlZFBhdGggPSBkZWNvZGVVUklDb21wb25lbnQodXJsUGF0aCk7XHJcbiAgICAgIC8vIOinhOiMg+WMlui3r+W+hO+8jOmYsuatoiAuLi8uLi8g6LaK5p2DXHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gZGVjb2RlZFBhdGgucmVwbGFjZSgvXlsvXFxcXF0rLywgJycpO1xyXG5cclxuICAgICAgLy8g4pyFIDUuIOS8mOWFiO+8muajgOafpSBwdWJsaWMvJHtvdXRwdXREaXJ9IOebruW9lVxyXG4gICAgICBjb25zdCBwdWJsaWNGaWxlUGF0aCA9IGpvaW4ocHVibGljRGlyLCBub3JtYWxpemVkUGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGF0ID0gYXdhaXQgZnMucHJvbWlzZXMuc3RhdChwdWJsaWNGaWxlUGF0aCk7XHJcbiAgICAgICAgaWYgKHN0YXQuaXNGaWxlKCkpIHtcclxuICAgICAgICAgIGZpbGVQYXRoID0gcHVibGljRmlsZVBhdGg7XHJcbiAgICAgICAgICBmaWxlTmFtZSA9IGJhc2VuYW1lKG5vcm1hbGl6ZWRQYXRoKTtcclxuICAgICAgICAgIHJldHVybiBzZXJ2ZUZpbGUoZmlsZVBhdGgsIGZpbGVOYW1lLCByZXMsIGxvZ2dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBwdWJsaWMg5Lit5rKh5pyJ77yM57un57ut5p+l5om+IHNvdXJjZUFzc2V0c1BhdGhcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g4pyFIDYuIGZhbGxiYWNr77ya5p+l5om+IHNvdXJjZUFzc2V0c1BhdGhcclxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzb2x2ZVNhZmVQYXRoKGRlY29kZWRQYXRoLCBzb3VyY2VBc3NldHNSb290LCBiYXNlUGF0aCk7XHJcbiAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlc3VsdC5zdGF0dXNDb2RlIHx8IDQwMDtcclxuICAgICAgICByZXR1cm4gcmVzLmVuZChyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZmlsZVBhdGgpIGZpbGVQYXRoID0gcmVzdWx0LmZpbGVQYXRoO1xyXG4gICAgICBpZiAocmVzdWx0LmZpbGVOYW1lKSBmaWxlTmFtZSA9IHJlc3VsdC5maWxlTmFtZTtcclxuXHJcbiAgICAgIC8vIOKchSA3LiDlsJ3or5XnlLEgaGFuZGxlQ29uZmlnUmVxdWVzdCDlpITnkIbvvIjlpoLms6jlhaXphY3nva7vvIlcclxuICAgICAgY29uc3QgaGFuZGxlZCA9IGF3YWl0IGhhbmRsZUNvbmZpZ1JlcXVlc3QoXHJcbiAgICAgICAgZmlsZVBhdGgsXHJcbiAgICAgICAgZmlsZU5hbWUsXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICByZXMsXHJcbiAgICAgICAgbG9nZ2VyXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChoYW5kbGVkKSByZXR1cm47XHJcblxyXG4gICAgICAvLyDinIUgOC4g56Gu5L+d5piv5paH5Lu2XHJcbiAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBmcy5wcm9taXNlcy5zdGF0KGZpbGVQYXRoKTtcclxuICAgICAgaWYgKCFzdGF0LmlzRmlsZSgpKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5lbmQoJ0ZpbGUgbm90IGZvdW5kJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzZXJ2ZUZpbGUoZmlsZVBhdGgsIGZpbGVOYW1lLCByZXMsIGxvZ2dlcik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbG9nZ2VyPy53YXJuPy4oYFtNeENhZEFzc2V0c10gU2VydmUgZmFpbGVkIGZvciAke3JlcS51cmx9OiAkeyhlcnIgYXMgRXJyb3IpLm1lc3NhZ2V9YCk7XHJcbiAgICAgIGlmIChyZXMuaGVhZGVyc1NlbnQpIHJldHVybjtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XHJcbiAgICAgIHJlcy5lbmQoJ0ZpbGUgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwgeijheaWh+S7tuWTjeW6lOmAu+i+ke+8iOa1geW8j+S8oOi+k++8iVxyXG4gKi9cclxuZnVuY3Rpb24gc2VydmVGaWxlKGZpbGVQYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHJlczogYW55LCBsb2dnZXI/OiBhbnkpIHtcclxuICBjb25zdCBzdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGVQYXRoKTtcclxuXHJcbiAgc3RyZWFtLm9uKCdlcnJvcicsIChlcnI6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbikgPT4ge1xyXG4gICAgaWYgKHJlcy5oZWFkZXJzU2VudCkgcmV0dXJuO1xyXG4gICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJyB8fCBlcnIuY29kZSA9PT0gJ0VBQ0NFUycpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXNDb2RlID09PSAyMDAgPyByZXMuZW5kKCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBsb2dnZXI/LmVycm9yPy4oYFtNeENhZEFzc2V0c10gUmVhZCBlcnJvcjogJHtlcnIubWVzc2FnZX1gLCBlcnIpO1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICByZXMuZW5kKCdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InKTtcclxuICB9KTtcclxuXHJcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgZ2V0Q29udGVudFR5cGUoZmlsZU5hbWUpKTtcclxuICByZXMuc2V0SGVhZGVyKCdYLUNvbnRlbnQtVHlwZS1PcHRpb25zJywgJ25vc25pZmYnKTtcclxuXHJcbiAgc3RyZWFtLnBpcGUocmVzKTtcclxufSJdLCJuYW1lcyI6WyJmcyIsImVyciIsIm5hbWUiLCJzdGF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
