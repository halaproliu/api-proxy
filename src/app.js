import path from 'path'
import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import cors from 'koa-cors'
import convert from 'koa-convert'
import config from './config'
import router from './routers'
import errorHanlder from './middlewares/error'
import mongoose from 'mongoose'
import log from './utils/log'
import { getIPAddress } from './utils/os'

const app = new Koa()
const port = config.port || '3000'

if (config.useMongo) {
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useNewUrlParser', true)
  mongoose.connect(config.db.url) // 连接mongo
}

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

const server = app.listen(port, _ => {
  log('green', '************************************')
  log('green', 'App running at：')
  log('green', '- Local:   http://localhost:' + port)
  log('green', '- Network: http://' + getIPAddress() + ':' + port)
  log('green', '************************************')
})

process.on('SIGINT', () => {
  log('yellow', 'Stopping dev server')
  server.close(() => {
    process.exit(0)
  })
})
