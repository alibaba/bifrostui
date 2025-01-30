---
order: 2
---

# 开发指南

以下是关于提交反馈或代码的指南。

## 本地开发

按照下面的步骤操作，即可在本地开发组件库

BUI 使用 lerna 进行多包管理， 请使用[pnpm](https://pnpm.io/)安装依赖

```bash
# 克隆仓库
git clone xxxx

# 安装依赖
pnpm install

# 进入web开发，浏览器访问 http://localhost:8000
pnpm start

# 进入小程序开发  使用小程序的ide开发工具打开 websites/mini-program/dist 文件夹
pnpm start:weapp  // 微信小程序
pnpm start:alipay // 支付宝小程序
pnpm start:tt     // 头条小程序

```

## 目录结构

项目结构

```
├── bui-core             // 基础核心组件
├── bui-icons 					  // 图标
└── bui-styles           // 主题变量、css mixins
└── bui-types            // 组件通用类型定义
└── bui-utils            // 通用utils
```

组件结构

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

## 提交 PR

### Pull Request 流程

在GitHub 上提 Pull Request的流程，可以参考 [第一次参与开源](https://github.com/firstcontributions/first-contributions) 学习

1. fork 主仓库，如果已经 fork 过，同步主仓库的最新代码
2. 基于 fork 后仓库的 `master` 分支新建一个分支`your-branch-name`
3. 在`your-branch-name`分支上开发，开发完成后，提Pull Request到主仓库的 `master` 分支
4. Pull Request 会在 Review 通过后被合并到主仓库
5. 等待 BUI 发布版本

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：

```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/alibaba/bifrostui.git

# 拉取主仓库最新代码
git fetch upstream

# 合并主仓库代码
git merge upstream/master
```
