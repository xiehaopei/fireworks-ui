<demo>示例一</demo>

<template>
  <div>
    <Button @click="toggleDialog">toggle</Button>
    <Dialog v-model:visible="visible" :ok="fun1" :cancel="fun2">
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
import { Dialog, Button } from "../lib/index";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggleDialog = () => {
      visible.value = !visible.value;
    };
    const fun1 = () => {
      console.log("You had clicked the button");
      return false;
    };
    const fun2 = () => {
      console.log("You had clicked the button");
    };
    return { visible, toggleDialog, fun1, fun2 };
  },
};
</script>