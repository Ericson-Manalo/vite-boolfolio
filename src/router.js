import { createRouter, createWebHistory } from 'vue-router';


import AboutUs from './pages/AboutUs.vue';
import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/project-list',
            name: 'projects.index',
            component: ProjectList
        },
        
    ]   
});

export { router };