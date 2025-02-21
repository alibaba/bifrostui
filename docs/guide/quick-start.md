---
order: 0
---

# 快速上手

## 安装

```bash
$ npm install --save @bifrostui/react @bifrostui/styles
# or
$ yarn add @bifrostui/react @bifrostui/styles
# or
$ pnpm add @bifrostui/react @bifrostui/styles
```

## 使用

先在全局引入组件库的主题样式包 `@bifrostui/styles`

通过全局js中引用

```js
import '@bifrostui/styles';
```

或者在全局css文件中引用

```less
@import '~@bifrostui/styles';
```

组件使用直接引入即可

```js
import { Button } from '@bifrostui/react';
```

## 小程序配置

BUI在小程序端的使用需要基于 [Taro](https://taro-docs.jd.com/docs/) 框架开发。我们需要安装 `@tarojs/plugin-html`
并且在Taro的config文件里增加如下配置

```js
 plugins: [
  ['@tarojs/plugin-html'],
],
webpackChain: (chain, webpack) => {
  chain.resolve.extensions.prepend('.miniapp.js');
},
```

## 按需引入

BUI 默认支持基于 ES module 的 tree shaking，如果你的环境不支持 Tree Shaking，那么你可以手动引入部分组件：

```js
import Button from '@bifrostui/react/es/button';
```
