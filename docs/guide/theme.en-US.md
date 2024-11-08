# Customized Theme

BUI's style uses [less]（ https://lesscss.org/ ）And [CSS variable]（ https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties ）Combining as a development language and defining a series of global/component style variables, we call them Tokens. You can adjust the value of Tokens according to your needs to achieve the ability to customize themes.

Compared to crude CSS style overlay, CSS variables allow us to more elegantly customize the styles of components.

## BUI Tokens Concept

### Hierarchical structure

BUI's tokens are divided into three levels

1. - - BUI Built in Tokens: \* \*<br>

-DefaultLightToken (Global Token with default highlight mode)

- defaultDarkToken (global token for default dark mode)
  -DmLightToken (Global Token for Damai Highlighting Mode)
  -DmDarkToken (Global Token for Damai Dark Mode)

2. - - Responsive Tokens: \* \*<br>
       BUI defaults to a mobile first responsive solution, and users can customize responsive tokens through the 'responsive' attribute.

3. Tokens of \* _ components: _ \*<br>
   BUI allows users to flexibly customize component styles through the 'token' attribute when implementing components.

### priority

Normally, from the perspective of local superiority over general, the priority of the three types of tokens is:<br> \*_Component Tokens>Responsive Tokens>BUI Built in Tokens _ \*< br>
But for the special scenario of dark mode, the priority of the two dark mode tokens built into BUI is higher than that of responsive tokens.

### Channel differentiation

In the browser environment, different customization methods can be chosen for different needs. For example:

-Your theme customization needs are quite broad, you only need to customize built-in Tokens to complete it.
-Your theme customization needs are quite detailed, and you need to combine built-in Tokens and component Tokens for unified customization.
-Your theme customization needs to consider responsiveness, and if the granularity is relatively fine, you may need to combine built-in Tokens, responsive Tokens, and component Tokens for customization.

In mini programs, due to the limitation of not being able to dynamically insert code, customizing themes is not as flexible as in browsers. At present, the mini program supports the following two ways to modify the theme of the mini program:

-Write the corresponding tokens under the selector in the style file, and the theme configuration of the global style file will be overwritten by the page level style file.
-Local themes can only be passed in CSS variables inline when using components.

## What are the built-in tokens

Before customization, it is necessary to understand what are the built-in Tokens in BUI, so that we can have a comprehensive understanding of the BUI theme. Here, only the default built-in Tokens in highlight and dark modes are used. The design of the highlight and dark mode theme variables for the Damai theme is based on the default Tokens and will not be elaborated here. Interested developers can check the 'dm-light. rest' and 'dm-dark. rest' files in @ bifrostui/styles.

### Theme Color - Basic Variables

| Built in Token variable name | Default value     | explain                          |
| ---------------------------- | ----------------- | -------------------------------- |
| --bui-color-red              | #ff335c           | Brand Red                        |
| --bui-color-red-light        | #ffebef           | Brand Red - Light Bright         |
| --bui-color-pink             | #dd10f2           | Bright Pink                      |
| --bui-color-pink-light       | #fce7fe           | Bright Pink - Light Bright       |
| --bui-color-orange           | #ff8533           | Vitality Orange                  |
| --bui-color-orange-light     | #fff0e5           | Vitality Orange - Light Bright   |
| --bui-color-green            | #00d68f           | Affinity Green                   |
| --bui-color-green-light      | #dcf9f0           | Affinity Green - Light Bright    |
| --bui-color-purple           | #8b52ff           | Mysterious Purple                |
| --bui-color-purple-light     | #f2ebff           | Mysterious Purple - Light Bright |
| --bui-color-blue             | #148aff           | Ning Jinglan                     |
| --bui-color-blue-light       | #e1f0ff           | Tranquil Blue - Light Bright     |
| --bui-color-gray             | #8896b1           | Neutral Grey                     |
| --bui-color-gray-light       | #f3f5f8           | Neutral gray - light bright      |
| --bui-color-black            | #000              | black                            |
| --bui-color-white            | #fff              | white                            |
| --bui-color-vip              | #ff866e           | Member Orange                    |
| --bui-color-neutral-0        | --bui-color-black | Neutral Color-0                  |
| --bui-color-neutral-1        | #2e333e           | Neutral color-1                  |
| --bui-color-neutral-2        | #5f6672           | Neutral color-2                  |
| --bui-color-neutral-3        | #959aa5           | Neutral color-3                  |
| --bui-color-neutral-4        | #ced1d6           | Neutral color-4                  |
| --bui-color-neutral-5        | #e9ebef           | Neutral color-5                  |
| --bui-color-neutral-6        | #f5f6f8           | Neutral color-6                  |
| --bui-color-neutral-7        | --bui-color-white | Neutral color-7                  |

