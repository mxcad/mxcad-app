[mxcad-app API 文档](../README.md) / MxCADView

# Class: MxCADView

## Table of contents

### Constructors

- [constructor](MxCADView.md#constructor)

### Properties

- [mxcad](MxCADView.md#mxcad)

### Accessors

- [config](MxCADView.md#config)

### Methods

- [create](MxCADView.md#create)
- [getRootContainer](MxCADView.md#getrootcontainer)
- [getVueApp](MxCADView.md#getvueapp)

## Constructors

### constructor

• **new MxCADView**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `MxCADViewConfig` |

#### Defined in

mxcad_app_lib/mxcad_view.ts:10

## Properties

### mxcad

• **mxcad**: `McObject`

#### Defined in

mxcad_app_lib/mxcad_view.ts:16

## Accessors

### config

• `get` **config**(): `MxCADViewConfig`

#### Returns

`MxCADViewConfig`

#### Defined in

mxcad_app_lib/mxcad_view.ts:47

## Methods

### create

▸ **create**(`rootContainer?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootContainer?` | `string` \| [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement ) |

#### Returns

`boolean`

#### Defined in

mxcad_app_lib/mxcad_view.ts:18

___

### getRootContainer

▸ **getRootContainer**(): `undefined` \| [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement )

#### Returns

`undefined` \| [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement )

#### Defined in

mxcad_app_lib/mxcad_view.ts:43

___

### getVueApp

▸ **getVueApp**(): `undefined` \| `App`\<[`Element`]( https://developer.mozilla.org/docs/Web/API/Element )\>

#### Returns

`undefined` \| `App`\<[`Element`]( https://developer.mozilla.org/docs/Web/API/Element )\>

#### Defined in

mxcad_app_lib/mxcad_view.ts:39
