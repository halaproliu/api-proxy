import { Controller, Request, RequestMethod } from '../utils/decorator'
import ResponseService from '../services/ResponseService'

@Controller({
  prefix: '/api'
})
class ResponseController {
  @Request({
    url: '/saveResponse',
    method: RequestMethod.POST
  })
  async saveResponse(ctx) {
    const options = ctx.request.body

    const {
      responseCode,
      responseMsg,
      data
    } = await ResponseService.saveResponse(options)
    ctx.body = {
      responseCode,
      responseMsg,
      data
    }
  }

  @Request({
    url: '/getResponse',
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
    const {
      responseCode,
      responseMsg,
      data
    } = await ResponseService.getResponse(url)
    ctx.body = {
      responseCode,
      responseMsg,
      data
    }
  }

  @Request({
    url: '/updateResponse',
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
    const {
      responseCode,
      responseMsg,
      data
    } = await ResponseService.updateResponse(url, {
      ...params
    })
    ctx.body = {
      responseCode,
      responseMsg,
      data
    }
  }
}

export default ResponseController
