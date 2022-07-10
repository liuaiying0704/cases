import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';
// axios
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.config.productionTip = false;

// 引入文件
import MyGoodsList from '@/views/MyGoodsList.vue';
import MyGoodsSearch from '@/views/MyGoodsSearch.vue';
import MyUserInfo from '@/views/MyUserInfo.vue';

//1\
import VueRouter from 'vue-router';
// 2
Vue.use(VueRouter);
// 报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
// 3\
const routes = [
  {
    path: '/mygoodslist',
    component: MyGoodsList,
  },
  { path: '/mygoodssearch', component: MyGoodsSearch },
  { path: '/myusernfo', component: MyUserInfo },
  // 一级，默认首页
  { path: '/', redirect: '/mygoodslist' },
];

// 4\
const router = new VueRouter({ routes });

// 自定义指令
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});
//

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
