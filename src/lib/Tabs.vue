<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-14 14:24:12
 * @LastEditTime: 2020-10-22 22:32:14
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
        :class="{selected:title===selected}"
        v-for="(title,index) in titles"
        :key="index"
        @click="select(title)"
        :ref="el =>{if(title===selected) selectedItem = el}"
      >{{title}}</div>
      <div class="fireworks-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="fireworks-tabs-contnet">
      <component class="fireworks-tabs-contnet-item" :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";
import TabItem from "./TabItem.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, { emit, slots }) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const updatePosition = ()=>{
      const {
        width,
        left: ItemLeft,
      } = selectedItem.value.getBoundingClientRect();
      const { left: NavLeft } = container.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      indicator.value.style.left = ItemLeft - NavLeft + "px";
    }
    onMounted(() => {
      updatePosition()
    });
    onUpdated(() => {
      updatePosition()
    });
    const defaults = slots.default();
    const titles = [];
    defaults.forEach((slot) => {
      if (slot.type !== TabItem) {
        throw new Error("Tabs子标签必须为TabItem");
      } else {
        titles.push(slot.props.title);
      }
    });
    const select = (title: String) => {
      emit("update:selected", title);
    };
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
      current,
    };
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
  }
}
</style>