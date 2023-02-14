<script setup lang='ts'>
import Login from './components/login.vue'
import Register from './components/register.vue'
import Email from './components/email.vue'
import { computed, ref } from 'vue'
const isActive = ref('login')
const title = computed(() => {
  switch (isActive.value) {
    case 'login':
      return '登录'
    case 'register':
      return '注册'
    case 'email':
      return '邮箱登录'
    default:
      return '登录'
  }
})
</script>

<template>
  <div class="h-screen w-screen bg-slate-100 px-2 flex justify-center items-center">
    <div class="bg-white w-full">
      <div class=" text-2xl  p-5 text-center">
        {{ title }}
      </div>
      <div>
        <login
          v-if="isActive==='login'"
          @go-to-register="isActive='register'"
          @go-to-email="isActive='email'"
        />
        <register
          v-if="isActive==='register'"
          @go-to-login="isActive='login'"
          @back="isActive='login'"
        />
        <email
          v-if="isActive==='email'"
          @back="isActive='login'"
        />
      </div>
    </div>
  </div>
</template>
