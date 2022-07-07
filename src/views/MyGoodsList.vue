<template>
  <div>
    <slot></slot>
    <slot></slot>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue';
export default {
  components: {
    MyTable,
  },
};
</script>

<style></style>
