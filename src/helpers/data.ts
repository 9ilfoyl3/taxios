import { isPlainObject } from './util'

// 对象转字符串
export function configRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
}
