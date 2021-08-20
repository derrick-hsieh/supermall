import axios from 'axios'
export function request(config) {
    //創建實體
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //axios的攔截器
//請求攔截的作用
    instance.interceptors.request.use(config => {
        // console.log(config);

        return config
    }, err => {
        console.log(err);
    })

    //響應攔截
    instance.interceptors.response.use(res => {
        return res.data
        
    }, err => {
        console.log(err);
    })
    //發送請求
    return instance(config)
}