### Theme Color - Semantic Variables

| Built in Token variable name | Default value            | explain                            |
| ---------------------------- | ------------------------ | ---------------------------------- |
| --bui-color-primary          | --bui-color-red          | Main color tone                    |
| --bui-color-primary-light    | --bui-color-red-light    | Main color tone - light and bright |
| --bui-color-info             | --bui-color-blue         | Information Blue                   |
| --bui-color-info-light       | --bui-color-blue-light   | Information Blue - Light Bright    |
| --bui-color-success          | --bui-color-green        | Success Green                      |
| --bui-color-success-light    | --bui-color-green-light  | Success Green - Light Bright       |
| --bui-color-warning          | --bui-color-orange       | Warning Orange                     |
| --bui-color-warning-light    | --bui-color-orange-light | Warning Orange - Light Bright      |
| --bui-color-danger           | --bui-color-red          | Error Red                          |
| --bui-color-danger-light     | --bui-color-red-light    | Error Red - Light Bright           |

### Word weight variable

| Built in Token variable name | Default value | explain                |
| ---------------------------- | ------------- | ---------------------- |
| --bui-font-weight-normal     | 400           | Word weight - regular  |
| --bui-font-weight-medium     | 500           | Word weight - moderate |
| --bui-font-weight-bold       | 600           | Word weight - bold     |

### Semantic font size variable

| Built in Token variable name | Default value | explain       |
| ---------------------------- | ------------- | ------------- |
| --bui-title-size-1           | 21px          | Title 1       |
| --bui-title-size-2           | 18px          | Title 2       |
| --bui-title-size-3           | 16px          | Title 3       |
| --bui-title-size-4           | 15px          | Title 4       |
| --bui-text-size-1            | 14px          | Copywriting 1 |
| --bui-text-size-2            | 13px          | Copywriting 2 |
| --bui-text-size-3            | 12px          | Copywriting 3 |
| --bui-text-size-4            | 11px          | Copywriting 4 |
| --bui-text-size-5            | 10px          | Copywriting 5 |

### Foreground scenery - semantic variables

Usually used for text, where '-- bui color fg default' is the most common color, such as titles and primary information

| Built in Token variable name | Default value         | explain                                             |
| ---------------------------- | --------------------- | --------------------------------------------------- |
| --bui-color-fg-default       | --bui-color-neutral-1 | Title, primary information                          |
| --bui-color-fg-muted         | --bui-color-neutral-2 | Secondary and supplementary explanatory information |
| --bui-color-fg-subtle        | --bui-color-neutral-3 | Auxiliary and weakened information                  |
| --bui-color-fg-disabled      | --bui-color-neutral-4 | Invalid, unavailable                                |

### Background Color - Semantic Variables

Used to define a universal background color

| Built in Token variable name | Default value         | explain                  |
| ---------------------------- | --------------------- | ------------------------ |
| --bui-color-bg-default       | --bui-color-neutral-6 | Default background color |
| --bui-color-bg-view          | --bui-color-neutral-7 | View background color    |

<! -- TODO Transparency -->

### Color with transparency

