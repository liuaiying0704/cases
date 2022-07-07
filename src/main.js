import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';
// axios
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.config.productionTip = false;
// 自定义指令
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});
//
new Vue({
  render: (h) => h(App),
}).$mount('#app');
