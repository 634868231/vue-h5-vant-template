import axios from 'axios'
import { Toast } from 'vant';
import store from '@/store'

// 设置axios跨域访问
axios.defaults.withCredentials = true // 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.crossDomain = true // 设置axios跨域的配置

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // base api url
  timeout: 3 * 60 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.headers['X-Token'] = 123
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res) {
      return res
    } else {
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast(error.message || '程序异常');
    return Promise.reject(error)
  }
)

export default service