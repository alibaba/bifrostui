---
order: 1
---

# Get started quickly

## install

```bash
$ npm install --save @bifrostui/react @bifrostui/styles
# or
$ yarn add @bifrostui/react @bifrostui/styles
# or
$ pnpm add @bifrostui/react @bifrostui/styles
```

## use

Introduce the theme style package of the component library globally first`@bifrostui/styles`

Reference through global JS

```js
import '@bifrostui/styles';
```

Or reference it in the global CSS file

```less
@import '~@bifrostui/styles';
```

Components can be directly imported

```js
import { Button } from '@bifrostui/react';
```

## Mini program configuration

The use of BUI on the mini program side needs to be based on [Taro](https://taro-docs.jd.com/docs/) Framework development. We need to install`@tarojs/plugin-html`
And add the following configuration to Taro's config file

```js
 plugins: [
  ['@tarojs/plugin-html'],
],
webpackChain: (chain, webpack) => {
  chain.resolve.extensions.prepend('.miniapp.js');
},
```

## On demand introduction

BUI supports tree shaking based on ES module by default. If your environment does not support tree shaking, you can manually introduce some components:

```js
import Button from '@bifrostui/react/es/button';
```
