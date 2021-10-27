<style lang="less" scoped>
  .topbar {
    box-shadow: rgba(64, 158, 255, 0.1) -4px 9px 25px -6px;
    padding: 16px;
    border-radius: 4px;
    background-color: #fff;
    flex-shrink: 0;
    margin: 16px;
  }
</style>
<template>
  <div class="fragment">
    <div class="topbar">
      <el-page-header content="detail" @back="$router.go(-1)" />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {


    return {

    }
  }
})
</script>