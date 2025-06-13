import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import JobsAddView from '@/views/JobsAddView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import EditJobView from '@/views/EditJobView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      // path: '/jobs/:id(\\d+)', // "\d+" matches one or more digits "\\" to escape the backslash
      path: '/jobs/:id',
      name: 'job-view',
      component: JobView,
    },
    {
      path: '/jobs/add',
      name: 'jobs-add',
      component: JobsAddView,
    },
    {
      path: '/jobs/edit/:id',
      name: 'jobs-edit',
      component: EditJobView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    }
  ],
});

export default router;