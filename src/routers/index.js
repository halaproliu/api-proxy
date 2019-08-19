const Router = require('koa-router')
// const options = {
//   prefix: '/api'
// }
const router = new Router()

router.get('/', ctx => {
  ctx.body = 'Hello World'
})

router.get('/api', ctx => {
  ctx.body = 'api'
})

module.exports = router
