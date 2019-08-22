import ResponseModel from '../models/ResponseModel'

export default {
  async saveResponse(options = {}) {
    const res = await ResponseModel.create(options)
    return res || {}
  },

  async getResponse(url = '') {
    const res = await ResponseModel.findOne({ url }).exec()
    return res || {}
  },

  async updateResponse(url = '', params) {
    const keys = Object.keys(params)
    const model = await ResponseModel.findOne({ url }).exec()
    keys.forEach(key => (model[key] = params[key]))
    const res = await model.save()
    return res || {}
  }
}
