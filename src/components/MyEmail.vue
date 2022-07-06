<template>
  <div>
    <span>选择所在地区（实名认证主体所在地）</span><br />

    <span>手机号:</span>
    <slot name="phone"></slot>
    <br /><br />

    <slot name="yzh"></slot><br /><br />

    <span>登陆密码:</span>
    <br />
    <slot name="inputPassword"></slot><br /><br />
    <slot name="confirmPassword"></slot><br /><br />

    <span>邀请码（选填）</span>
    <slot name="inputText"></slot><br /><br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
  width: 100%;
  height: 30px;
  color: #ccc;
  background-color: yellowgreen;
}
</style>
