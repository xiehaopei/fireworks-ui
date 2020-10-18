<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-03 16:01:34
 * @LastEditTime: 2020-10-18 15:32:42
 * @LastEditors: Haopei Xie
 * @Descript This is the document page
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\views\Doc.vue
-->
<template>
  <div class="layout">
    <Topnav class="nav" toggleButtonVisible />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/start">开始</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
        </ol>

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
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("visible");
    return {
      asideVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	height: 100vh;

	> .nav {
		flex-shrink: 0;
	}

	> .content {
		flex-grow: 1;
		padding-left: 156px;
		padding-top: 60px;

		@media (max-width: 500px) {
			padding-left: 0;
		}
	}
}

.content {
	display: flex;

	> aside {
		flex-shrink: 0;
	}

	> main {
		flex-grow: 1;
		padding: 16px;
		background: #fff;
	}
}

aside {
	position: fixed;
	left: 0;
	top: 0;
	padding: 16px 0;
	padding-top: 70px;
	width: 150px;
	height: 100%;
	background-color: lightblue;

	> h2 {
		margin-bottom: 4px;
		padding: 0 16px;
	}

	> ol {
		> li {
			> a {
				display: block;
				padding: 4px 16px;
				text-decoration: none;
			}
			> .router-link-active {
				background-color: #fff;
			}
		}
	}
}

main {
	overflow: auto;
}
</style>
