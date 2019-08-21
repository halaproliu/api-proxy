import { genSuccessResponse } from '../utils/modelUtils'
import { Controller, Request, RequestMethod, mixins } from '../utils/decorator'
// import ResponseController from './ResponseController'

@mixins()
@Controller({
  prefix: '/'
})
class IndexController {
  @Request({
    url: '/',
    method: RequestMethod.GET
  })
  async main(ctx) {
    ctx.body = 'Hello World'
  }

  @Request({
    url: '/api/getIntelligentEvaluateStatus',
    method: RequestMethod.POST
  })
  async getIntelligentEvaluateStatus(ctx) {
    ctx.body = {
      responseCode: '000000',
      responseMsg: '成功',
      data: {
        barCode: 'KB000900000031',
        evaluateFlag: '5',
        evaluateNo: '19082009461100000351'
      }
    }
  }

  @Request({
    url: '/api/getIntellEvaOrderStatus',
    method: RequestMethod.POST
  })
  async getIntellEvaOrderStatus(ctx) {
    ctx.body = genSuccessResponse({
      intellEvaOrderList: [
        {
          amount: '405000',
          productType: '1140100',
          show: false,
          status: 2
        }
      ]
    })
  }

  @Request({
    url: '/api/apply',
    method: RequestMethod.POST
  })
  async apply(ctx) {
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
  }
}

export default IndexController
