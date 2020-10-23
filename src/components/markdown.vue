<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-18 17:12:12
 * @LastEditTime: 2020-10-23 15:54:41
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\Markdown.vue
 * @
-->
<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
    },
  },
};
</script>