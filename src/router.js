import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue'
import SingleProject from './pages/SingleProject.vue'
import Contacts from './pages/Contacts.vue'
import NotFound from './pages/NotFound.vue'

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
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export { router };