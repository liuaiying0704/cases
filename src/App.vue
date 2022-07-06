<template>
  <div>
    <!--    表单每一项都可以自定义
    name 选项如果没有设置 默认展示 name
    age选项如果没有设置 默认展示 age
    headImgUrl 选项根据Type去展示
    0 a标签  1 img  2 文本  必须用slot-->

    <MyComponent>
      <template v-slot:name="scoped">
        <input type="text" v-model="scoped.row.name" />
      </template>

      <template v-slot:age="scoped">
        <input type="text" v-model="scoped.row.age" />
      </template>

      <template v-slot:toux="scoped">
        <img v-if="scoped.row.type == 1" :src="scoped.row.headImgUrl" alt="" />
        <a v-else-if="scoped.row.type == 0" :href="scoped.row.headImgUrl">{{
          scoped.row.headImgUrl
        }}</a>
        <div v-else-if="scoped.row.type == 2">{{ scoped.row.headImgUrl }}</div>
      </template>
    </MyComponent>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue';
export default {
  components: {
    MyComponent,
  },
};
</script>

<style>
input {
  border: transparent;
}
</style>
