import axios from 'axios'
import { Message } from 'element-ui'

const http = axios.create({
    baseURL: 'http://localhost:3000/'
})

// 请求拦截
http.interceptors.request.use( config => {
    // 登录是否失效
    // 验证登录是否失效
    if(sessionStorage.elementToken){
        config.headers.Authorization = sessionStorage.elementToken;
    }
    return config
})

// 响应拦截
http.interceptors.response.use( res => {
    return res
}, err => {
    console.log(err.response);
    Message.error(err.response.data);
})

export default http