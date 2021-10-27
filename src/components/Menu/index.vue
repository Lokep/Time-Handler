<style lang="less" scoped>
.menu {
  height: 100vh;
  box-sizing: border-box;
  padding: 16px 8px;
  background-color: #fff;
  flex-shrink: 0;

  &-item {
    cursor: pointer;
    box-sizing: border-box;
    padding: 8px 16px;
    color: #777;
    display: flex;
    align-items: center;
    border-radius: 4px;

    font-size: 14px;

    &.is-active {
      background-color: #409EFF;
      color: #fff;
    }

    & + & {
      margin-top: 10px;
    }

    &__icon {
      margin-right: 5px;
      font-size: 17px;
    }
    
  }
}
</style>
<template>
  <div class="menu">
    <!-- <div class="menu-item" v-for="(item, index) in menus" :key="index">
      <div :class="'menu-item__icon iconfont ' + item.meta?.icon"></div>
      <router-link :to="item.path">{{ item.meta?.title || item.name }}</router-link>
    </div> -->

    <router-link
      v-for="(item, index) in menus" :key="index"
      :to="item.path"
      custom
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <div :class="'menu-item ' + (isActive ? 'is-active' : '')" @click="$router.push(href)">
        <div :class="'menu-item__icon iconfont ' + item.meta?.icon"></div>
        <div>{{ item.meta?.title || item.name }}</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { routes } from '@/router/index'
import { RouteRecordRaw } from 'vue-router'

const getMenuList = (routes: Array<RouteRecordRaw>, parentPath: String = '/'): Array<any> => {
  if (routes.length > 0) {
    return routes.reduce((result: any, item) => {
      if (item.children && item.children.length > 0) {
        return [...result, ...getMenuList(item.children, item.path)]
      } else {
        item.path === '' && (item.path = parentPath + item.path)
        return [...result, item]
      }
    }, [])
  } else {
    return []
  }
}

export default defineComponent({
  setup() {

    return {
      menus: (getMenuList(routes) || []).filter(item => !item.meta || !item.meta.hide)
    }
  }
})
</script>