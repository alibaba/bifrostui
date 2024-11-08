# 定制主题

BUI 的样式使用了 [less](https://lesscss.org/) 和 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 相结合做为开发语言，并定义了一系列全局/组件的样式变量，我们称之为Tokens，你可以根据需求调整Tokens的值，实现定制主题的能力。

相比于粗暴的 CSS 样式覆盖，CSS 变量让我们可以更加优雅地自定义组件的样式。

## BUI Tokens 概念

### 层级

BUI的Tokens分为三个层面

1. **BUI内置Tokens：** <br>

   - `defaultLightToken`（默认高亮模式的全局Token）
   - `defaultDarkToken`（默认暗黑模式的全局Token）
   - `dmLightToken`（大麦高亮模式的全局Token）
   - `dmDarkToken`（大麦暗黑模式的全局Token）

2. **响应式Tokens：** <br>
   BUI默认是移动端优先的响应式方案，使用者可以通过 `responsive` 属性自定义响应式Tokens。

3. **组件的Tokens：** <br>
   BUI在实现组件时，允许使用者通过 `token` 属性能够比较灵活地自定义组件样式。

### 优先级

通常情况下，从局部高于通用的角度来看，三种Tokens的优先级是：<br>
**组件的Tokens > 响应式Tokens > BUI内置Tokens** 。<br>
但对于暗黑模式这种特殊场景，**BUI内置的两种暗黑模式Tokens的优先级要高于响应式Tokens**。

### 渠道差异性

在浏览器环境下，针对不同需求，可以选择不同的定制方式。如：

- 你的主题定制需求比较宽泛，仅需要定制内置Tokens即可完成。
- 你的主题定制需求比较细致，需要将内置Tokens和组件Tokens结合，进行统一定制。
- 你的主题定制需要考虑响应式，且颗粒度比较细，则可能需要将内置Tokens、响应式Tokens和组件Tokens三者结合，进行定制。

在小程序中，由于小程序无法动态插入代码的限制，在定制主题时没有在浏览器中那般灵活。目前小程序支持以下两种方式来修改小程序主题：

- 在样式文件中自行书写对应选择器下的Tokens，全局样式文件的主题配置会被页面级样式文件覆盖。
- 局部主题只能在使用组件时通过内联的方式传入css变量。

## 内置Tokens有哪些

在定制之前，需要了解BUI内置Tokens有哪些，以便于我们对BUI的主题有个整体的认识，这里只默认的高亮和暗黑模式下的内置Tokens，大麦主题的高亮和暗黑模式主题变量设计基于默认Tokens，不在此处赘述，有兴趣的开发者可查看`@bifrostui/styles`中的`dm-light.less`和`dm-dark.less`文件。

### 主题色彩-基础变量

| 内置Token变量名          | 默认值            | 说明        |
| ------------------------ | ----------------- | ----------- |
| --bui-color-red          | #ff335c           | 品牌红      |
| --bui-color-red-light    | #ffebef           | 品牌红-浅亮 |
| --bui-color-pink         | #dd10f2           | 明亮粉      |
| --bui-color-pink-light   | #fce7fe           | 明亮粉-浅亮 |
| --bui-color-orange       | #ff8533           | 活力橙      |
| --bui-color-orange-light | #fff0e5           | 活力橙-浅亮 |
| --bui-color-green        | #00d68f           | 亲和绿      |
| --bui-color-green-light  | #dcf9f0           | 亲和绿-浅亮 |
| --bui-color-purple       | #8b52ff           | 神秘紫      |
| --bui-color-purple-light | #f2ebff           | 神秘紫-浅亮 |
| --bui-color-blue         | #148aff           | 宁静蓝      |
| --bui-color-blue-light   | #e1f0ff           | 宁静蓝-浅亮 |
| --bui-color-gray         | #8896b1           | 中性灰      |
| --bui-color-gray-light   | #f3f5f8           | 中性灰-浅亮 |
| --bui-color-black        | #000              | 黑色        |
| --bui-color-white        | #fff              | 白色        |
| --bui-color-vip          | #ff866e           | 会员橙      |
| --bui-color-neutral-0    | --bui-color-black | 中性色-0    |
| --bui-color-neutral-1    | #2e333e           | 中性色-1    |
| --bui-color-neutral-2    | #5f6672           | 中性色-2    |
| --bui-color-neutral-3    | #959aa5           | 中性色-3    |
| --bui-color-neutral-4    | #ced1d6           | 中性色-4    |
| --bui-color-neutral-5    | #e9ebef           | 中性色-5    |
| --bui-color-neutral-6    | #f5f6f8           | 中性色-6    |
| --bui-color-neutral-7    | --bui-color-white | 中性色-7    |

### 主题色彩-语义化变量

| 内置Token变量名           | 默认值                   | 说明        |
| ------------------------- | ------------------------ | ----------- |
| --bui-color-primary       | --bui-color-red          | 主色调      |
| --bui-color-primary-light | --bui-color-red-light    | 主色调-浅亮 |
| --bui-color-info          | --bui-color-blue         | 信息蓝      |
| --bui-color-info-light    | --bui-color-blue-light   | 信息蓝-浅亮 |
| --bui-color-success       | --bui-color-green        | 成功绿      |
| --bui-color-success-light | --bui-color-green-light  | 成功绿-浅亮 |
| --bui-color-warning       | --bui-color-orange       | 警告橙      |
| --bui-color-warning-light | --bui-color-orange-light | 警告橙-浅亮 |
| --bui-color-danger        | --bui-color-red          | 错误红      |
| --bui-color-danger-light  | --bui-color-red-light    | 错误红-浅亮 |

### 字重变量

| 内置Token变量名          | 默认值 | 说明      |
| ------------------------ | ------ | --------- |
| --bui-font-weight-normal | 400    | 字重-常规 |
| --bui-font-weight-medium | 500    | 字重-中等 |
| --bui-font-weight-bold   | 600    | 字重-加粗 |

### 语义化字体大小变量

| 内置Token变量名    | 默认值 | 说明  |
| ------------------ | ------ | ----- |
| --bui-title-size-1 | 21px   | 标题1 |
| --bui-title-size-2 | 18px   | 标题2 |
| --bui-title-size-3 | 16px   | 标题3 |
| --bui-title-size-4 | 15px   | 标题4 |
| --bui-text-size-1  | 14px   | 文案1 |
| --bui-text-size-2  | 13px   | 文案2 |
| --bui-text-size-3  | 12px   | 文案3 |
| --bui-text-size-4  | 11px   | 文案4 |
| --bui-text-size-5  | 10px   | 文案5 |

### 前景色-语义变量

通常用于文字，其中`--bui-color-fg-default`是最通用的色彩，比如标题和一级信息

| 内置Token变量名         | 默认值                | 说明               |
| ----------------------- | --------------------- | ------------------ |
| --bui-color-fg-default  | --bui-color-neutral-1 | 标题、一级信息     |
| --bui-color-fg-muted    | --bui-color-neutral-2 | 次级、补充说明信息 |
| --bui-color-fg-subtle   | --bui-color-neutral-3 | 辅助、弱化的信息   |
| --bui-color-fg-disabled | --bui-color-neutral-4 | 失效、不可用       |

### 背景色-语义变量

用于定义通用背景色

| 内置Token变量名        | 默认值                | 说明       |
| ---------------------- | --------------------- | ---------- |
| --bui-color-bg-default | --bui-color-neutral-6 | 默认背景色 |
| --bui-color-bg-view    | --bui-color-neutral-7 | 视图背景色 |

### 带透明度的色彩

| 内置Token变量名               | 默认值          | 说明      |
| ----------------------------- | --------------- | --------- |
| --bui-color-bg-view-opacity-9 | fade(#fff, 90%) | 半透明90% |
| --bui-color-bg-view-opacity-7 | fade(#fff, 70%) | 半透明70% |
| --bui-color-bg-view-opacity-5 | fade(#fff, 50%) | 半透明50% |
| --bui-color-bg-view-opacity-3 | fade(#fff, 30%) | 半透明30% |
| --bui-color-bg-view-opacity-1 | fade(#fff, 10%) | 半透明10% |

### 分割线或边框色彩

| 内置Token变量名            | 默认值                | 说明         |
| -------------------------- | --------------------- | ------------ |
| --bui-color-border-default | --bui-color-neutral-5 | 默认边框色   |
| --bui-color-border-primary | fade(#ff335c, 40%)    | 主色调边框色 |
| --bui-color-border-info    | fade(#148aff, 40%)    | 信息蓝边框色 |
| --bui-color-border-success | fade(#00d68f, 40%)    | 成功绿边框色 |
| --bui-color-border-warning | fade(#ff8533, 40%)    | 警告橙边框色 |
| --bui-color-border-danger  | fade(#ff335c, 40%)    | 错误红边框色 |
| --bui-color-border-gray    | fade(#8896b1, 40%)    | 灰色边框     |

### 渐变主题色

| 内置Token变量名             | 默认值             | 说明            |
| --------------------------- | ------------------ | --------------- |
| --bui-color-primary-start   | #ef16b9            | 主色调渐变-开始 |
| --bui-color-primary-end     | --bui-color-red    | 主色调渐变-结束 |
| --bui-color-secondary-start | #f32adf            | 明亮粉渐变-开始 |
| --bui-color-secondary-end   | --bui-color-pink   | 明亮粉渐变-结束 |
| --bui-color-info-start      | #33a7ff            | 信息蓝渐变-开始 |
| --bui-color-info-end        | --bui-color-blue   | 信息蓝渐变-结束 |
| --bui-color-warning-start   | #ffad33            | 警告橙渐变-开始 |
| --bui-color-warning-end     | --bui-color-orange | 警告橙渐变-结束 |
| --bui-color-success-start   | #00ebac            | 成功绿渐变-开始 |
| --bui-color-success-end     | --bui-color-green  | 成功绿渐变-结束 |
| --bui-color-danger-start    | #ef16b9            | 错误红渐变-开始 |
| --bui-color-danger-end      | --bui-color-red    | 错误红渐变-结束 |
| --bui-color-vip-start       | #ffd4a6            | 会员橙渐变-开始 |
| --bui-color-vip-end         | #ffbeae            | 会员橙渐变-结束 |

### 形状变量(圆角)

| 内置Token变量名            | 默认值 | 说明                                            |
| -------------------------- | ------ | ----------------------------------------------- |
| --bui-shape-radius-popover | 18px   | 圆角-页面级浮层                                 |
| --bui-shape-radius-drawer  | 12px   | 圆角-页面级抽屉                                 |
| --bui-shape-radius-card    | 9px    | 圆角-卡片、普通视图等，常用于信息密度较低的视图 |
| --bui-shape-radius-default | 6px    | 圆角-独立海报、卡片等，常用于信息密度较高的视图 |
| --bui-shape-radius-poster  | 4px    | 圆角-容器内海报、卡片等                         |
| --bui-shape-radius-label   | 3px    | 圆角-标签                                       |

### 空间变量(间距、行高、层级)

| 内置Token变量名              | 默认值 | 说明                     |
| ---------------------------- | ------ | ------------------------ |
| --bui-spacing-xl             | 15px   | 间距-超大                |
| --bui-spacing-lg             | 12px   | 间距-较大                |
| --bui-spacing-md             | 9px    | 间距-中等                |
| --bui-spacing-sm             | 6px    | 间距-较小                |
| --bui-spacing-xs             | 4px    | 间距-超小                |
| --bui-line-height            | 1.5    | 行高                     |
| --bui-z-index-dropdown       | 1000   | 层级-下拉菜单            |
| --bui-z-index-affix          | 1100   | 层级-吸顶、fixed固定元素 |
| --bui-z-index-modal-backdrop | 1200   | 层级-弹窗背景层          |
| --bui-z-index-modal          | 1200   | 层级-弹窗                |
| --bui-z-index-popover        | 1300   | 层级-气泡                |
| --bui-z-index-tooltip        | 1400   | 层级-提示工具            |
| --bui-z-index-toast          | 1500   | 层级-轻提示              |

### 字体

| 内置Token变量名   | 默认值                                                                                                                                     | 说明        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| --bui-font-family | 'PingFang SC', 'Chinese Quote', 'Segoe UI', roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', helvetica, arial，sans-serif; | BUI默认字体 |

## 暗黑模式下特有的Tokens

暗黑模式会使用以下Tokens复写挂载在根节点下的同名CSS变量，以达到暗黑模式下的样式统一。

| 内置Token变量名               | 默认值             | 说明               |
| ----------------------------- | ------------------ | ------------------ |
| --bui-color-fg-default        | #f0f6fc            | 标题、一级信息     |
| --bui-color-fg-muted          | #8b949e            | 次级、补充说明信息 |
| --bui-color-fg-subtle         | #484f58            | 辅助、弱化的信息   |
| --bui-color-fg-disabled       | #484f58            | 失效、不可用       |
| --bui-color-bg-default        | #010409            | 默认背景色         |
| --bui-color-bg-view           | #161b22            | 视图背景色         |
| --bui-color-bg-view-opacity-9 | fade(#161b22, 90%) | 半透明90%          |
| --bui-color-bg-view-opacity-7 | fade(#161b22, 70%) | 半透明70%          |
| --bui-color-bg-view-opacity-5 | fade(#161b22, 50%) | 半透明50%          |
| --bui-color-bg-view-opacity-3 | fade(#161b22, 30%) | 半透明30%          |
| --bui-color-bg-view-opacity-1 | fade(#161b22, 10%) | 半透明10%          |
| --bui-color-border-default    | #30363d            | 分割线、边框       |

## 如何定制

### 浏览器环境

以比较复杂的场景为例：你的主题定制需要考虑响应式，且颗粒度比较细，则需要将内置Tokens、响应式Tokens和组件Tokens三者结合，进行定制。

1. 首先将需要修改的[内置Tokens](#内置tokens有哪些)根据需求进行配置，并通过`ThemeProvider`组件的`defaultLightToken`或`defaultDarkToken`属性传递给BUI。
2. 若内置Tokens无法满足需求，可以查看组件支持的Tokens，如[Button支持的可定制Tokens](/cores/button#样式变量)，并通过`ThemeProvider`组件的`token`属性传递给BUI。
3. 若需要考虑响应式，可以将上述设计好的Tokens通过`ThemeProvider`组件的`responsive`属性传递给BUI，代码演示可参考[主题定制](/cores/theme-provider#主题定制)。

### 小程序

小程序环境下，主题定制没有浏览器环境那么灵活，详细方案可查看[小程序主题定制使用方式](/cores/theme-provider#小程序)。

### 局部主题

BUI 提供了两种方式的主题定制方案。

1. 通过嵌套的`ThemeProvider`组件进行局部主题定制，可查看[局部主题定制](/cores/theme-provider#局部主题嵌套主题)
2. 组件级主题定制，可使用各个组件提供的Tokens给指定组件定制，代码如下：

```jsx | pure
<Button
  style={{
    '--border-radius': '2px',
  }}
/>
```

## 响应式

响应式界面就是设计一个页面能够适应不同的设备，响应式设计利用媒体查询等技术实现不同设备或窗口下的样式适配，也就是说它会根据你使用的不同设备展示不同的页面排版给用户。

BUI 根据html5的媒体查询技术，获取屏幕宽度，然后利用css，在不同的宽度下使用不同的css变量来定义Design Tokens。

BUI 采用比较流行的移动优先响应式设计方案，然后在此基础上再去根据pc端的情况适配相应的样式。

### 屏幕断点

所谓的断点，就是指页面布局改变的临界点。BUI 定义了 `xs`、`sm`、`md`、`lg`、`xl` 5个响应式屏幕断点，其对应的值如下表：

| 断点类型                       | 规格 | 屏幕尺寸（临界值） |
| ------------------------------ | ---- | ------------------ |
| X-Small(超小，一般是手机)      | xs   | < 576px            |
| Small （小，平板或者老笔记本） | sm   | ≥ 576px            |
| Medium （中，窄屏电脑）        | md   | ≥ 768px            |
| Large （大，宽屏电脑）         | lg   | ≥ 992px            |
| Extra large （超大，宽屏电脑） | xl   | ≥ 1200px           |

在上述5种断点的基础上，结合移动优先的响应式设计，主要基于[媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)的最小屏幕宽度（min-width），即可实现随着视口的变化按照自定义的Design Tokens来改变组件的展示形式。

### 自定义响应式屏幕断点

为了满足使用者在业务仓库中定义的响应式屏幕断点可能与BUI定义的断点不一致的情况，从而导致在响应式场景下的主题定制没有那么丝滑效果，BUI 提供了自定义响应式屏幕断点的能力，可通过 `mountResponsiveTokens` 函数可实现自定义响应式屏幕断点下的主题定制能力。演示代码如下：

```jsx | pure
import { mountResponsiveTokens } from '@bifrostui/react';

mountResponsiveTokens({
  responsive: {
    xs: {
      '--bui-button-border-radius': '2px',
    },
    sm: {
      '--bui-button-border-radius': '6px',
    },
    md: {
      '--bui-button-border-radius': '10px',
    },
    lg: {
      '--bui-button-border-radius': '14px',
    },
    xl: {
      '--bui-button-border-radius': '16px',
    },
  },
  breakpoints: {
    xs: '499.98px',
    sm: '500px',
    md: '800px',
    lg: '1000px',
    xl: '1400px',
  },
});
```
