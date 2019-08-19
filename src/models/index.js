const mongoose = require('mongoose')
const baseModel = require('./base_model')

let Schema = mongoose.Schema

let ResponseSchema = new Schema({
  id: Number,
  responseCode: String, // 返回编码
  responseMsg: String, // 返回信息
  data: Object, // 返回数据对象
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
})

ResponseSchema.index({ id: -1 })

ResponseSchema.plugin(baseModel)

let Response = mongoose.model('response', ResponseSchema)

module.exports = Response
