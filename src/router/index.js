import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import VolcanoView from '../views/VolcanoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      index: 0,
      transitionName: '',
    },
  },
  {
    path: '/Categories',
    name: 'Categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CategoriesView,
    meta: {
      index: 1,
      transitionName: '',
    },
  },
  {
    path: '/Volcano',
    name: 'Volcano',
    component: VolcanoView,
    meta: {
      index: 2,
      transitionName: '',
    },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  const toDepth = to.meta.index;
  const fromDepth = from.meta.index;
  // eslint-disable-next-line
  to.meta.transitionName = toDepth > fromDepth ? 'slide-left' : 'slide-right';
});

export default router;
