<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-08 08:58:21
 * @LastEditTime: 2020-10-08 13:47:53
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\switch.vue
 * @
-->
<template>
  <div>
    <button :class="{checked:value}" @click="check">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, { emit }) {
    const check = () => {
      emit("update:value", !props.value);
    };
    return {
      check,
    };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: #bfbfbf;
  border-radius: $h / 2;
  position: relative;
  outline: none;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: #fff;
    border-radius: $h2 / 2;
    transition: all, 250ms;
  }

  &.checked {
    background-color: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
