<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td><slot name="name" :row="item"></slot></td>
          <td><slot name="age" :row="item"></slot></td>
          <td><slot name="toux" :row="item"></slot></td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '小传同学',
          age: 18,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg',
          type: 0,
        },
        {
          name: '小黑同学',
          age: 25,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg',
          type: 1,
        },
        {
          name: '智慧同学',
          age: 21,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg',
          type: 2,
        },
      ],
    };
  },
};
</script>
