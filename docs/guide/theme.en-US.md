# Customized Theme

BUI's style uses [less](https://lesscss.org/) And [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties). Combining as a development language and defining a series of global/component style variables, you can make corresponding adjustments according to your needs to achieve the ability to customize themes.

Compared to crude CSS style overlay, CSS variables allow us to more elegantly customize the styles of components.

We can find out which CSS variables are exposed in each component through the "Style Variables" table in the component documentation.

Taking the Button component as an example, we can find a table similar to the following in its documentation:

| attribute       | explain             | Default value         | global variable               |
| --------------- | ------------------- | --------------------- | ----------------------------- |
| --border-radius | Rounded corner size | `100px`               | --bui-button-border-radius    |
| --bg-color      | background color    | --bui-color-neutral-5 | --bui-button-default-bg-color |
| --text-color    | Text color          | --bui-color-fg-muted  | --bui-button-text-color       |

This indicates that the Button component supports`--border-radius`the`--bg-color`、`--text-color`variables.

The default theme related CSS variables we provide can be viewed in @ bifrostui/styles

There are three ways to customize a theme by setting the values of CSS variables:

### Method 1: Set in CSS file

Add a custom to the Button component`className`：

```jsx | pure
<Button className="my-button" />
```

Then set CSS variables in the CSS file by selecting the custom className

```css
.my-button {
  --border-radius: 10px;
}
```

### Method 2: Set directly through the style attribute

By incorporating components`style`setting css variables for properties is a simple and crude method

```jsx | pure
<Button
  style={{
    '--border-radius': '2px',
  }}
/>
```

### Method 3: Setting through Global Variables

If you need to make uniform style adjustments to all buttons in the project, you can modify them uniformly by setting the "Global CSS Variables" (the last column in the "Style Variables" table)

```css
:root:root {
  --bui-button-border-radius: 10px;
}
```

By setting global variables in the above way, all buttons in the project will be customized and modified.
