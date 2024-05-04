import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HomeView.vue'),
        name: 'Home',
      },
      {
        path: 'projekte',
        component: () => import('pages/ProjectsView.vue'),
        name: 'projekte',
      },
      {
        path: 'sonstiges',
        component: () => import('pages/MiscellaneousView.vue'),
        name: 'sonstiges',
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
