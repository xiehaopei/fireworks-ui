<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-18 17:12:12
 * @LastEditTime: 2020-10-18 17:18:50
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\markdown.vue
 * @
-->
<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    path: {
      type: String,
    },
  },
  setup(props) {
    const md = ref<String>(null);
    import(props.path).then((res) => {
      md.value = res.default;
    });
    return { md };
  },
};
</script>