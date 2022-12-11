import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/_pages/home.vue'
import About from '/src/_pages/about.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router