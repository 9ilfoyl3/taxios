import { TaxiosRequestConfig } from './types'
import { buildUrl } from './helpers/url'
import { configRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
import xhr from './xhr'

function taxios(config: TaxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 处理请求 Config
function processConfig(config: TaxiosRequestConfig): void {
  config.url = completeUrl(config)
  config.headers = renameHeaders(config)
  config.data = processRequestData(config)
}

// 拼接 URL 参数
function completeUrl(config: TaxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url, params)
}

// 处理请求 data
function processRequestData(config: TaxiosRequestConfig): any {
  return configRequest(config.data)
}

// 处理请求 headers
function renameHeaders(config: TaxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default taxios
