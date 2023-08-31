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
            path: '/blog',
            name: 'posts',
            component: PostList
        },
        {
            path: '/blog',
            name: 'posts',
            component: PostList
        },
        
    ]   
});

export { router };