<template>
  <div>
    <MyHeader :background="blue" title="tabbar" :tabList="tabList"></MyHeader>
    <div class="main">
      <component :is="comName"> </component>
    </div>
    <MyTabBar></MyTabBar>
  </div>
</template>

<script>
import MyTabBar from './components/MyTabBar.vue';
import MyHeader from './components/MyHeader.vue';
export default {
  components: {
    MyTabBar,
    MyHeader,
  },
  data() {
    return {
      tabList: [
        // 底部导航的数据
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    };
  },
};
</script>

<style></style>
