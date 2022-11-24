import httpRequest from './http'   //引入axios封装请求

export default {
    login:param=>httpRequest.post('/member/client/login/json',param),  //登录
    get: (url, param, otherConfigs) => httpRequest.get(url, param, otherConfigs), //get请求带url
    post: (url, param, otherConfigs) => httpRequest.post(url, param, otherConfigs), //post请求带url
}
