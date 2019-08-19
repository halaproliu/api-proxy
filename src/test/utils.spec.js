const expect = require('chai').expect
const utils = require('../utils/index')

describe('utils/index', () => {
  it('测试生成api方法', () => {
    const opts = {
      name: 's',
      isShow: 'b|1'
    }
    let result = utils.generateApi(opts)
    expect(result).to.be.a('Object')
    expect(result.isShow).to.equal(true)
  })
})
