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
        path: '/zoom',
        name: 'zoom',
        component: () => import('../views/4_Zoom.vue')
    },
    {
        path: '/popups',
        name: 'popups',
        component: () => import('../views/5_Popups.vue')
    },
    {
        path: '/controls',
        name: 'controls',
        component: () => import('../views/6_Controls.vue')
    },
    {
        path: '/rasterLayers',
        name: 'rasterLayers',
        component: () => import('../views/7_RasterLayers.vue')
    },
    {
        path: '/vectorLayers',
        name: 'vectorLayers',
        component: () => import('../views/8_VectorLayers.vue')
    },
    {
        path: '/layerGroups',
        name: 'layerGroups',
        component: () => import('../views/9.Layer_groups.vue')
    },
    {
        path: '/draw',
        name: 'draw',
        component: () => import('../views/10.Draw.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;