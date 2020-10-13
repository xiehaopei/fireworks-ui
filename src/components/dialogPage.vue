<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-06 16:29:58
 * @LastEditTime: 2020-10-13 09:41:17
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\dialogPage.vue
 * @
-->
<template>
  <div>
    <Button @click="toggleDialog">切换</Button>
    <Dialog :visible="visible" @update:visible="visible = $event" :ok="fun1" :cancel="fun2">
      <template v-slot:title>
        <div>你好</div>
      </template>
      <template v-slot:content>
        <div>你好</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggleDialog = () => {
      visible.value = !visible.value;
    };
    const fun1 = () => {
      console.log(1);
      return false;
    };
    const fun2 = () => {
      console.log(2);
    };
    return { visible, toggleDialog, fun1, fun2 };
  },
};
</script>