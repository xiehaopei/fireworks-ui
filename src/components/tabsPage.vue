<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-06 16:30:24
 * @LastEditTime: 2020-10-16 11:17:05
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\tabsPage.vue
 * @
-->
<template>
  <div>
    <h1>示例一</h1>
    <Tabs :selected="navSelected" @update:selected="navSelected = $event">
      <Tab title="导航一">内容一</Tab>
      <Tab title="导航二">内容二</Tab>
      <Tab title="导航三">内容三</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const navSelected = ref("导航一");
    return { navSelected };
  },
};
</script>