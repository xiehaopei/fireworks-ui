<demo>示例二</demo>

<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import { Button, openDialog } from "../lib/index";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "打开dialog",
        ok: () => console.log("ok"),
        cancel: () => console.log("cancel"),
      });
    };
    return { showDialog };
  },
};
</script>