<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->
    <template v-if="searchList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="#ccc"
          text-color="#000"
          size="large"
          plain
          round
          type="primary"
          style="margin-right: 6px"
          v-for="(item, index) in tags"
          :key="index"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <!-- 最佳匹配 -->
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchTagApi, getSearchListApi } from '@/apis';
export default {
  data() {
    return {
      tags: [],
      // 搜索框
      value: '',
      searchList: [],
      loading: false,
      finished: true,
    };
  },
  created() {
    this.getTagsList();
  },
  methods: {
    // 数据铺设【热门搜索】，hot  莫妮卡
    async getTagsList() {
      try {
        const res = await getSearchTagApi();
        this.tags = res.data.result.hots;
        console.log(this.tags);
      } catch (e) {
        console.log('e', e);
      }
    },
    async clickFn(val) {
      //给搜索框，绑定v-model
      this.value = val;
      try {
        const res = await getSearchListApi({ keywords: this.value });
        this.searchList = res.data.result.songs;
        //成功提醒
        this.$toast('请求成功');
      } catch {
        //失败提醒
        this.$toast('请求失败');
      }
    },
    onLoad() {},
  },
};
</script>
