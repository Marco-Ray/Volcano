import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StatisticsView from '../views/StatisticsView.vue';
import VolcanoViewLayout from '../views/VolcanoViewLayout/index.vue';
import VolcanoView from '../views/VolcanoViewLayout/VolcanoView.vue';
import LearnMore from '../views/LearnMore/index.vue';
import ContentView from '../views/LearnMore/ContentView.vue';
import ArticleViews from '../views/LearnMore/ArticleViews.vue';

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
    path: '/Statistics',
    name: 'statistics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: StatisticsView,
    meta: {
      index: 1,
      transitionName: '',
    },
  },
  {
    path: '/Volcano/',
    name: 'VolcanoLayout',
    component: VolcanoViewLayout,
    children: [
      {
        path: '/Volcano/:type',
        name: 'Volcano',
        component: VolcanoView,
        meta: {
          index: 2,
          transitionName: '',
        },
      },
    ],
  },
  {
    path: '/LearnMore',
    name: 'LearnMore',
    component: LearnMore,
    meta: {
      index: 3,
      transitionName: '',
    },
    children: [
      {
        path: '',
        name: 'Content',
        component: ContentView,
        meta: {
          index: 4,
          transitionName: '',
        },
      },
      {
        path: '/Article',
        name: 'Article',
        component: ArticleViews,
        meta: {
          index: 5,
          transitionName: '',
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  const toDepth = to.meta.index;
  const fromDepth = from.meta.index;
  // eslint-disable-next-line
  to.meta.transitionName = toDepth >= fromDepth ? 'slide-left' : 'slide-right';
});

export default router;
