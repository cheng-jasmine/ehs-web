import axios from 'axios'; // 引入axios
import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据
// import { Loading, Message } from 'element-ui';

var instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '', // 请求地址url 相对路径
  timeout: 30 * 1000  //超时中断
})
//设置默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


let loadingInstance = '';

// 请求拦截器
instance.interceptors.request.use(
  function (config) {

    // console.log(config, 19);

    // 设置请求动画
    // if (loadingInstance === '' && config.loadingTarget) {

    //   // console.log(Loading, 24);

    //   loadingInstance = Loading.service({
    //     target: config.loadingTarget,
    //     lock: true,
    //     text: 'Loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(255,255,255,0.7)'
    //   });
    // }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    // console.log(response, '++++++')
    // 关闭请求动画
    // if (loadingInstance !== '') {
    //   loadingInstance.close();
    //   loadingInstance = '';
    // }

    // if (typeof (response.data) == 'string' && response.data.indexOf('登录失败') != -1) {
    //   // Message.error('登录信息超时，请重新登录')
    //   setTimeout(() => {
    //     location.href = 'https://m.yuhuan.gov.cn/form/temp/action/v2/ft_2kdvlrzrq7360p8'
    //   }, 2000);

    // } else {
    //   return response;
    // }


  },
  function (error) {
    // console.log(error, '--------')
    // 关闭请求动画
    if (loadingInstance !== '') {
      loadingInstance.close();
      loadingInstance = '';
    }

    return Promise.reject(error);
  }
);

// 请求封装
var httpRequest = {
  // get请求
  get(url, params, otherConfigs) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url: url,
        params: params,
        ...otherConfigs,
      }).then(response => {
        // 请求成功
        resolve(response.data)
      }).catch(err => {
        // 请求失败
        // console.log('请求失败')
        reject(err)
      })
    })
  },
  // post请求
  post(url, data, otherConfigs) {
    var isObject = Object.prototype.toString.call(data) == '[object Object]' ? true : false;
    // console.log(isObject, data)
    // console.log(isObject)
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: url,
        data: isObject ? otherConfigs && otherConfigs.cancelQs ? data : qs.stringify(data) : data,
        ...otherConfigs,
      }).then(response => {
        // 请求成功
        console.log(response,'请求成功')
        resolve(response.data)
      }).catch(err => {
        // 请求失败
        console.log('请求失败')
        reject(err)
      })
    })
  }
}

export default httpRequest
