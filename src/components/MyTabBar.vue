<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="item in list"
      :key="item.componentName"
      :class="{ current: item.componentName === currentComponentName }"
      @click="clickFn(item.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      validator(val) {
        console.log(val);
        if (val.length >= 2 && val.length <= 5) {
          return true;
        }
        return false;
      },
    },
  },
  data() {
    return {
      currentComponentName: 'MyGoodsList',
    };
  },
  methods: {
    clickFn(val) {
      this.currentComponentName = val;
      this.$emit('change', val); //点击的组件名字val传过去父组件
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>
