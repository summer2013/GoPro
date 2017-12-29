import config from './config'
import axios from 'axios'

export default async(url, params = {}, type = 'get', fn) => {
  let result
  // 判断fn自定义修改请求数据
  if (fn && typeof fn === 'function') {
    Object.assign(config, {
      transformRequest: fn
    })
  }
  if (type === 'get' || type === 'delete') {
    let str = ''
    Object.keys(params).forEach(key => {
      str += `${key}=${params[key]}&`
    })
    if (str !== '') {
      str = str.substring(0, str.length - 1)
      url = `${url}?${str}`
    }
    try {
      result = await axios[type](url, config)
      return result.data
    } catch (err) {
      throw new Error(err)
    }
  }
  if (type === 'post' || type === 'put') {
    try {
      result = await axios[type](url, params, config)
      return result.data
    } catch (err) {
      throw new Error(err)
    }
  }
}

