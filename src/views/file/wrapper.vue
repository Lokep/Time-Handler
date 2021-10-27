<style lang="less" scoped>
.fragment {
  display: flex;
  flex-direction: column;
}


.wrapper {
  height: 0;
  overflow: auto;
  flex: 1;
}

</style>
<template>
  <div class="fragment">
    
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {

    return {

    }
  }
})
</script>