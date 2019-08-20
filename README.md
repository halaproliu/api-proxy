# api-proxy

### Main
本项目采用[koa2](https://koa.bootcss.com/)作为主要框架，进行开发，通过[nodemon](https://github.com/remy/nodemon#nodemon)支持开发热重载。使用[babel](https://www.babeljs.cn/)支持es6，es7语法。babel-node包主要是支持nodemon在开发环境时支持es6语法。@babel/cli作为babel的命令行工具，支持编译es6语法，生成ES5代码，同时需要依赖@babel/core和@babel/preset-env。

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


### 测试用例
使用mocha+chai进行测试用例编写，添加@babel/register和@babel/prolyfill，让测试用例支持es6语法。
测试用例文件使用.spec.js结尾
```js
npm test // 测试用例测试
```

### node版本
v11.13.0
