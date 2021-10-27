import '@/assets/styles/common.less';
import '@/assets/styles/iconfont.less';


import { createApp } from "vue";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).use(ElementPlus, { size: 'small' }).mount("#app");
