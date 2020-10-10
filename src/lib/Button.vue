<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-09 16:22:56
 * @LastEditTime: 2020-10-10 22:18:49
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\Button.vue
 * @
-->
<template>
  <button class="fireworks-button" :class="classList">
    <span class="fireworks-loadingIndicator" v-if="loading"></span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { computed } from 'vue';
export default {
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: 'default',
    },
    theme: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, type, size, disabled, loading } = props;
    const classList = computed(() => {
      return {
        [`fireworks-theme-${theme}`]: theme,
        [`fireworks-type-${type}`]: type,
        [`fireworks-size-${size}`]: size,
        ['is-disabled']: disabled,
        ['is-loading']: loading,
      };
    });
    return { classList };
  },
};
</script>    

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$grey: grey;
.fireworks-button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding: 0 12px;
	border: 1px solid $border-color;
	border-radius: $radius;
	height: $h;
	background: white;
	box-shadow: 0 1px 0 fade-out(black, .95);
	cursor: pointer;
	font-weight: 500;
	color: $color;
	white-space: nowrap;
	& + & {
		margin-left: 10px;
	}
	&:hover,
	&:focus {
		border-color: $blue;
		color: $blue;
	}
	&:focus {
		outline: none;
	}
	&::-moz-focus-inner {
		border: 0;
	}
	&.fireworks-theme-link {
		border-color: transparent;
		box-shadow: none;
		color: $blue;
		&:hover,
		&:focus {
			color: lighten($blue, 10%);
		}
	}
	&.fireworks-theme-text {
		border-color: transparent;
		box-shadow: none;
		color: inherit;
		&:hover,
		&:focus {
			background: darken(white, 5%);
		}
	}
	&.fireworks-size-medium {
		padding: 10px 20px;
		border-radius: 4px;
		font-size: 14px;
	}
	&.fireworks-size-large {
		padding: 20px 30px;
		border-radius: 5px;
		font-size: 16px;
	}
	&.fireworks-size-mini {
		padding: 7px 15px;
		border-radius: 3px;
		font-size: 12px;
	}
	&.fireworks-type-primary {
		border-color: #409eff;
		background-color: #409eff;
		color: #fff;
	}
	&.fireworks-type-success {
		border-color: #67c23a;
		background-color: #67c23a;
		color: #fff;
	}
	&.fireworks-type-info {
		border-color: #909399;
		background-color: #909399;
		color: #fff;
	}
	&.fireworks-type-warning {
		border-color: #e6a23c;
		background-color: #e6a23c;
		color: #fff;
	}
	&.fireworks-type-danger {
		border-color: #f56c6c;
		background-color: #f56c6c;
		color: #fff;
	}
	/* &.fireworks-theme-button {
		&[disabled] {
			cursor: not-allowed;
			color: $grey;
			&:hover {
				border-color: $grey;
			}
		}
	}
	&.fireworks-theme-link,
	&.fireworks-theme-text {
		&[disabled] {
			cursor: not-allowed;
			color: $grey;
		}
	} */
	&.is-disabled {
		border-color: $grey;
		cursor: not-allowed;
		color: $grey;
	}
	&.is-loading {
		position: relative;
		pointer-events: none;
	}
	> .fireworks-loadingIndicator {
		display: inline-block;
		margin-right: 4px;
		border-width: 2px;
		border-style: solid;
		border-color: $blue $blue $blue transparent;
		border-radius: 8px;
		width: 14px;
		height: 14px;
		animation: fireworks-spin 1s infinite linear;
	}
	@keyframes fireworks-spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>