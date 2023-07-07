## 开始

```bash
# 克隆项目
git clone https://gitee.com/qq1020431880/vue-h5-vant-template.git

# 进入项目目录
cd vue-h5-vant-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev

# 或者npm start命令快捷启动
npm start

# 也可以自定义端口启动
npm run dev --port=8000
```

服务启动成功后，浏览器访问 [http://localhost:9000](http://localhost:9000)


## 环境

```bash
# 修改接口连接地址
在 .env.[development/staging/production] 中修改 VUE_APP_BASE_API='http://接口地址'

# 运行环境
在使用npm run dev 和 build dev/stage/prod 会根据.env.XXX.js里的配置来连接不同环境的接口地址
```

环境配置可以参考 Vue CLI 官网的 [模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)，新版本的环境是独立的 **.env[model]** 文件形式来配置


## 发布

```bash
# 构建开发环境
npm run build:dev

# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```


## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

> 本模板基于[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 改造，更多使用信息参考 [使用文档](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/)
