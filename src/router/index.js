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
        path: '/marker',
        name: 'marker',
        component: () => import('../views/8_marker.vue')
    },
    {
        path: '/polyline',
        name: 'polyline',
        component: () => import('../views/9_Polyline.vue')
    },
    {
        path: '/polygone',
        name: 'polygone',
        component: () => import('../views/10_Polygon.vue')
    },
    {
        path: '/rect_circle',
        name: 'rect_circle',
        component: () => import('../views/11_Rectangle&Circle.vue')
    },
    {
        path: '/grouplayer',
        name: 'grouplayer',
        component: () => import('../views/12_GroupLayer.vue')
    },
    {
        path: '/leaflet_draw',
        name: 'leaflet_draw',
        component: () => import('../views/13_Plugin_Draw.vue')
    },
    {
        path: '/geojson',
        name: 'geojson',
        component: () => import('../views/14_GeoJSON.vue')
    },
    {
        path: '/styling',
        name: 'styling',
        component: () => import('../views/15_Styling.vue')
    },
    {
        path: '/upload_edit_download',
        component: () => import('../views/upload_edit_download.vue')
    },
    {
        path: '/taiwan',
        component: () => import('../views/Taiwan.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;