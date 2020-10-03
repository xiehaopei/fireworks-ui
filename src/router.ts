import { createWebHistory, createRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

const history = createWebHistory();
const router = createRouter({
  history: history,
  routes: [{ path: '/', component: HelloWorld }],
});

export default router;
