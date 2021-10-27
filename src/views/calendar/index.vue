<style lang="less" scoped>
  .calendar {
    height: 100vh;

    .rightbar {
      width: 20vw;
      height: 100vh;
      background-color: #fff;
      margin-left: 16px;
      flex-shrink: 0;
    }
  }

</style>
<template>
  <div class="calendar flex">
    <!-- https://element-plus.gitee.io/zh-CN/component/calendar.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9 -->
    <el-calendar v-model="date" />

    <div class="rightbar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {

    const date = ref(new Date())

    return {
      date
    }
  }
})
</script>