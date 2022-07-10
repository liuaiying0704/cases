//配置路由
import Vue from 'vue';
// 下载  引入 注册  配置路由规则  生成路由对象（router）导出
import VueRouter from 'vue-router';

import Layout from '@/views/Layout';
import Home from '../views/Home';
import Search from '../views/Search';

Vue.use(VueRouter);
const routes = [
  {
    path: '/layout',
    component: Layout,
    children: [
      { path: 'home', component: Home, meta: { title: '首页' } },
      { path: 'search', component: Search, meta: { title: '搜索' } },
    ],
  },
  { path: '/', redirect: '/layout/home' },
];
const router = new VueRouter({ routes });
export default router;
