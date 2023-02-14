<script setup lang='ts'>

</script>

<template>
  <div class="bg-slate-100 h-screen">
    <div class="w-full h-64 bg-blue-400 p-3 flex items-center">
      <van-image
        src="https://p.qqan.com/up/2020-6/2020060316583052133.jpg"
        class="w-20 h-20 shadow"
        round
        fit="cover"
      />
      <div class="ml-2 flex flex-col ">
        <span class="text-white font-bold text-lg">鬼知道起</span>
        <span class="text-gray-200">18276107075</span>
      </div>
    </div>
    <div class="p-3 -mt-16">
      <div class="grid grid-cols-2 rounded-lg shadow  bg-white">
        <div class="h-32 flex items-center justify-center flex-col">
          <div class="text-4xl">
            18
          </div>
          <div>今日任务</div>
        </div>
        <div class="h-32 flex items-center justify-center flex-col">
          <div class="text-4xl">
            32
          </div>
          <div>未完成任务</div>
        </div>
      </div>
      <div class="mt-2 rounded-lg shadow  bg-white">
        <van-cell
          title="基本信息"
          is-link
          to="index"
        />
        <van-cell
          title="产品介绍"
          is-link
          to="index"
        />
        <van-cell
          title="版本说明"
          value="v-1.0.0"
        />
        <van-cell
          title="当前角色"
          value="普通职员"
        />
        <van-cell
          title="退出登录"
          is-link
        />
      </div>
    </div>
  </div>
</template>

