<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-02 23:27:28
 * @LastEditTime: 2020-10-06 15:48:39
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\App.vue
-->
<template>
<router-view></router-view>
</template>

<script lang="ts">
import {
  provide,
  ref
} from "vue";
import router from './router';
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide("visible", asideVisible);
    router.afterEach(() => {
      width <= 500 ? asideVisible.value = false : asideVisible.value = true
    })
  },
};
</script>
