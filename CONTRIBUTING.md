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

> 按照约定，需要有权限的维护者才能发布，且只能在 `main` 和 `releases/*` 分支上发布。贡献者代码被合并后，我们会在规定发布日进行统一发布。

### 自动发布

开发者只需要进行版本控制，即可触发自动化脚本发布。

- 发布 beta 版

  ```bash
  # 切到你要发布beta版的分支，同步最新main分支代码，v:beta命令只会自动添加patch版本的beta，
  # 如果需要发布minor或major版本的beta，可在此处执行 pnpm v:online 命令，并务必选择正确的beta版本号
  $ pnpm v:beta
  ```

- 发布正式版

  ```bash
  # 切到main分支，拉取最新代码
  $ pnpm v:online
  ```

#### 手动发布

目前手动发布仅供处理一些特殊情况才使用，通常情况下请使用自动发布。比如出现以下特殊情况时可使用手动发布：

1. 当执行发布脚本的远程机器较拥挤导致等待时间过长，可先取消发布脚本，再手动发布
2. 当自动发布脚本出现网络异常导致部分包发成功，部分失败时
3. 当特殊需求，不在约定的main或releases/\*分支发布时

- 发布 beta 版

  ```bash
  # 1. 切到你要发布beta版的分支，同步最新main分支代码，v:beta命令只会自动添加patch版本的beta，
  # 方式1：自动升级patch的beta版本号，跳过版本询问
  $ pnpm v:beta

  # 方式2：自行选择beta版本号，包括minor、major或正式版，务必选择正确！
  $ npx lerna version --preid=beta --force-publish --message 'Publish'

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

## AI辅助

- 组件markdown文档自动生成：`pnpm docs:gen`
- 组件测试用例自动生成：`pnpm tests:gen`
- 组件文档国际化：`pnpm docs:i18n`

AI辅助使用到了[claude37_sonnet](https://www.anthropic.com/claude)和[gpt-4o-0513](https://openai.com/index/gpt-4/)模型，使用前请申请对应的API Key，并配置好对应的环境变量：

```bash
# 在项目根目录新建 `.env` 文件，并添加以下内容：
IDEALAB_API_KEY="YOUR API KEY"
IDEALAB_BASE_URL="CORRESPONDING BASE URL"
```

环境变量配置参考：[大模型服务平台百炼](https://help.aliyun.com/zh/model-studio/getting-started/first-api-call-to-qwen?spm=a2c4g.11186623.help-menu-2400256.d_0_1_0.5a06b0a8v21EON#688de734136xo)

## Pull Request 指南

1. 务必保证 `pnpm build` 能够编译成功；
2. 非特殊情况（紧急需求仅支持部分渠道的功能），务必保证你的功能在小程序上能正常运行；
3. 务必保证你改动到的文档支持中英两种语言，可执行 `pnpm md:trans --file <filepath>` 进行机翻，机翻后的文档需要格式化一下；
4. 务必保证提交的代码遵循相关包中的 `.eslintrc`, `.stylelintrc`, `.prettierrc` 所规定的规范；
5. 根目录下运行 `pnpm ci:test` 命令时，必须保证所有测试用例都通过，且新增的组件，单测行覆盖率 90%以上；
6. 当相关包有测试用例时，请给你提交的代码也添加相应的测试用例。
7. 提交代码 commit 时，commit 信息需要遵循 [Conventional Commits]标准。

## 最后

感谢所有给 BUI 贡献过代码的开发者！
