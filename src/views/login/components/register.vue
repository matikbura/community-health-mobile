<script setup lang='ts'>
import { ref } from 'vue'

const onSubmit = () => {
}
const username = ref('')
const password = ref('')
const email = ref('')
const code = ref('')
const emit = defineEmits(['back'])
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
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请输入邮箱' }]"
      />
      <van-field
        v-model="code"
        center
        clearable
        label="验证码"
        placeholder="验证码"
      >
        <template #button>
          <van-button
            size="small"
            type="primary"
          >
            发送验证码
          </van-button>
        </template>
      </van-field>
    </van-cell-group>
  </van-form>
  <div class="p-6 space-y-2">
    <van-button
      round
      block
      type="primary"
      native-type="submit"
    >
      登录
    </van-button>
    <van-button
      round
      block
      @click="emit('back')"
    >
      返回
    </van-button>
  </div>
</template>

