<template>
  <van-cell :label="`${author || '未知歌手'}-${name}`" :title="name">
    <template>
      <van-icon color="#000" name="play-circle-o" size="28" @click="goPlay" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    author: String,
    name: String,
    id: Number,
  },
  methods: {
    goPlay() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style></style>
