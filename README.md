# Natrium - Angular Admin Auto Generator
## 什么是Natrium

Natrium是一个使用配置文件进行后台管理系统自动化生成的代码机器人，它依赖于Angular Cli实现。
Natrium致力于避免开发人员做过多不必要的工作，包括：写列表页、表单、路由等，让开发人员专注于逻辑代码。

## Natrium将会实现哪些功能

在1.0.0版本将会实现后台管理系统的所有页面通过json配置文件进行生成的功能，其中包括：

- 板块和子版块的自动化生成
- 路由自动化生成
- 页面跳转和返回功能的自动化生成与路由栈的缓存（并不包括页面数据的缓存）
- 列表页、详情页、表单编辑页自动化生成
- 表单编辑页的表单验证代码框架生成
- 提供GlobalService、LocalStorageService和封装了的HttpHandler
- 登录、注册、忘记密码页面的生成

在后续版本将会陆续实现包括但不限于以下功能：

- 页面的风格化自定义
- 快速生成PWA
- 快速生成Electron
- 通过接口配置文件自动化生成接口Service
