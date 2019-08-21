import ResponseModel from '../models/ResponseModel'

export default {
  async saveResponse(options = {}) {
    return await ResponseModel.create(options)
  },

  async getResponse(url = '') {
    return await ResponseModel.findOne({ url }).exec()
  },

  async updateResponse(url = '', params) {
    const keys = Object.keys(params)
    const model = await ResponseModel.findOne({ url }).exec()
    keys.forEach(key => (model[key] = params[key]))
    const res = await model.save()
    return res
  }
}
