import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue'
import SingleProject from './pages/SingleProject.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/list',
            name: 'project_list',
            component: ProjectList
        },
        {
            path: '/list/:id',
            name: 'single_project',
            component: SingleProject
        },
    ]
});

export { router };