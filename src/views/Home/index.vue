<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>
    <!--  -->
    <van-cell title="最佳匹配" class="title" />
    <!-- <van-cell
      :label="`${
        (item.song &&
          item.song.artists &&
          item.song.artists[0] &&
          item.song.artists[0].name) ||
        '未知歌手'
      }-${item.name}`"
      :title="item.name"
      v-for="item in songList"
      :key="item.id"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell> -->
    <SongItem
      v-for="(item, index) in songList"
      :key="index"
      :author="
        item.song &&
        item.song.artists &&
        item.song.artists[0] &&
        item.song.artists[0].name
      "
      :name="item.name"
      :id="item.id"
    ></SongItem>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem.vue";
import { getRecommendListApi, getNewSongListApi } from "@/apis";
export default {
  components: { SongItem },
  data() {
    return {
      list: [],
      songList: [],
    };
  },
  mounted() {
    this.getList();
    this.getNewSongList();
  },
  methods: {
    async getList() {
      try {
        const res = await getRecommendListApi({ limit: 6 });
        this.list = res.data.result;
        console.log(this.list);
      } catch (e) {
        console.log("e", e);
      }
    },
    async getNewSongList() {
      try {
        const res = await getNewSongListApi();
        this.songList = res.data.result;
        console.log(this.songList);
      } catch (e) {
        console.log("e", e);
      }
    },
  },
};
</script>

<style lang="less">
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
  .van-cell__value {
    padding-top: 10px;
    // 让图标宽度为30px
    flex: 0 0 30px;
  }
  // .van-cell__label {
  //   white-space: nowrap;
  // }
}
</style>
