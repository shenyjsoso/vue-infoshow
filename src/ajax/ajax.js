import axios from 'axios'
import Qs from 'qs'
import router from '@/router'
//url拼接
function redirectAjax(url, param) {
    var tro = Qs.stringify(param)
    return url + '?' + tro
}

/**
 * 获取一个新的自定义的axios实例
 */
let ajax = new axios.create({
    // timeout: 600000,
    //设置Content-Type
    headers: {
        'content-type': 'application/json',
    },
})

//请求拦截器
ajax.interceptors.request.use(
    function(config) {
        // let loginSession = window.sessionStorage.loginSession
        // if (loginSession) {
        //     // 在发送请求之前做些什么，例如加入token
        //     ajax.defaults.headers.common['X-CSRF-TOKEN'] = Cookies.get(getCookieKey())
        //     config.headers['X-CSRF-TOKEN'] = Cookies.get(getCookieKey())
        //     return config
        // } else {
        //     return config
        // }
        // sso-header
        let Authorization = sessionStorage.getItem('token_type') + ' ' + sessionStorage.getItem('access_token')
        ajax.defaults.headers.common['Authorization'] = Authorization
        config.headers['Authorization'] = Authorization
        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

//响应拦截器
ajax.interceptors.response.use(
    function(response) {
        // 在接收响应做些什么，例如跳转到登录页 
        if (response?.data?.code == 401) {
            router.push({
                path: '/',
            })
        }
        return response
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)

export { ajax, redirectAjax }