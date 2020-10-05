<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-03 16:01:27
 * @LastEditTime: 2020-10-05 21:33:00
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\views\Home.vue
-->
<template>
<div>
  <Topnav />
  <div class="banner">
    <h1>烟火UI</h1>
    <h2>抓住转瞬即逝的美感</h2>
    <p class="actions">
      <a>GitHub</a>
      <a>开始</a>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
  components: {
    Topnav
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
