import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// 1.0 样式引入
// 在素材的文件下 直接拖进来就可以了
import './assets/styles/base.css';
import './assets/styles/index.css';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
