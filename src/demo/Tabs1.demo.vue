<demo>示例一</demo>

<template>
  <div>
    <Tabs v-model:selected="navSelected">
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