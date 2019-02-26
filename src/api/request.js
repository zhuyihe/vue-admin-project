import axios from "axios";
import router from "../router/router";
import {
    Message
} from "element-ui";
import QS from "qs";
import {
    Loading
} from "element-ui";
// const service = axios.create({
//   timeout: 60000,
//   baseURL: process.env.BASE_URL
// });
axios.defaults.timeout = 60000;
axios.defaults.baseURL = '/api';
console.log()
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
let loading = null;
/*
 *请求前拦截
 *用于处理需要请求前的操作
 */
axios.interceptors.request.use(
    config => {
        console.log(config);
        loading = Loading.service({
            text: "正在加载中......",
            fullscreen: true
        });
        var access_token = window.localStorage["access_token"];
        if (access_token) {
            config.headers["Authorization"] = "Bearer " + access_token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
let messages = function (type, message) {
    let tip = message;
    Message({
        type: type,
        message: message
    });
};
/*
 *请求响应拦截
 *用于处理数据返回后的操作
 */
axios.interceptors.response.use(
    response => {
        //请求成功后关闭加载框
        if (loading) {
            loading.close();
        }
        const res = response.data;
        if (res.err_code == 0) {
            return Promise.resolve(res);
        } else {
            return Promise.reject(res);
        }
    },
    error => {
        //请求成功后关闭加载框
        if (loading) {
            loading.close();
        }
        //断网处理或者请求超时
        if (!error.response) {
            //请求超时
            if (error.message.includes("timeout")) {
                console.log("超时了");
                messages("error", "请求超时，请检查互联网连接");
            } else {
                //断网，可以展示断网组件
                console.log("断网了");
                messages("error", "请检查网络是否已连接");
            }
            return;
        }
        const status = error.response.status;
        switch (status) {
            case 500:
                messages("error", "服务器内部错误，详情请咨询聚保服务热线:40080-59680");
                break;
            case 404:
                messages(
                    "error",
                    "未找到远程服务器，详情请咨询聚保服务热线:40080-59680"
                );
                break;
            case 403:
                messages("warning", "用户登陆过期，请重新登陆");
                localStorage.removeItem("access_token");
                setTimeout(() => {
                    router.replace({
                        path: "/login",
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }, 1000);
                break;
            case 400:
                messages("error", "数据异常，详情请咨询聚保服务热线");
                break;
            default:
                messages("error", error.response.data.message);
        }
        return Promise.reject(error);
    }
);
/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            });
    });
}
/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            });
    });
}