<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputShow"
            v-focus
            @blur="scope.row.inputShow = false"
            v-model="scope.row.inputValue"
            @keydown.enter="keydownFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputShow = true"
          >
            +Tag
          </button>
          <span
            v-for="(item, index) in scope.row.tags"
            :key="index"
            style="margin-right: 8px"
            class="btn btn-warning"
            >{{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue';
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url: '/api/goods',
    }).then((res) => {
      res.data.data.forEach((ele) => {
        // 添加inputShow=true/false,控制状态
        ele.inputShow = false;
      });
      this.list = res.data.data;
      console.log(this.list);
    });
  },
  methods: {
    del(id) {
      let index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    // tag,input shuru
    keydownFn(obj) {
      if (obj.inputValue.trim() == '') {
        return alert('please enter');
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    },
  },
};
</script>

<style></style>
