import { genSuccessResponse } from '../utils/modelUtils'
import { Controller, Request, RequestMethod } from '../utils/decorator'
import ResponseService from '../services/ResponseService'

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

  @Request({
    url: '/api/saveResponse',
    method: RequestMethod.POST
  })
  async saveResponse(ctx) {
    const options = ctx.request.body
    const { responseCode, responseMsg, data } = await ResponseService.saveResponse(options)
    ctx.body = {
      responseCode,
      responseMsg,
      data
    }
  }

  @Request({
    url: '/api/getResponse',
    method: RequestMethod.GET
  })
  async getResponse(ctx) {
    const query = ctx.request.query
    const url = query.url
    if (!url) {
      ctx.body = {
        responseCode: '900001',
        responseMsg: '参数缺失'
      }
      return
    }
    const { responseCode, responseMsg, data } = await ResponseService.getResponse(url)
    ctx.body = {
      responseCode,
      responseMsg,
      data
    }
  }

  @Request({
    url: '/api/updateResponse',
    method: RequestMethod.POST
  })
  async updateResponse(ctx) {
    const params = ctx.request.body
    const { url } = params
    if (!url) {
      ctx.body = {
        responseCode: '900001',
        responseMsg: '参数缺失'
      }
      return
    }
    const { responseCode, responseMsg, data } = await ResponseService.updateResponse(url, { ...params })
    ctx.body = {
      responseCode,
      responseMsg,
      data
    }
  }
}

export default IndexController
