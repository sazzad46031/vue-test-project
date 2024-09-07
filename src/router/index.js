import { createRouter, createWebHistory } from 'vue-router';

import EditJob from '../components/EditJob.vue';

import AddJob from '../components/AddJob.vue';

import HomeView from '../Views/HomeView.vue';


const routes = [
  {
    path: '/',
    
    component: HomeView
  },
  {
    path: '/jobs/addJob',
    
    component: AddJob
  },
  {
    path: '/edit/:id',
    name: 'editJob',
    component: EditJob, // The component to handle the edit page
    props: true, // This allows route params to be passed as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
