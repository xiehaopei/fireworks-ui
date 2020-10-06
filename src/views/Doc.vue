<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-03 16:01:34
 * @LastEditTime: 2020-10-06 16:27:24
 * @LastEditors: Haopei Xie
 * @Descript This is the document page
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\views\Doc.vue
-->
<template>
<div class="layout">
  <Topnav class="nav" />
  <div class="content">
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue';
import Topnav from '../components/Topnav.vue';
export default {
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject < Ref < boolean >> ('visible')
    return {
      asideVisible
    }
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}

aside {
  background-color: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;

  >h2 {
    margin-bottom: 4px;
  }

  >ol {
    >li {
      padding: 4px 0;
    }
  }
}

main {
  overflow: auto;
}
</style>
