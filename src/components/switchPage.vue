<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-06 15:32:59
 * @LastEditTime: 2020-10-08 11:46:52
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\switchPage.vue
 * @
-->
<template>
<div>
  <Switch :value="state.value" @update:value="state.value = $event"></Switch>
</div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import Switch from '../lib/Switch.vue';
export default {
  components: {
    Switch
  },
  setup() {
    const state = reactive({
      value : ref(true)
    })
    return {state};
  }
}
</script>
