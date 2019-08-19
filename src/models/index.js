const mongoose = require('mongoose')
const baseModel = require('./base_model')

let Schema = mongoose.Schema

let MenuSchema = new Schema({
  id: Number,
  name: String, // 菜单名称
  icon: String, // 菜单图标
  url: String, // 菜单链接
  isAdmin: {
    type: String,
    default: '0'
  }, // 是否是登录用户菜单 1：是，0：否
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
})

MenuSchema.index({ id: -1 })

MenuSchema.plugin(baseModel)

let Menu = mongoose.model('Menu', MenuSchema)

module.exports = Menu
