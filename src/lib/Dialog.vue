<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-12 21:59:36
 * @LastEditTime: 2020-10-13 09:45:34
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\Dialog.vue
 * @
-->
<template>
  <div v-if="visible">
    <Teleport to="body">
      <div class="fireworks-dialog-overlay" @click="onClickOverlay"></div>
      <div class="fireworks-dialog-wrapper">
        <div class="fireworks-dialog">
          <header>
            <slot name="title"></slot>
            <span @click="close" class="fireworks-dialog-close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="cancel">取消</Button>
            <Button type="primary" @click="ok">确定</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "标题",
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: Function,
    cancel: Function,
  },
  components: {
    Button,
  },
  setup(props, { emit }) {
    const close = () => {
      emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const cancel = () => {
      close();
    };
    const ok = () => {
      if (props.ok?.() !== false) {
        close();
      }
    };
    return { close, onClickOverlay, cancel, ok };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.fireworks-dialog {
  border-radius: $radius;
  min-width: 20em;
  max-width: 90%;
  background: white;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  &-overlay {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 11;
    transform: translate(-50%, -50%);
  }
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    font-size: 20px;
  }
  > main {
    padding: 14px 20px;
  }
  > footer {
    padding: 12px 16px;
    border-top: 1px solid $border-color;
    text-align: right;
  }
  &-close {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      height: 1px;
      background: black;
      content: '';
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>