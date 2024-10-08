# BUI Contributing Guide

非常欢迎开发者向 BUI 做出贡献。在提交贡献之前，请花一些时间阅读以下内容，保证贡献符合规范。

## Issue 报告指南

如果你提交的是 Bug 报告，请务必遵守 [`Bug Report`](https://github.com/alibaba/bifrostui/issues/new?assignees=&labels=bug&projects=&template=issue_report.md&title=%5BBUG%5D+) 模板，并在标题起始处增加 `[BUG]` 字符。

如果提交的是功能需求，请务必遵守 [`Feature Request`](https://github.com/alibaba/bifrostui/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=%5BFEATURE%5D+) 模版， 并在标题的起始处增加 `[FEATURE]` 字符。

## 开发配置

> 保证你的 Node.js 版本 >= 18

### 安装依赖

基于 pnpm workspace。

```bash
$ pnpm install
```

### 跨端开发

一般先在`/bifrostui`目录执行 `pnpm start:h5` 运行 H5，进行 H5 功能开发，待 H5 开发接近尾声时，需要在`/bifrostui`目录下执行选择以下小程序相关命令，进行[微信｜抖音｜支付宝]小程序端的开发工作，请确保你的功能至少适配 H5、微信、抖音、支付宝 4 个渠道（除非有合理的理由无法保证各端功能一致）。

以下是本地开发命令：

- 调试 H5

```bash
$ pnpm start:h5
```

- 调试微信小程序

```bash
$ pnpm start:weapp
```

- 调试抖音小程序

```bash
$ pnpm start:tt
```

- 调试支付宝小程序

```bash
$ pnpm start:alipay
```

### 新增/删除依赖

> 应该尽量把子包的 peerDependencies 作为根目录的 dependencies 安装在根目录；如果版本遇到冲突，可以安装在子包内。

#### 1. 操作根目录

```bash
# 新增
$ pnpm add <dependency> -w [-D|-S]

# 删除
$ pnpm remove <dependency> -w
```

#### 2. 操作某个子包

```bash
# 为某个子包（如 @bifrostui/react）新增一个依赖
$ pnpm --filter @bifrostui/react add <dependency>

# 为某个子包（如 @bifrostui/react）删除一个依赖
$ pnpm --filter @bifrostui/react remove <dependency>
```

#### 3. 操作 packages 下的所有子包

```bash
# 新增依赖，注意安装的包名需要加引号
$ pnpm -r --filter='./packages/*' add <dependency>

# 删除依赖
$ pnpm -r --filter='./packages/*' remove <dependency>
```

### 清理所有依赖

```bash
# 包括删除根目录的 node_modules 和所有 workspace 里的 node_modules
$ pnpm clear
```

### 编译构建

```bash
# 编译
$ pnpm build

# 编译某个子包，如 `@bifrostui/icons`
$ pnpm --filter @bifrostui/icons build
```

### 提交发布

- 发布 beta 版

  ```bash
  # 1. 切到你要发布beta版的分支，同步最新main分支代码
  $ pnpm v:beta

  # 2. 构建
  $ pnpm build

  # 3. 发布
  $ pnpm pub:beta
  ```

- 发布正式版

  ```bash
  # 1. 切到main分支，拉取最新代码
  $ pnpm v:online

  # 2. 构建
  $ pnpm build

  # 3. 发布
  $ pnpm pub:online
  ```

## 提交 commit

整个 bifrostui 仓库遵从 Conventional Commits 标准（详细查看`commitlint.config.js`配置），在输入 commit message 的时候请务必遵从此规范。

## 代码风格

- `JavaScript`：JavaScript 风格遵从 [Airbnb JavaScript Style](https://github.com/airbnb/javascript)。
- `TypeScript`：TypeScript 风格也是 [Airbnb JavaScript Style](https://github.com/airbnb/javascript) 的变种，详情请看相关包目录下的 `eslint.json` 和 `tsconfig.json`。
- 样式：遵循相关包目录下的 `.stylelintrc` 风格。

## Pull Request 指南

1. 务必保证 `npm run build` 能够编译成功；
2. 务必保证提交的代码遵循相关包中的 `.eslintrc`, `.stylelintrc`, `.prettierrc` 所规定的规范；
3. 根目录下运行 `pnpm ci:test` 命令时，必须保证所有测试用例都通过，且新增的组件，单测行覆盖率 90%以上；
4. 当相关包有测试用例时，请给你提交的代码也添加相应的测试用例。
5. 提交代码 commit 时，commit 信息需要遵循 [Conventional Commits]标准。

## 最后

感谢所有给 BUI 贡献过代码的开发者！
