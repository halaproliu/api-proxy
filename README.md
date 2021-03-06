# api-proxy

### Main
本项目采用[koa2](https://koa.bootcss.com/)作为主要框架，进行开发，通过[nodemon](https://github.com/remy/nodemon#nodemon)支持开发热重载。使用[babel](https://www.babeljs.cn/)支持es6，es7语法。babel-node包主要是支持nodemon在开发环境时支持es6语法。@babel/cli作为babel的命令行工具，支持编译es6语法，生成ES5代码，同时需要依赖@babel/core和@babel/preset-env。@babel/plugin-transform-runtime和@babel/runtime支持编译后的async...await语法。为了让项目支持decorator，新增了@babel/plugin-proposal-decorators包。

### 项目初始化
```js
npm i 
或
yarn
```

### 项目启动
```js
npm start
或
yarn start
```

### 项目编译
```js
npm run build
或
yarn run build
```

### 框架依赖中间件
- koa-bodyparser（数据转换，支持json,form,text）
- koa-logger（日志）
- koa-static（配置静态目录）
- koa-cors（解决跨域问题）
- koa-convert（将koa1.0中间件转化为koa2.0中间件）
- koa-router（路由）

### 使用ES6 Decorator
依赖@babel/plugin-proposal-decorators(babel7)插件实现decorator定义接口路由

### 测试用例
使用mocha+chai进行测试用例编写，添加@babel/register和@babel/prolyfill，让测试用例支持es6语法。
测试用例文件使用.spec.js结尾
```js
npm test // 测试用例测试
```

### mongodb安装
可以使用[HomeBrew](https://brew.sh/)进行安装
```sh
brew install mongodb
brew services start mongo // 启动mongo
brew services stop mongo // 停止mongo
```
图形管理界面可以选用[Robot 3T](https://robomongo.org/)
若不想使用mongo，修改/src/config/index.js中的useMongo为false

### 新的接口定义
可以在routers文件夹下新建文件，创建新的路由文件，按照ResponseController.js的格式进行开发

### node版本
v11.13.0

项目持续更新中....
