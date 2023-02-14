<script setup lang='ts'>
import { ref } from 'vue'

const onSubmit = () => {
}
const username = ref('')
const password = ref('')
const emit = defineEmits(['goToRegister', 'goToEmail'])
</script>
<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
  </van-form>
  <div class="text-sm my-4 mx-7 flex justify-between">
    <span>还没有账号？
      <button
        class="text-blue-500"
        @click="emit('goToRegister')"
      >
        去注册
      </button></span>
    <button class="text-blue-500">
      忘记密码
    </button>
  </div>
  <div style="margin: 16px;">
    <van-button
      round
      block
      type="primary"
      native-type="submit"
    >
      登录
    </van-button>
  </div>
  <van-divider>
    其他登录方式
  </van-divider>
  <div class="text-center">
    <van-icon
      name="envelop-o"
      @click="emit('goToEmail')"
    />
  </div>
</template>

