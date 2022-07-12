<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
      @input="inputFn"
    />
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
        <!-- <van-cell
          v-for="(item, index) in searchList"
          :key="index"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        /> -->
        <SongItem
          v-for="(item, index) in searchList"
          :key="index"
          :author="item.ar[0].name"
          :name="item.name"
          :id="item.id"
        ></SongItem>
      </van-list>
    </template>
  </div>
</template>
<script>
import SongItem from '@/components/SongItem.vue';
import { getSearchTagApi, getSearchListApi } from '@/apis';

export default {
  components: {
    SongItem,
  },
  data() {
    return {
      tags: [],
      // 搜索框。
      value: '',
      searchList: [],
      loading: false, //当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。此时可以发起异步操作并更新数据，数据更新完毕后，需手动把loading 设置成 false .
      finished: false, //若数据已全部加载完毕，则直接将 finished 设置成 true .
      page: 1,
      limit: 20,
      timer: null,
    };
  },
  created() {
    this.getTagsList();
  },
  methods: {
    // A、数据铺设【热门搜索】，hot  莫妮卡
    async getTagsList() {
      try {
        const res = await getSearchTagApi();
        this.tags = res.data.result.hots;
        console.log(this.tags);
      } catch (e) {
        console.log('e', e);
      }
    },
    // B、封装请求列表数据的方法，
    async getSearchList() {
      try {
        const res = await getSearchListApi({
          keywords: this.value,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        });
        return res.data.result.songs || [];
      } catch {
        //报错返回【】
        return [];
      }
    },
    // 1、点击input框事件
    async clickFn(val) {
      // 1.2
      this.page = 1;
      this.finished = false;
      //1.1给搜索框，绑定v-model
      this.value = val;
      this.searchList = await this.getSearchList();
    },

    //2、 输入input事件

    // 防抖：减少数据请求的频率。
    // n秒后触发
    async inputFn() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(async () => {
        // 2.2
        this.page = 1;
        this.finished = false;
        // 2.1
        if (!this.value.trim()) {
          this.searchList = [];
          return;
        }
        this.searchList = await this.getSearchList();
      }, 1000);
    },

    // 3、加载更多
    // limit ：一次拿多少数据
    // offset ：偏移量，(this.page-1)*limit
    async onLoad() {
      // 触发page，要加加
      this.page++;
      const res = await this.getSearchList();
      // 如果数据没有了，让this.finished = true
      if (res.length == 0) {
        this.finished = true;
        this.loading = false;
        return;
      }
      this.searchList = [...this.searchList, ...res];
      this.loading = false;
    },
  },
};
</script>
<style lang="less">
.van-list .van-cell__value {
  padding-top: 10px;
  // 让图标宽度为30px
  flex: 0 0 30px;
}
</style>
