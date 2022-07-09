import Vue from 'vue';
import App from './App.vue';
// 引入组件文件
// 一级
import Details from '@/views/Details.vue';
import Sort from '@/views/Sort.vue';
import My from '@/views/My.vue';
import Home from '@/views/Home.vue';

// 二级
import Math from '@/views/second/Math.vue';
import Science from '@/views/second/Science.vue';
import English from '@/views/second/English.vue';

// 三级
import Tom from '@/views/third/Tom.vue';
import Andy from '@/views/third/Andy.vue';
import Lay from '@/views/third/Lay.vue';

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
    path: '/my',
    component: My,
    children: [
      // 二级默认页面
      { path: '', redirect: 'math' },
      { path: 'math', component: Math },
      { path: 'science', component: Science },
      {
        path: 'english',
        component: English,
        children: [
          // 三级默认页面
          { path: '', redirect: 'tom' },
          { path: 'tom', component: Tom },
          { path: 'andy', component: Andy },
          { path: 'lay', component: Lay },
        ],
      },
    ],
  },
  { path: '/sort', component: Sort },
  { path: '/details', component: Details },
  { path: '/home', component: Home },
  // 一级，默认首页
  { path: '/', redirect: '/home' },
];

// 4\
const router = new VueRouter({ routes });

Vue.config.productionTip = false;
new Vue({
  // 5、
  router,
  render: (h) => h(App),
}).$mount('#app');
