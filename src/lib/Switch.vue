<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-08 08:58:21
 * @LastEditTime: 2020-10-09 20:50:41
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\switch.vue
 * @
-->
<template>
  <div>
    <button class="fireworks-switch" :class="{'fireworks-checked':value}" @click="check">
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

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.fireworks-switch {
	position: relative;
	border: none;
	border-radius: $h / 2;
	width: $h * 2;
	height: $h;
	outline: none;
	background-color: #bfbfbf;

	> span {
		position: absolute;
		left: 2px;
		top: 2px;
		border-radius: $h2 / 2;
		width: $h2;
		height: $h2;
		background-color: #fff;
		transition: all, 250ms;
	}

	&.fireworks-checked {
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
	&.fireworks-checked:active {
		> span {
			margin-left: -4px;
			width: $h2 + 4px;
		}
	}
}
</style>
