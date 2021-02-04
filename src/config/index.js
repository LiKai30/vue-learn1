/**
 * 项目的配置文件
 */

const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production.com'
  : 'http://localhost:4000'


export  {
  baseURL
}
