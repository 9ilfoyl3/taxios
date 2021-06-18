import { TaxiosRequestConfig } from './types'
import xhr from './xhr'

function taxios(config: TaxiosRequestConfig): void {
  xhr(config)
}

export default taxios
