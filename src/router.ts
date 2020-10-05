import { createWebHistory, createRouter } from 'vue-router';

const history = createWebHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('./views/Home.vue') },
    { path: '/doc', component: () => import('./views/Doc.vue') },
  ],
});

export default router;
