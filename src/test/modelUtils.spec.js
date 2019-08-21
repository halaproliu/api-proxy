const expect = require('chai').expect
// const modelUtils = require('../utils/modelUtils')
import { genSuccessResponse } from '../utils/modelUtils'

describe('utils/modelUtils', () => {
  it('测试生成response方法', () => {
    const opts = {
      a: 1
    }
    let result = genSuccessResponse(opts)
    // expect(result.data.a).to.be.a('Object')
    expect(result.data.a).to.equal(1)
  })
})
