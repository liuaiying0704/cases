import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import axios from 'axios';
// 请求的根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006';
Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
