# Design Tokens

> Click [Customize](/guide/theme-designer)

The styles of BUI are developed using a combination of [less](https://lesscss.org/) and [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), and a series of global/component style variables are defined, which we refer to as Tokens. You can adjust the values of these Tokens as needed to achieve the capability of customizing themes.

Compared to rough CSS style overrides, CSS variables allow for more elegant customization of component styles.

## BUI Tokens Concept

### Levels

BUI Tokens are divided into three levels:

1. **Built-in BUI Tokens:** <br>
   - `defaultLightToken` (global token for default light mode)
   - `defaultDarkToken` (global token for default dark mode)
   - `dmLightToken` (global token for DaMai light mode)
   - `dmDarkToken` (global token for DaMai dark mode)

2. **Responsive Tokens:** <br>
   BUI defaults to a mobile-first responsive scheme. Users can customize responsive Tokens via the `responsive` property.

3. **Component Tokens:** <br>
   When implementing components, BUI allows users to flexibly customize component styles through the `token` property.

### Priority

Generally, from a local over universal point of view, the priority of the three types of Tokens is:<br>
**Component Tokens > Responsive Tokens > Built-in BUI Tokens**.<br>
However, for special scenarios like dark mode, **the priority of the two dark mode BUI built-in Tokens is higher than the responsive Tokens**.

### Variability Across Channels

In the browser environment, different customization methods can be chosen according to various needs, such as:

- If your theme customization needs are broad, simply customizing the built-in Tokens will suffice.
- If your theme customization needs are detailed, you'll need to combine built-in Tokens with component Tokens for unified customization.
- If your theme customization needs to consider responsiveness and has a finer granularity, you may need to combine built-in Tokens, responsive Tokens, and component Tokens for customization.

In mini programs, due to the limitation that dynamic code insertion is not possible, theme customization is not as flexible as in browsers. Currently, mini programs support the following two methods to modify themes:

- Write Tokens under the corresponding selectors in the style file; global style file theme configurations will be overridden by page-level style files.
- Local themes can only be passed inline via CSS variables when using components.

## Built-in Tokens Overview

Before customizing, it is essential to understand what built-in Tokens BUI provides. This will give an overall understanding of BUI's theme. Here, only the default light and dark mode built-in Tokens are listed. The theme variable design for DaMai's light and dark mode is based on the default Tokens. Interested developers can check the `dm-light.less` and `dm-dark.less` files in `@bifrostui/styles`.

### Theme Colors - Basic Variables

| Built-in Token Variable Name | Default Value     | Description               |
| ---------------------------- | ----------------- | ------------------------- |
| --bui-color-red              | #ff335c           | Brand Red                 |
| --bui-color-red-light        | #ffebef           | Brand Red - Light         |
| --bui-color-pink             | #dd10f2           | Bright Pink               |
| --bui-color-pink-light       | #fce7fe           | Bright Pink - Light       |
| --bui-color-orange           | #ff8533           | Vibrant Orange            |
| --bui-color-orange-light     | #fff0e5           | Vibrant Orange - Light    |
| --bui-color-green            | #00d68f           | Amiable Green             |
| --bui-color-green-light      | #dcf9f0           | Amiable Green - Light     |
| --bui-color-purple           | #8b52ff           | Mysterious Purple         |
| --bui-color-purple-light     | #f2ebff           | Mysterious Purple - Light |
| --bui-color-blue             | #148aff           | Calm Blue                 |
| --bui-color-blue-light       | #e1f0ff           | Calm Blue - Light         |
| --bui-color-gray             | #8896b1           | Neutral Gray              |
| --bui-color-gray-light       | #f7f9fc           | Neutral Gray - Light      |
| --bui-color-black            | #000              | Black                     |
| --bui-color-white            | #fff              | White                     |
| --bui-color-vip              | #ff866e           | VIP Orange                |
| --bui-color-neutral-0        | --bui-color-black | Neutral Color - 0         |
| --bui-color-neutral-1        | #030b1a           | Neutral Color - 1         |
| --bui-color-neutral-2        | #444b5b           | Neutral Color - 2         |
| --bui-color-neutral-3        | #8b93a5           | Neutral Color - 3         |
| --bui-color-neutral-4        | #bfc4cf           | Neutral Color - 4         |
| --bui-color-neutral-5        | #e9ebef           | Neutral Color - 5         |
| --bui-color-neutral-6        | #f7f9fc           | Neutral Color - 6         |
| --bui-color-neutral-7        | --bui-color-white | Neutral Color - 7         |

### Theme Colors - Semantic Variables

| Built-in Token Variable Name | Default Value            | Description              |
| ---------------------------- | ------------------------ | ------------------------ |
| --bui-color-primary          | --bui-color-red          | Primary Color            |
| --bui-color-primary-light    | --bui-color-red-light    | Primary Color - Light    |
| --bui-color-info             | --bui-color-blue         | Information Blue         |
| --bui-color-info-light       | --bui-color-blue-light   | Information Blue - Light |
| --bui-color-success          | --bui-color-green        | Success Green            |
| --bui-color-success-light    | --bui-color-green-light  | Success Green - Light    |
| --bui-color-warning          | --bui-color-orange       | Warning Orange           |
| --bui-color-warning-light    | --bui-color-orange-light | Warning Orange - Light   |
| --bui-color-danger           | --bui-color-red          | Error Red                |
| --bui-color-danger-light     | --bui-color-red-light    | Error Red - Light        |

### Font Weight Variables

| Built-in Token Variable Name | Default Value | Description             |
| ---------------------------- | ------------- | ----------------------- |
| --bui-font-weight-normal     | 400           | Font Weight - Normal    |
| --bui-font-weight-medium     | 500           | Font Weight - Medium    |
| --bui-font-weight-semibold   | 600           | Font Weight - Semi-Bold |
| --bui-font-weight-bold       | 700           | Font Weight - Bold      |

### Font Size Variables Basic Token

| Built-in Token Variable Name | Default Value |
| ---------------------------- | ------------- |
| --bui-font-size-xs1          | 8px           |
| --bui-font-size-xs2          | 9px           |
| --bui-font-size-sm1          | 10px          |
| --bui-font-size-sm2          | 11px          |
| --bui-font-size-sm3          | 12px          |
| --bui-font-size-sm4          | 13px          |
| --bui-font-size-md1          | 14px          |
| --bui-font-size-md2          | 15px          |
| --bui-font-size-md3          | 16px          |
| --bui-font-size-md4          | 18px          |
| --bui-font-size-lg1          | 20px          |
| --bui-font-size-lg2          | 22px          |
| --bui-font-size-lg3          | 24px          |
| --bui-font-size-lg4          | 26px          |

### Semantic Font Size Variables

| Built-in Token Variable Name | Default Value       | Description |
| ---------------------------- | ------------------- | ----------- |
| --bui-title-size-1           | 21px                | Title 1     |
| --bui-title-size-2           | --bui-font-size-md4 | Title 2     |
| --bui-title-size-3           | --bui-font-size-md3 | Title 3     |
| --bui-title-size-4           | --bui-font-size-md2 | Title 4     |
| --bui-text-size-1            | --bui-font-size-md1 | Text 1      |
| --bui-text-size-2            | --bui-font-size-sm4 | Text 2      |
| --bui-text-size-3            | --bui-font-size-sm3 | Text 3      |
| --bui-text-size-4            | --bui-font-size-sm2 | Text 4      |
| --bui-text-size-5            | --bui-font-size-sm1 | Text 5      |

### Foreground Color - Semantic Variables

Generally used for text, where `--bui-color-fg-default` is the most commonly used color, such as titles and primary information

| Built-in Token Variable Name | Default Value         | Description                          |
| ---------------------------- | --------------------- | ------------------------------------ |
| --bui-color-fg-default       | --bui-color-neutral-1 | Title, Primary Information           |
| --bui-color-fg-muted         | --bui-color-neutral-2 | Secondary, Supplementary Information |
| --bui-color-fg-subtle        | --bui-color-neutral-3 | Auxiliary, Weakened Information      |
| --bui-color-fg-disabled      | --bui-color-neutral-4 | Disabled, Unavailable                |

### Background Color - Semantic Variables

Used to define general background color

| Built-in Token Variable Name | Default Value         | Description              |
| ---------------------------- | --------------------- | ------------------------ |
| --bui-color-bg-default       | --bui-color-neutral-6 | Default Background Color |
| --bui-color-bg-view          | --bui-color-neutral-7 | View Background Color    |

### Colors with Transparency

| Built-in Token Variable Name | Default Value         | Description              |
| ---------------------------- | --------------------- | ------------------------ |
| --bui-color-bg-popover       | --bui-color-neutral-7 | Bubble Background Color  |
| --bui-color-bg-alpha-light-9 | fade(#fff, 90%)       | Light - 90% Transparency |
| --bui-color-bg-alpha-light-7 | fade(#fff, 70%)       | Light - 70% Transparency |
| --bui-color-bg-alpha-light-5 | fade(#fff, 50%)       | Light - 50% Transparency |
| --bui-color-bg-alpha-light-3 | fade(#fff, 30%)       | Light - 30% Transparency |
| --bui-color-bg-alpha-light-1 | fade(#fff, 10%)       | Light - 10% Transparency |
| --bui-color-bg-alpha-dark-9  | fade(#000, 90%)       | Dark - 90% Transparency  |
| --bui-color-bg-alpha-dark-7  | fade(#000, 70%)       | Dark - 70% Transparency  |
| --bui-color-bg-alpha-dark-5  | fade(#000, 50%)       | Dark - 50% Transparency  |
| --bui-color-bg-alpha-dark-3  | fade(#000, 30%)       | Dark - 30% Transparency  |
| --bui-color-bg-alpha-dark-1  | fade(#000, 10%)       | Dark - 10% Transparency  |

### Divider or Border Colors

| Built-in Token Variable Name | Default Value         | Description             |
| ---------------------------- | --------------------- | ----------------------- |
| --bui-color-border-default   | --bui-color-neutral-5 | Default Border Color    |
| --bui-color-border-primary   | fade(#ff335c, 40%)    | Primary Color Border    |
| --bui-color-border-info      | fade(#148aff, 40%)    | Information Blue Border |
| --bui-color-border-success   | fade(#00d68f, 40%)    | Success Green Border    |
| --bui-color-border-warning   | fade(#ff8533, 40%)    | Warning Orange Border   |
| --bui-color-border-danger    | fade(#ff335c, 40%)    | Error Red Border        |
| --bui-color-border-gray      | fade(#8896b1, 40%)    | Gray Border             |

### Gradient Theme Colors

| Built-in Token Variable Name | Default Value      | Description                       |
| ---------------------------- | ------------------ | --------------------------------- |
| --bui-color-primary-start    | #ef16b9            | Primary Gradient - Start          |
| --bui-color-primary-end      | --bui-color-red    | Primary Gradient - End            |
| --bui-color-secondary-start  | #f32adf            | Bright Pink Gradient - Start      |
| --bui-color-secondary-end    | --bui-color-pink   | Bright Pink Gradient - End        |
| --bui-color-info-start       | #33a7ff            | Information Blue Gradient - Start |
| --bui-color-info-end         | --bui-color-blue   | Information Blue Gradient - End   |
| --bui-color-warning-start    | #ffad33            | Warning Orange Gradient - Start   |
| --bui-color-warning-end      | --bui-color-orange | Warning Orange Gradient - End     |
| --bui-color-success-start    | #00ebac            | Success Green Gradient - Start    |
| --bui-color-success-end      | --bui-color-green  | Success Green Gradient - End      |
| --bui-color-danger-start     | #ef16b9            | Error Red Gradient - Start        |
| --bui-color-danger-end       | --bui-color-red    | Error Red Gradient - End          |
| --bui-color-vip-start        | #ffd4a6            | VIP Orange Gradient - Start       |
| --bui-color-vip-end          | #ffbeae            | VIP Orange Gradient - End         |

### Shape Variables (Border Radius) Basic Token

| Built-in Token Variable Name | Default Value |
| ---------------------------- | ------------- |
| --bui-radius-circular        | 10000px       |
| --bui-radius-8               | 24px          |
| --bui-radius-7               | 18px          |
| --bui-radius-6               | 15px          |
| --bui-radius-5               | 12px          |
| --bui-radius-4               | 9px           |
| --bui-radius-3               | 6px           |
| --bui-radius-2               | 4px           |
| --bui-radius-1               | 3px           |
| --bui-radius-none            | 0px           |

### Shape Variables (Border Radius)

| Built-in Token Variable Name | Default Value  | Description                                |
| ---------------------------- | -------------- | ------------------------------------------ |
| --bui-shape-radius-popover   | --bui-radius-7 | Border Radius - Page Layer                 |
| --bui-shape-radius-drawer    | --bui-radius-5 | Border Radius - Page Drawer                |
| --bui-shape-radius-card      | --bui-radius-4 | Border Radius - Cards & Normal Views       |
| --bui-shape-radius-default   | --bui-radius-3 | Border Radius - Independent Posters, Cards |
| --bui-shape-radius-poster    | --bui-radius-2 | Border Radius - Container Posters, Cards   |
| --bui-shape-radius-label     | --bui-radius-1 | Border Radius - Labels                     |

### Space Variables (Spacing, Line Height, Z-Index) Basic Token

| Built-in Token Variable Name | Default Value |
| ---------------------------- | ------------- |
| --bui-spacing-1              | 1px           |
| --bui-spacing-2              | 2px           |
| --bui-spacing-3              | 3px           |
| --bui-spacing-4              | 4px           |
| --bui-spacing-5              | 6px           |
| --bui-spacing-6              | 9px           |
| --bui-spacing-7              | 12px          |
| --bui-spacing-8              | 15px          |
| --bui-spacing-9              | 18px          |

### Space Variables (Spacing, Line Height, Z-Index)

| Built-in Token Variable Name | Default Value   | Description                     |
| ---------------------------- | --------------- | ------------------------------- |
| --bui-spacing-xl             | --bui-spacing-8 | Spacing - Extra Large           |
| --bui-spacing-lg             | --bui-spacing-7 | Spacing - Large                 |
| --bui-spacing-md             | --bui-spacing-6 | Spacing - Medium                |
| --bui-spacing-sm             | --bui-spacing-5 | Spacing - Small                 |
| --bui-spacing-xs             | --bui-spacing-4 | Spacing - Extra Small           |
| --bui-line-height            | 1.5             | Line Height                     |
| --bui-z-index-dropdown       | 1000            | Z-Index - Dropdown              |
| --bui-z-index-affix          | 1100            | Z-Index - Affix, Fixed Elements |
| --bui-z-index-modal-backdrop | 1200            | Z-Index - Modal Backdrop        |
| --bui-z-index-modal          | 1200            | Z-Index - Modal                 |
| --bui-z-index-popover        | 1300            | Z-Index - Popover               |
| --bui-z-index-tooltip        | 1400            | Z-Index - Tooltip               |
| --bui-z-index-toast          | 1500            | Z-Index - Toast                 |

### Font

| Built-in Token Variable Name | Default Value                                                                                                                              | Description      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| --bui-font-family            | 'PingFang SC', 'Chinese Quote', 'Segoe UI', roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', helvetica, arial, sans-serif; | Default BUI Font |

## Tokens Specific to Dark Mode

In dark mode, the following Tokens are used to overwrite the same name CSS variables mounted at the root node to achieve unified styling in dark mode.

| Built-in Token Variable Name | Default Value      | Description                          |
| ---------------------------- | ------------------ | ------------------------------------ |
| --bui-color-fg-default       | #f0f6fc            | Title, Primary Information           |
| --bui-color-fg-muted         | #8b949e            | Secondary, Supplementary Information |
| --bui-color-fg-subtle        | #484f58            | Auxiliary, Weakened Information      |
| --bui-color-fg-disabled      | #484f58            | Disabled, Unavailable                |
| --bui-color-bg-default       | #010409            | Default Background Color             |
| --bui-color-bg-view          | #161b22            | View Background Color                |
| --bui-color-bg-popover       | fade(#484f58, 70%) | Bubble Background Color              |
| --bui-color-bg-alpha-light-9 | fade(#161b22, 90%) | Light - 90% Transparency             |
| --bui-color-bg-alpha-light-7 | fade(#161b22, 70%) | Light - 70% Transparency             |
| --bui-color-bg-alpha-light-5 | fade(#161b22, 50%) | Light - 50% Transparency             |
| --bui-color-bg-alpha-light-3 | fade(#161b22, 30%) | Light - 30% Transparency             |
| --bui-color-bg-alpha-light-1 | fade(#161b22, 10%) | Light - 10% Transparency             |
| --bui-color-bg-alpha-dark-9  | fade(#484f58, 90%) | Dark - 90% Transparency              |
| --bui-color-bg-alpha-dark-7  | fade(#484f58, 70%) | Dark - 70% Transparency              |
| --bui-color-bg-alpha-dark-5  | fade(#484f58, 50%) | Dark - 50% Transparency              |
| --bui-color-bg-alpha-dark-3  | fade(#484f58, 30%) | Dark - 30% Transparency              |
| --bui-color-bg-alpha-dark-1  | fade(#484f58, 10%) | Dark - 10% Transparency              |
| --bui-color-border-default   | #30363d            | Divider, Border                      |

## How to Customize

### Browser Environment

Take a relatively complex scenario as an example: if your theme customization needs to consider responsiveness with a finer granularity, you'll need to combine built-in Tokens, responsive Tokens, and component Tokens for customization.

1. First, configure the [built-in Tokens](#built-in-tokens-overview) that need to be modified according to your requirements, and pass them to BUI through the `defaultLightToken` or `defaultDarkToken` attributes of the `ThemeProvider` component.
2. If the built-in Tokens cannot meet the needs, you can check the tokens supported by the component, such as [customizable button tokens](/cores/button#style-variables), and pass them to BUI through the `token` attribute of the `ThemeProvider` component.
3. If responsiveness needs to be considered, the designed Tokens can be passed to BUI through the `responsive` attribute of the `ThemeProvider` component. Code demonstration can refer to [theme customization](/cores/theme-provider#theme-customization).

### Mini Programs

In the mini program environment, theme customization is not as flexible as in the browser environment. Detailed plans can be found at [theme customization usage in mini programs](/cores/theme-provider#mini-program).

### Local Theme

BUI offers two methods of theme customization solutions.

1. Customize local themes through nested `ThemeProvider` components. See [local theme customization](/cores/theme-provider#local-theme-nesting).
2. Component-level theme customization. Use Tokens provided by each component to customize the specified component. The code is as follows:

```jsx | pure
<Button
  style={{
    '--border-radius': '2px',
  }}
/>
```

## Responsive

Responsive design refers to designing pages that adapt to different devices. Responsive design utilizes technologies like media queries to achieve style adaptation based on different devices or windows, meaning it shows different page layouts to users based on the device in use.

BUI uses HTML5 media query technology to obtain screen width, and then uses CSS to define Design Tokens with different CSS variables at different widths.

BUI adopts a popular mobile-first responsive design scheme and then adapts corresponding styles for the PC based on this foundation.

### Breakpoints

Breakpoints are the critical points at which the page layout changes. BUI defines `xs`, `sm`, `md`, `lg`, `xl` 5 responsive screen breakpoints, which correspond to the following values in the table:

| Breakpoint Type                                  | Specification | Screen Size (Threshold) |
| ------------------------------------------------ | ------------- | ----------------------- |
| X-Small (Very Small, typically phones)           | xs            | < 576px                 |
| Small (Small, tablets or older laptops)          | sm            | ≥ 576px                 |
| Medium (Medium, narrow screen computers)         | md            | ≥ 768px                 |
| Large (Large, wide screen computers)             | lg            | ≥ 992px                 |
| Extra large (Extra large, wide screen computers) | xl            | ≥ 1200px                |

Based on the five types of breakpoints and combined with mobile-first responsive design, mainly based on the [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) min-width, it is possible to dynamically change the component display form according to custom Design Tokens while the viewport changes.

### Custom Responsive Screen Breakpoints

To meet situations where responsive screen breakpoints defined in user business repositories might not be consistent with BUI-defined breakpoints, resulting in less smooth theme customization in responsive scenarios, BUI provides the capability to customize responsive screen breakpoints. It can be achieved via the `mountResponsiveTokens` function to define custom responsive screen breakpoint theme customization capability. Demonstration code is as follows:

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
