import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;

// 方式三，只需下面的配置
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// 方式1，，1、下载npm i babel-plugin-import -D   2、babel.config.js配置   3、下面引入
// 接着你可以在代码中直接引入 Vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button, Form, Field } from 'vant';
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
