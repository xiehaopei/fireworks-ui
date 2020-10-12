<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-12 21:59:36
 * @LastEditTime: 2020-10-12 22:04:33
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\Dialog.vue
 * @
-->
<template>
  <div class="dialog-overlay">
    <div class="dialog-wrapper">
      <header>标题</header>
      <main>
        <p>第一行字</p>
        <p>第二行字</p>
      </main>
      <footer>
        <Button>取消</Button>
        <Button type="primary">确定</Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
};
</script>