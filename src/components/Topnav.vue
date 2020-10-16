<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-03 21:49:38
 * @LastEditTime: 2020-10-16 17:40:07
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\Topnav.vue
-->
<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-fireworks" />
      </svg>
    </router-link>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <svg v-if="toggleButtonVisible" class="asideButton" @click="toggleAside">
      <use xlink:href="#icon-menu" />
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("visible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      toggleAside,
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
  color: $color;

  > .logo {
    margin-right: auto;
    max-width: 6em;
    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .asideButton {
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    width: 32px;
    height: 24px;
    cursor: pointer;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .asideButton {
      display: inline-block;
    }
  }
}
</style>