| Built in Token variable name  | Default value   | explain         |
| ----------------------------- | --------------- | --------------- |
| --bui-color-bg-view-opacity-9 | fade(#fff, 90%) | Translucent 90% |
| --bui-color-bg-view-opacity-4 | fade(#fff, 40%) | Translucent 40% |

### Color of dividing lines or borders

| Built in Token variable name | Default value         | explain                       |
| ---------------------------- | --------------------- | ----------------------------- |
| --bui-color-border-default   | --bui-color-neutral-5 | Default border color          |
| --bui-color-border-primary   | fade(#ff335c, 40%)    | Main color border color       |
| --bui-color-border-info      | fade(#148aff, 40%)    | Information blue border color |
| --bui-color-border-success   | fade(#00d68f, 40%)    | Successful green border color |
| --bui-color-border-warning   | fade(#ff8533, 40%)    | Warning Orange Border Color   |
| --bui-color-border-danger    | fade(#ff335c, 40%)    | Error red border color        |
| --bui-color-border-gray      | fade(#8896b1, 40%)    | Gray border                   |

### Gradient Theme Color

| Built in Token variable name | Default value      | explain                           |
| ---------------------------- | ------------------ | --------------------------------- |
| --bui-color-primary-start    | #ef16b9            | Main color gradient - Start       |
| --bui-color-primary-end      | --bui-color-red    | Main color gradient - End         |
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
| --bui-color-vip-start        | #ffd4a6            | Member Orange Gradient - Start    |
| --bui-color-vip-end          | #ffbeae            | Member Orange Gradient - End      |

### Shape variable (rounded corner)

| Built in Token variable name | Default value | explain                                                                                                   |
| ---------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| --bui-shape-radius-popover   | 18px          | Rounded corner - page level floating layer                                                                |
| --bui-shape-radius-drawer    | 12px          | Rounded corners - page level drawer                                                                       |
| --bui-shape-radius-card      | 9px           | Rounded corners - commonly used for views with low information density, such as cards and regular views   |
| --bui-shape-radius-default   | 6px           | Rounded corners - independent posters, cards, etc., commonly used for views with high information density |
| --bui-shape-radius-poster    | 4px           | Rounded corners - posters, cards, etc. inside the container                                               |
| --bui-shape-radius-label     | 3px           | Rounded corner - label                                                                                    |

### Spatial variables (spacing, row height, hierarchy)

| Built in Token variable name | Default value | explain                                              |
| ---------------------------- | ------------- | ---------------------------------------------------- |
| --bui-spacing-xl             | 15px          | Spacing - Extra Large                                |
| --bui-spacing-lg             | 12px          | Distance - Larger                                    |
| --bui-spacing-md             | 9px           | Distance - Medium                                    |
| --bui-spacing-sm             | 6px           | Spacing - Small                                      |
| --bui-spacing-xs             | 4px           | Spacing - Ultra small                                |
| --bui-line-height            | 1.5           | Hang Gao                                             |
| --bui-z-index-dropdown       | 1000          | Level - dropdown menu                                |
| --bui-z-index-affix          | 1100          | Hierarchical - Ceiling mounted, fixed fixed elements |
| --bui-z-index-modal-backdrop | 1200          | Level - Pop up Background Layer                      |
| --bui-z-index-modal          | 1200          | Level - Pop up                                       |
| --bui-z-index-popover        | 1300          | Level - Bubble                                       |
| --bui-z-index-tooltip        | 1400          | Level - Tip Tool                                     |
| --bui-z-index-toast          | 1500          | Level - Light Reminder                               |

### typeface

| Built in Token variable name | Default value                                                                                                                              | explain          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| --bui-font-family            | 'PingFang SC', 'Chinese Quote', 'Segoe UI', roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', helvetica, arial，sans-serif; | BUI default font |

## Unique Tokens in Dark Mode

Dark mode will use the following Tokens to overwrite CSS variables with the same name mounted on the root node, in order to achieve style consistency in Dark mode.

| Built in Token variable name  | Default value      | explain                                             |
| ----------------------------- | ------------------ | --------------------------------------------------- |
| --bui-color-fg-default        | #f0f6fc            | Title, primary information                          |
| --bui-color-fg-muted          | #8b949e            | Secondary and supplementary explanatory information |
| --bui-color-fg-subtle         | #484f58            | Auxiliary and weakened information                  |
| --bui-color-fg-disabled       | #484f58            | Invalid, unavailable                                |
| --bui-color-bg-default        | #010409            | Default background color                            |
| --bui-color-bg-view           | #161b22            | View background color                               |
| --bui-color-bg-view-opacity-9 | fade(#161b22, 90%) | Translucent 90%                                     |
| --bui-color-bg-view-opacity-4 | fade(#161b22, 40%) | Translucent 40%                                     |
| --bui-color-border-default    | #30363d            | Divide line, border                                 |

## How to customize

### Browser environment

Taking a more complex scenario as an example: your theme customization needs to consider responsiveness, and if the granularity is relatively fine, you need to combine built-in Tokens, responsive Tokens, and component Tokens for customization.

Firstly, configure the [built-in Tokens] that need to be modified (what are the # built-in tokens) according to the requirements, and pass them to BUI through the defaultLightToken or defaultDarkToken properties of the ThemeProvider component.
If the built-in Tokens cannot meet the requirements, you can check the Tokens supported by the component, such as [Button supported customizable Tokens] (/cores/button # style variables), and pass them to BUI through the token property of the ThemeProvider component. 3. If responsiveness needs to be considered, the designed Tokens can be passed to BUI through the 'responsive' property of the 'ThemeProvider' component. The code demonstration can refer to [Theme Customization] (/responses/theme provider # Theme Customization).

### Mini program

In the mini program environment, theme customization is not as flexible as in the browser environment. For detailed solutions, please refer to [Mini Program Theme Customization Usage] (/cores/theme provider # Mini Program).

### Local themes

BUI offers two ways to customize themes.

1. Customize local themes through nested ThemeProvider components, which can be viewed as [Local Theme Customization] (/cores/theme provider # Local Theme Nested Themes)
2. Component level theme customization, which can use the Tokens provided by each component to customize specified components. The code is as follows:

```jsx | pure
<Button
  style={{
    '--border-radius': '2px',
  }}
/>
```

## Responsive type

Responsive interface is the design of a page that can adapt to different devices. Responsive design utilizes media queries and other technologies to achieve style adaptation for different devices or windows, which means it will display different page layouts to users based on the different devices you use.

BUI uses HTML5's media query technology to obtain screen width, and then uses CSS to define Design Tokens using different CSS variables at different widths.

BUI adopts a popular mobile first responsive design scheme, and then adapts the corresponding style according to the situation of the PC based on this.

### Screen breakpoint

The so-called breakpoint refers to the critical point at which the page layout changes. BUI defines five responsive screen breakpoints, namely 'xs',' sm ',' md ',' lg ', and' xl ', with corresponding values as shown in the table below:

| Breakpoint Type                               | Specifications | Screen size (critical value) |
| --------------------------------------------- | -------------- | ---------------------------- |
| X-Small (ultra small, usually a mobile phone) | xs             | < 576px                      |
| Small (small, tablet or old laptop)           | sm             | ≥ 576px                      |
| Medium (medium, narrow screen computer)       | md             | ≥ 768px                      |
| Large (large, widescreen computer)            | lg             | ≥ 992px                      |
| Extra large (large, widescreen computer)      | xl             | ≥ 1200px                     |

Based on the above 5 breakpoints, combined with mobile first responsive design, mainly based on [media query]（ https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries ）The minimum screen width (min width) can be adjusted to change the display form of components according to custom Design Tokens as the viewport changes.

### Customize responsive screen breakpoints

In order to meet the situation where the responsive screen breakpoints defined by users in the business warehouse may not be consistent with those defined by BUI, resulting in less smooth theme customization in responsive scenarios, BUI provides the ability to customize responsive screen breakpoints, which can be achieved through the mountResponsiveTokens function. The demonstration code is as follows:

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
