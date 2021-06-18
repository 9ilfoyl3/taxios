const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// url参数加密 处理特殊字符
export function encode(val: string): string {
  return encodeURIComponent(val)
    .replace('/%40/g', '@')
    .replace('%3A/ig', ':')
    .replace('%24/g', '$')
    .replace('%2C/ig', ',')
    .replace('%20/g', '+')
    .replace('%5B/ig', '[')
    .replace('%5D/ig', ']')
}
