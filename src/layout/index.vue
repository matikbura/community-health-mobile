<script setup lang='ts'>
import { computed, ref, watch } from 'vue'
import { routes } from '~/router'
import { useRoute } from 'vue-router'
const route = useRoute()
const active = ref<number|string>('home')

const current = ref({})
//监听当前路由变化
watch(route, (val) => {
  current.value = val.meta
}, { immediate: true })
const onClickLeft = () => {
  active.value = 'home'
}
</script>

<template>
  <div class="bg-slate-100 min-h-[100vh]">
    <van-nav-bar
      v-if="current.isHead"
      :title="current.title"
      :left-arrow="current.isBack"
      @click-left="onClickLeft"
    />
    <router-view />
    <div class="h-[70px]" />
    <van-tabbar
      v-model="active"
      route
    >
      <template
        v-for="item in routes"
        :key="item.name"
      >
        <van-tabbar-item
          v-if="item.meta.isTag"
          :icon="item.meta?.icon"
          :name="item.name"
          :to="item.path"
          class="text-xl"
        >
          {{ item.meta?.title }}
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>



