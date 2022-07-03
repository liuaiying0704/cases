<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <!-- 3\ -->
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel == 'all' }"
          @click="change('all')"
          href="javascript:;"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'no' }"
          @click="change('no')"
          href="javascript:;"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'yes' }"
          @click="change('yes')"
          href="javascript:;"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  // 3、父传子
  props: ['count'],
  data() {
    return {
      isSel: 'all',
    };
  },
  methods: {
    change(val) {
      // （1）样式切换
      this.isSel = val;
      // （2）子传父,footer
      this.$emit('filterDate', val);
    },
    // 5.0
    clear() {
      this.emit('clear');
    },
  },
};
</script>
