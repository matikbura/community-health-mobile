<script setup lang='ts'>
import { ref } from 'vue'

const list = ref([])
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
</script>

<template>
  <div class="p-2">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        v-for="item in list"
        :key="item"
        class="w-full p-2 bg-white mt-2 rounded shadow"
      >
        {{ item }}
      </div>
    </van-list>
    <van-back-top bottom="10vh" />
    <div class="fixed top-[15vh] right-8">
      <van-button
        icon="plus"
        round
        size="small"
        type="primary"
      />
    </div>
  </div>
</template>

