import Vue from 'vue';
import App from './App.vue';
// 1、引入基本文件
import '@/assets/mobile/flexible';
import '@/assets/styles/reset.css';
// 2、引入路由
import router from '@/router';

// 3、引入vant
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Image as VanImage,
  Icon,
  Search,
  Tag,
  List,
  Toast,
} from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);
Vue.use(Toast);
// 报错
// let routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch((err) => err);
// };
// 请求
// import { getRecommendListApi } from './apis/index';
// async function fn() {
//   try {
//     const res = await getRecommendListApi();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }
// fn();

Vue.config.productionTip = false;
new Vue({
  // 2、引入路由
  router,
  render: (h) => h(App),
}).$mount('#app');
