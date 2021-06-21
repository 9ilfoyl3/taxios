import { isDate, isPlainObject, encode } from './util'

export function buildUrl(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const pars: string[] = []

  // 解析 params 参数 拼接url
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }

    let vals = []

    if (Array.isArray(val)) {
      vals = val
      key += '[]'
    } else {
      vals = [val]
    }

    vals.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      pars.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = pars.join('&')

  if (serializedParams) {
    // 处理哈希地址
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    // 是否自带参数请求
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
