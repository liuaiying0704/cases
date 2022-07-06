<template>
  <div>
    <div class="box">
      <button
        @click="comName = 'MyPhone'"
        :class="{ active: comName == 'MyPhone' }"
      >
        手机注册
      </button>
      <button
        @click="comName = 'MyEmail'"
        :class="{ active: comName == 'MyEmail' }"
      >
        邮箱注册
      </button>
    </div>

    <div>
      <keep-alive>
        <component :is="comName">
          <template v-slot:phone>
            <input type="text" placeholder="输入手机号" />
          </template>
          <template v-slot:yzh>
            <input type="text" placeholder="输入验证码" />
          </template>

          <template v-slot:inputPassword>
            <input type="password" placeholder="输入密码" />
          </template>

          <template v-slot:confirmPassword>
            <input type="password" placeholder="再次输入密码" />
          </template>
          <template v-slot:inputText>
            <input type="text" placeholder="输入邀请码" />
          </template>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MyPhone from './components/MyPhone.vue';
import MyEmail from './components/MyEmail.vue';
export default {
  data() {
    return {
      comName: 'MyPhone',
    };
  },

  components: {
    MyPhone,
    MyEmail,
  },
};
</script>

<style>
.active {
  border-bottom: 3px solid blue;
}

.box {
  width: 100%;
  height: 45px;
  color: #ccc;
  display: flex;
  background-color: pink;
}
button {
  width: 50%;
  border: transparent;
}
.left {
  flex: 1;
}
.right {
  flex: 1;
}
</style>
