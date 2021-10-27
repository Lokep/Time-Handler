<style lang="less" scoped>
.container {
  display: flex;
}
.wrapper {
  flex: 1;
}
</style>
<template>
  <div class="container">
    <Menu />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Menu from "@/components/Menu/index.vue"; // @ is an alias to /src

@Options({
  components: {
    Menu
  },
})
export default class Home extends Vue {
  name = 'test'
}
</script>
