<script setup lang='ts'>
import { ref } from 'vue'

const onSubmit = () => {
}
const email = ref('')
const code = ref('')
const emit = defineEmits(['goToRegister'])
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
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

