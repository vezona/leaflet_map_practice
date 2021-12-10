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
        component: () => import('../views/1_Mapbox.vue')
    },
    {
        path: '/event',
        name: 'event',
        component: () => import('../views/2_event.vue')
    },
    {
        path: '/locate',
        name: 'locate',
        component: () => import('../views/3_Locate.vue')
    },
    {
        path: '/markers',
        name: 'markers',
        component: () => import('../views/3_Markers.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;