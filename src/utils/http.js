import http from 'http'
import querystring from 'querystring'

const request = (url, options, postData, success, error) => {
  postData = querystring.stringify(postData)
  const _options = {
    hostname: 'localhost',
    port: 3001,
    path: url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    },
    ...options
  }
  const req = http.request(_options, res => {
    res.setEncoding('utf8')
    res.on('data', chunk => {
      const data = JSON.parse(chunk)
      success(data)
    })
    res.on('end', () => {
      console.log('end')
    })
  })

  req.on('error', e => {
    console.error(`请求遇到问题：${e.message}`)
    error(e)
  })

  req.write(postData)
  req.end()
}

const POST = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST'
    }
    request(url, options, data, res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

const GET = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET'
    }
    request(url, options, data, res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

export {
  GET,
  POST
}
