import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import api from './request/api'
import * as echarts from 'echarts';
import '@/assets/style.less';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$api = api  //请求封装挂载到Vue原型上
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
