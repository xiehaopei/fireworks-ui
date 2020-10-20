<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-18 22:58:07
 * @LastEditTime: 2020-10-18 23:52:31
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\Switch2.demo.vue
 * @
-->
<demo>
支持 disabled
</demo>
<template>
  <Switch v-model:value="bool" disabled />
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
