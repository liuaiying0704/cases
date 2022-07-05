<template>
  <tr>
    <td>{{ obj.id }}</td>
    <td>{{ obj.bookname }}</td>
    <td>{{ obj.author }}</td>
    <td>{{ obj.publisher }}</td>
    <td>
      <!-- 按钮 -->
      <button @click="delFn(obj.id)">
        {{ isDel ? '详情' : '删除' }}
      </button>
      <!-- 点击按钮，模态框 -->
      <div class="mask" display="none" ref="de">
        <h3>图书详情</h3>
        <span>书名：</span>
        <input type="text" :value="obj.bookname" /><br />
        <span>作者：</span>
        <input type="text" :value="obj.author" /><br />
        <span>出版商：</span>
        <input type="text" :value="obj.publisher" /><br /><br /><br />
        <button class="detail" @click="detailBtn">确认无误</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      isDel: true,
    };
  },
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    // 一、点击   删除=====详情   按钮，true为详情，false为删除
    delFn(val) {
      if (this.isDel) {
        // 1、点击按钮，详情页
        this.$nextTick(() => {
          // console.log(this.$refs.de);

          // ref操作样式
          this.$refs.de.style = 'display : block';
          // this.$refs.de.$el.style.display = 'block';//错误的
        });
      } else {
        // 确认详情，，即可删除
        this.$emit('del', val);
        this.isDel = true;
      }
    },

    // 二、模态框详情
    detailBtn() {
      this.$nextTick(() => {
        // 1、点击确认按钮，关闭模态框
        this.$refs.de.style = 'display :none';
        // 2、isDel，控制为false,可以去执行删除操作。
        this.isDel = false;
      });
    },
  },
};
</script>

<style scoped>
th,
td {
  width: 100px;
  border: 1px solid rgb(99, 91, 91);
}
.mask {
  width: 300px;
  height: 300px;
  background-color: #ccc;
  display: none;
  position: absolute;
  right: -400px;
  top: 0;
}
tr {
  position: relative;
}
.detail {
  position: absolute;
  left: 200px;
  top: 200px;
}
</style>
