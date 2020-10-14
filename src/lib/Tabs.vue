<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-14 14:24:12
 * @LastEditTime: 2020-10-14 19:56:38
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\Tabs.vue
 * @
-->
<template>
  <div class="fireworks-tabs">
    <div class="fireworks-tabs-nav">
      <div
        class="fireworks-tabs-nav-item"
        @click="select(title)"
        :class="{selected:title===selected}"
        v-for="(title,index) in titles"
        :key="index"
      >{{title}}</div>
    </div>
    <div class="fireworks-tabs-contnet">
      <component class="fireworks-tabs-contnet-item" :is="current"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, { emit, slots }) {
    const defaults = slots.default();
    const titles = [];
    defaults.forEach((slot) => {
      if (slot.type !== Tab) {
        throw new Error("Tabs子标签必须为Tab");
      } else {
        titles.push(slot.props.title);
      }
    });
    const current = computed(() => {
      return defaults.filter((slot) => {
        return slot.props.title === props.selected;
      })[0];
    });
    const select = (title: String) => {
      emit("update:selected", title);
    };
    return { defaults, titles, current, select };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.fireworks-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>