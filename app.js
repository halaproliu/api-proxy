const path = require('path')
const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const cors = require('koa-cors')
const convert = require('koa-convert')
const config = require('./config')
const router = require('./routers')
const errorHanlder = require('./middlewares')
const mongoose = require('mongoose')
const log = require('./utils/log')
const app = new Koa()
const port = config.port || '3000'
mongoose.connect(config.db.url, { useNewUrlParser: true }) // 连接mongo
app.listen(port)

const middlewares = [
  convert(cors()),
  logger(),
  bodyParser(),
  serve(path.join(__dirname, config.staticPath)),
  errorHanlder,
  router.routes(),
  router.allowedMethods()
]

middlewares.forEach(middleware => {
  if (!middleware) return
  app.use(middleware)
})

app.on('error', err => {
  log('cyan', err)
})

process.on('SIGINT', () => {
  log('yellow', 'Stopping dev server')
  server.close(() => {
    process.exit(0)
  })
})
