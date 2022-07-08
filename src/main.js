import Vue from 'vue';
import App from './App.vue';
//
import Find from '@/views/Find.vue';
import My from '@/views/My.vue';
import Part from '@/views/Part.vue';
// 1、vue-router的使用，下载yarn add vue-router
// 2、引入
import VueRouter from 'vue-router';
// 3、注册全局插件
Vue.use(VueRouter);
// 4、规则数组
const routes = [
  { path: '/find', component: Find },
  { path: '/my', component: My },
  { path: '/part', component: Part },
];
// 5、生成路由对象
const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  // 6.
  router,
  render: (h) => h(App),
}).$mount('#app');
