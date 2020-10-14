<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-14 14:24:12
 * @LastEditTime: 2020-10-14 16:28:15
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\Tab.vue
 * @
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
  },
};
</script>