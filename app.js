const Koa = require('koa')
const config = require('./config')
const mongoose = require('mongoose')
const app = new Koa()
const port = config.port || '3000'
mongoose.connect(config.db.url) // 连接mongo
app.listen(port)
