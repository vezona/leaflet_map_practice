import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // 首頁
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/mapbox',
        name: 'mapbox',
        component: () => import('../views/Mapbox.vue')
    },
    {
        path: '/markers',
        name: 'markers',
        component: () => import('../views/Markers.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;