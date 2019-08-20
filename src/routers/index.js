const Router = require('koa-router')
// const options = {
//   prefix: '/api'
// }
const router = new Router()

router.get('/', ctx => {
  ctx.body = 'Hello World'
})

router.post('/api/getIntelligentEvaluateStatus', ctx => {
  ctx.body = {
    responseCode: '000000',
    responseMsg: '成功',
    data: {
      barCode: 'KB000900000031',
      evaluateFlag: '5',
      evaluateNo: '19082009461100000351'
    }
  }
})

router.post('/api/getIntellEvaOrderStatus', ctx => {
  ctx.body = {
    responseCode: '000000',
    responseMsg: '成功',
    data: {
      intellEvaOrderList: [
        {
          amount: '405000',
          productType: '1140100',
          show: false,
          status: 2
        }
      ]
    }
  }
})

router.post('/api/apply', ctx => {
  const body = ctx.request.body
  if (!body.evaluateNo) {
    ctx.body = {
      responseCode: '900010',
      responseMsg: '参数缺失'
    }
    return
  }
  ctx.body = {
    responseCode: '000000',
    responseMsg: '成功',
    data: null
  }
})

module.exports = router
