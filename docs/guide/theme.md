# 定制主题

BUI 的样式使用了 [less](https://lesscss.org/) 和 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 相结合做为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，实现定制主题的能力。

相比于粗暴的 CSS 样式覆盖，CSS 变量让我们可以更加优雅地自定义组件的样式。

我们可以通过组件文档的 "样式变量" 表格中，查到每个组件都暴露了都哪些 CSS 变量。

以 Button 组件为例，我们可以在它的文档上找到类似于下面这样的表格：

| 属性            | 说明     | 默认值                | 全局变量                      |
| --------------- | -------- | --------------------- | ----------------------------- |
| --border-radius | 圆角大小 | `100px`               | --bui-button-border-radius    |
| --bg-color      | 背景颜色 | --bui-color-neutral-5 | --bui-button-default-bg-color |
| --text-color    | 文字颜色 | --bui-color-fg-muted  | --bui-button-text-color       |

这表示了Button组件支持了 `--border-radius` 、 `--bg-color`、`--text-color` 变量。

我们提供的默认主题相关CSS变量可以在@bifrostui/styles中查看

通过设置 CSS 变量的值定制主题，有三种方法：

### 方法一：在 CSS 文件中设置

给 Button 组件添加个自定义的 `className`：

```jsx | pure
<Button className="my-button" />
```

然后在 CSS 文件中通过选中自定义的className来设置 CSS 变量

```css
.my-button {
  --border-radius: 10px;
}
```

### 方法二：直接通过 style 属性设置

通过在组件的 `style` 属性设置CSS 变量，这种方式简单粗暴

```jsx | pure
<Button
  style={{
    '--border-radius': '2px',
  }}
/>
```

### 方法三：通过全局变量进行设置

如需对项目中所有的 Button 都进行统一的样式调整，这种情况下，可以通过设置"全局 CSS 变量"("样式变量"表格中的最后一列)进行统一的修改

```css
:root:root {
  --bui-button-border-radius: 10px;
}
```

通过上面方式对全局变量的设置，项目中所有的 Button 都会被自定义修改。
