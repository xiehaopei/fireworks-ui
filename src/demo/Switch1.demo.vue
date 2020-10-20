<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-18 22:58:02
 * @LastEditTime: 2020-10-21 00:01:58
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\demo\Switch1.demo.vue
 * @
-->
<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>