<demo>示例一</demo>

<template>
  <div>
    <Tabs v-model:selected="navSelected">
      <TabItem title="导航一">内容一</TabItem>
      <TabItem title="导航二">内容二</TabItem>
      <TabItem title="导航三">内容三</TabItem>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import TabItem from "../lib/TabItem.vue";
import { ref } from "vue";
export default {
  components: { Tabs, TabItem },
  setup() {
    const navSelected = ref("导航一");
    return { navSelected };
  },
};
</script>