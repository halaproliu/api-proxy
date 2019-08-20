import { expect } from 'chai'
import { POST } from '../utils/http'

describe('/api/getIntelligentEvaluateStatus', () => {
  it('测试getIntelligentEvaluateStatus接口', async () => {
    const res = await POST('/api/getIntelligentEvaluateStatus')
    expect(res.responseCode).to.equal('000000')
    expect(res.data).to.be.a('object')
    expect(res.data).to.have.property('barCode')
    expect(res.data).to.have.property('evaluateFlag')
  })
})
