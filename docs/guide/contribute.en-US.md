---
order: 2
---

# developer's guide

The following is a guide for submitting feedback or code.

## Participate in development

### Local development

Follow the steps below to develop the component library locally

BUI uses lerna for multi package management, please use [yarn](https://pnpm.io/) to install dependencies.

```bash
# 克隆仓库
git clone xxxx

# 安装依赖
yarn install

# 进入web开发，浏览器访问 http://localhost:8000
yarn start:h5

# 进入小程序开发  使用小程序的ide开发工具打开 websites/mini-program/dist 文件夹
yarn start:weapp  // 微信小程序
yarn start:alipay // 支付宝小程序
yarn start:tt     // 头条小程序

```

### directory structure

Project Structure

```
├── bui-core             // 基础核心组件
├── bui-icons 					  // 图标
└── bui-styles           // 主题变量、css mixins
└── bui-types            // 组件通用类型定义
└── bui-utils            // 通用utils
```

Component structure

```
.
├── __test__                      	// 测试文件夹名称
│   ├── __snapshots__             	// jest快照测试默认生成的文件夹
│   │   └── Button.test.tsx.snap  	// jest快照
│   └── Button.snapshot.test.tsx  	// 组件对应的md文件中demo的snapshot测试
		└── Button.test.tsx  	        // 组件测试文件
├── index.less                    	// 组件样式
├── Button.types.ts  							// 组件类型定义
├── Button.tsx 										// 组件主体文件
└── index.ts                      	// 组件入口文件
└── index.miniapp.ts              	// 组件小程序入口文件(非必须，按需定义)
└── index.md                      	// 官网中组件说明展示文档
```

## Submit PR

### Pull Request Process

The process of submitting a Pull Request on GitHub can refer to [First time participating in open source](https://github.com/firstcontributions/first-contributions) for more.

1. Fork the main repository, if it has already been forked, synchronize the latest code of the main repository
2. Create a new branch called 'young branch name' based on the 'master' branch of the fork repository
3. Develop on the 'young branch name' branch, and after completion, submit a Pull Request to the 'master' branch of the main repository
4. Pull requests will be merged into the main repository after the review is approved
5. Waiting for BUI release version

### Synchronize the latest code

Before submitting a Pull Request, please follow the following process to synchronize the latest code from the main repository:

```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/alibaba/bifrostui.git

# 拉取主仓库最新代码
git fetch upstream

# 合并主仓库代码
git merge upstream/master
```
