<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-03 16:01:27
 * @LastEditTime: 2020-10-18 23:28:53
 * @LastEditors: Haopei Xie
 * @Description: This is the Home page
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\views\Home.vue
-->
<template>
  <div>
    <div class="home-page">
      <Topnav />
      <div class="banner">
        <h1>烟火UI</h1>
        <h2>抓住转瞬即逝的美感</h2>
        <p class="actions">
          <a href="https://github.com/xiehaopei/fireworks-ui" target="_blank">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue" />
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts" />
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light" />
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 6px;
$color: #007974;
.home-page {
	/* background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  ); */
	background: rgb(238, 174, 202);
	background: linear-gradient(
	130deg,
	rgba(238, 174, 202, 1) 0%,
	rgba(34, 193, 195, 1) 100%
	);
	clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
	margin: 64px auto;
	padding: 0 16px;
	@media (min-width: 800px) {
		width: 800px;
		>ul {
      >li {
        width: 50%;
      }
    }
	}
	@media (min-width: 1200px) {
		width: 1200px;
		 >ul {
      >li {
        width: 33.3333%;
      }
    }
	}
	> ul {
		display: flex;
		flex-wrap: wrap;
		> li {
			display: grid;
			justify-content: start;
			align-content: space-between;
			margin: 16px 0;

			grid-template-areas: "icon title"
			"icon text";
			grid-template-columns: 80px auto;
			grid-template-rows: 1fr auto;
			> svg {
				width: 64px;
				height: 64px;

				grid-area: icon;
			}
			> h3 {
				font-size: 28px;

				grid-area: title;
			}
			> p {
				grid-area: text;
			}
		}
	}
}
.banner {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 100px 0;
	color: $color;

	> .actions {
		padding: 8px 0;

		a {
			display: inline-block;
			margin: 0 8px;
			padding: 8px 24px;
			border-radius: $border-radius;
			background: $green;
			color: #fff;
			&:hover {
				text-decoration: none;
			}
		}
	}
}
</style>
