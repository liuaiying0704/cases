<template>
  <div style="padding-bottom: 48px">
    <!--  -->
    <van-nav-bar :title="title" />
    <!-- 第二种方法：<van-nav-bar :title="$route.meta.title" /> -->

    <!-- 路由 -->
    <router-view></router-view>
    <!-- tabbar -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  mounted() {
    console.log(this.$route);
    this.title = this.$route.meta.title;
  },
  watch: {
    $route(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      this.title = newVal.meta.title;
    },
  },
};
</script>

<style></style>
