const genSuccessResponse = data => {
  const defaults = {
    responseCode: '000000',
    responseMsg: '成功'
  }

  return {
    ...defaults,
    data
  }
}

export { genSuccessResponse }
