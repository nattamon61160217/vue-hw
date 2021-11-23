import {
  createRouter,
  createWebHistory,
}from 'vue-router/dist/vue-router.esm-bundler';
import aboutmee from './pages/aboutmee.vue';
import contactt from './pages/contactt.vue';

const routes = [
  { path: '/', name: 'aboutmee', component: aboutmee },
  { path: '/contactt', name: 'contactt', component: contactt },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
