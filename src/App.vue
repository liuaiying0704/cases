<template>
  <div class="todoapp">
    <TodoHeader @add="addFn"></TodoHeader>
    <!-- 4.2<TodoMain :list="list" @del="delFn"></TodoMain> -->
    <TodoMain :list="showList" @del="delFn"></TodoMain>

    <TodoFooter
      :count="count"
      @filterDate="filterDateFn"
      @clear="clearFn"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  components: { TodoHeader, TodoMain, TodoFooter },
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 101, name: '睡觉', isDone: false },
        { id: 102, name: '打豆豆', isDone: true },
      ],
      // 4.0
      getSel: 'all',
    };
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
    delFn(id) {
      let index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    // 4\1
    filterDateFn(val) {
      this.getSel = val; //yes,all,no
    },
    // 5.1 把已完成变为false
    clearFn() {
      this.list.forEach((ele) => (ele.isDone = false));
    },
  },
  // 3、剩余统计
  computed: {
    // 3
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    // 4.3计算
    showList() {
      if (this.getSel == 'yes') return this.list.filter((ele) => ele.isDone);
      if (this.getSel == 'no') return this.list.filter((ele) => !ele.isDone);
      else {
        return this.list;
      }
    },
  },
};
</script>

<style></style>
