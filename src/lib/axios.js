/**
 * 封装axios
 */
import axios from 'axios'
import {baseURL} from '@/config'
class HttpRequest {
  constructor(url = baseURL){ // 构造函数
    // 默认值是baseURL，如果url参数为空
    console.log(url)
    this.baseUrl = url;
    this.queue = {}; // 用来处理多次请求的loading
  }

  // 全局配置
  getInsideConfig(){
    const config = {
      baseUrl: this.baseUrl,
      headers:{

      }
    }
    return config
  }

  // 全局拦截
  interceptors(instance, url){
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading
      if(!Object.keys(this.queue).length){
        // 开启loading
      }
      this.queue[url] = true;
      console.log('axios请求拦截其')
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      // 响应拦截器
      delete this.queue[url];
      console.log(res);
      // 对请求数据进行预处理

      return res
    }, error => {
      delete this.queue[url];
      return Promise.reject(error)
    })  
  }

  request(options){
    const instance = axios.create()
    // 配置合并
    options = Object.assign(this.getInsideConfig(), options);
    console.log(options);
    this.interceptors(instance, options.url)
    return instance(options)
  }


}

export default HttpRequest