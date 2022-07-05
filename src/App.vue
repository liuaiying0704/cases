<template>
  <div>
    <!-- 1、搜索 -->
    <input
      type="text"
      placeholder="搜索书名"
      v-model.trim="searchBook"
      @keydown.enter="keydownFn"
    /><br /><br /><br />
    <!-- 2、表格-->
    <table border="1" width="700" style="border-collapse: collapse">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <MyMain
          v-for="item in list"
          :key="item.id"
          :obj="item"
          @del="delFn"
        ></MyMain>
      </tbody>
    </table>
    <!-- 3、添加 -->
    <MyAdd></MyAdd>
  </div>
</template>
<script>
import MyAdd from './components/MyAdd.vue';
import MyMain from './components/MyMain.vue';
export default {
  data() {
    return {
      list: [],
      searchBook: '',
      flag: true,
    };
  },
  components: {
    MyMain,
    MyAdd,
  },
  created() {
    // 铺设数据
    this.$axios({
      url: '/api/getbooks',
    }).then((res) => {
      this.list = res.data.data;
      // console.log(this.list);
    });
  },
  methods: {
    // 搜索功能
    keydownFn() {
      // this.list = this.list.filter((ele) => ele.bookname == this.searchBook);
      // this.searchBook = '';
      if (this.searchBook == '') {
        alert('Please select a book to searchBook');
      }

      this.$axios({
        url: '/api/getbooks',
        params: {
          bookname: this.searchBook,
        },
      }).then((res) => {
        console.log(res);
        this.list = res.data.data;
      });
    },
    delFn(id) {
      //发起请求get删除。
      this.$axios({
        url: '/api/delbook',
        params: {
          id,
        },
      }).then((res) => {
        console.log(res.status);
        if (res.status == 500) {
          alert('未指定要删除的图书Id');
        } else if (res.status == 501) {
          alert('执行Sql报错');
        } else if (res.status == 502) {
          alert('要删除的图书不存在');
        } else if (res.status == 200) {
          alert('删除成功');
        }
      });
    },
  },
};
</script>

<style></style>
