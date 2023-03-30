import axios from 'axios'
// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    timeout: 60 * 1000, // Timeout   备注：暂时注释掉，后期调整。
    withCredentials: true, //设置是否允许携带cookie
})

request.interceptors.request.use(config => {
    return config
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export default request