import { createRouter, createWebHistory, createWebHashHistory, isNavigationFailure, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";


/**
 * 如果需要在左侧菜单展示
 * 需要在meta对象中写明 
 * title: 如果没有时，则使用路由对象的name属性
 * hide: 如果为true，则不出现在左侧菜单
 */
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    meta: {
      title: '首页',
      icon: 'iconhome'
    },
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: {
          title: 'dashboard',
          icon: 'icondashboard'
        },
        component: () => import("../views/dashboard/index")
      },
      {
        path: "calendar",
        name: "Calendar",
        meta: {
          title: 'calendar',//'日程',
          icon: 'iconcalendar'
        },
        component: () => import("@/views/calendar/index.vue"),
      },
      {
        path: "article",
        name: "Article",
        meta: {
          title: "article",//'文章',
          icon: 'iconarticle'
        },
        component: () => import("@/views/article/index.vue"),
      },
      {
        path: "edit",
        name: "Edit",
        meta: {
          title: "edit",//'文章',
          icon: 'iconedit-filling'
        },
        component: () => import("@/views/article/edit.vue"),
      },
      {
        path: "task",
        name: "Task",
        meta: {
          title: "task",//'任务',
          icon: 'icontask_fill'
        },
        component:  () => import("@/views/task/index.vue"),
      },
      {
        path: "file",
        name: "Wrapper",
        meta: {
          title: "file",//'文件',
          icon: 'iconsucai'
        },
        component:  () => import("@/views/file/wrapper.vue"),
        children: [
          {
            path: "",
            name: "File",
            meta: {
              title: "file",//'文件',
              icon: 'iconsucai'
            },
            component:  () => import("@/views/file/index.vue"),
          },
          {
            path: ":id",
            name: "FileContent",
            meta: {
              title: "file",//'文件',
              hide: true
            },
            component:  () => import("@/views/file/detail.vue"),
          }
        ]
      },
      /**
       * {
       *  path: 'tools',
       *  name: 'Tools',
       * }
       */
      {
        path: "setting",
        name: "Setting",
        meta: {
          title: "setting",//'设置',
          icon: 'iconshezhi'
        },
        component:  () => import("@/views/setting/index.vue"),
      },
    ]
  },

];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log('failed navigation', failure)
  }

  const title: string = typeof (to.meta.title) == 'string' ? to.meta.title : 'Time Handler'
  document.title = title
})

export default router;
