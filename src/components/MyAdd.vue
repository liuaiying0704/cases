<template>
  <div class="box">
    <div>
      <input type="text" placeholder="书名" v-model.trim="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model.trim="bookObj.author" />
    </div>
    <div>
      <input
        type="text"
        placeholder="出版社"
        v-model.trim="bookObj.publisher"
      />
    </div>
    <button @click="addBook" ref="dis" :class="{ bgc: true }">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookObj: { bookname: '', author: '', publisher: '' },
    };
  },
  methods: {
    addBook() {
      this.$refs.dis.disabled = true;
      if (
        this.bookObj.bookname == '' ||
        this.bookObj.author == '' ||
        this.bookObj.publisher == ''
      )
        return alert('please enter');
      //按钮设置灰
      this.$axios({
        url: '/api/addbook',
        method: 'post',
        data: { ...this.bookObj },
      }).then((res) => {
        alert(res, '添加成功');
        // this.$refs.de.style = 'display : block';
        this.$nextTick(() => (this.$refs.dis.style = 'disabled :false'));
        this.bookObj = {};
      });
    },
  },
};
</script>

<style>
.bgc {
  background-color: red;
}
</style>
