<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-14 14:24:12
 * @LastEditTime: 2020-10-15 10:34:56
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\Tabs.vue
 * @
-->
<template>
  <div class="fireworks-tabs">
    <div class="fireworks-tabs-nav" ref="container">
      <div
        class="fireworks-tabs-nav-item"
        @click="select(title)"
        :class="{selected:title===selected}"
        v-for="(title,index) in titles"
        :key="index"
        :ref="el =>{if(el) navItems[index] = el}"
      >{{title}}</div>
      <div class="fireworks-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="fireworks-tabs-contnet">
      <component
        class="fireworks-tabs-contnet-item"
        :class="{selected:component.props.title === selected}"
        v-for="component in defaults"
        :key="component"
        :is="component"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, onUpdated, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, { emit, slots }) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const calculate = () => {
      const div = navItems.value;
      const result = div.filter((div) => div.classList.contains("selected"))[0];
      const { width, left: ItemLeft } = result.getBoundingClientRect();
      const { left: NavLeft } = container.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      indicator.value.style.left = NavLeft - ItemLeft + "px";
    };
    onMounted(calculate);
    onUpdated(calculate);
    const defaults = slots.default();
    const titles = [];
    defaults.forEach((slot) => {
      if (slot.type !== Tab) {
        throw new Error("Tabs子标签必须为Tab");
      } else {
        titles.push(slot.props.title);
      }
    });
    const select = (title: String) => {
      console.log(title);
      emit("update:selected", title);
    };
    return { defaults, titles, select, navItems, indicator, container };
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>