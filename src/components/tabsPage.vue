<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-06 16:30:24
 * @LastEditTime: 2020-10-14 14:47:40
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\tabsPage.vue
 * @
-->
<template>
  <div>
    <h1>示例一</h1>
    <Tabs>
      <Tab title="导航一">内容一</Tab>
      <Tab title="导航二">内容二</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: { Tabs, Tab },
};
</script>