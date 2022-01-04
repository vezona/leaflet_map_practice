import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // 首頁
    {
        path: '/leaflet_map_practice',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/leaflet_map_practice/mapbox',
        name: 'mapbox',
        component: () => import('../views/1_Mapbox.vue')
    },
    {
        path: '/leaflet_map_practice/event',
        name: 'event',
        component: () => import('../views/2_event.vue')
    },
    {
        path: '/leaflet_map_practice/locate',
        name: 'locate',
        component: () => import('../views/3_Locate.vue')
    },
    {
        path: '/leaflet_map_practice/zoom',
        name: 'zoom',
        component: () => import('../views/4_Zoom.vue')
    },
    {
        path: '/leaflet_map_practice/popups',
        name: 'popups',
        component: () => import('../views/5_Popups.vue')
    },
    {
        path: '/leaflet_map_practice/controls',
        name: 'controls',
        component: () => import('../views/6_Controls.vue')
    },
    {
        path: '/leaflet_map_practice/rasterLayers',
        name: 'rasterLayers',
        component: () => import('../views/7_RasterLayers.vue')
    },
    {
        path: '/leaflet_map_practice/marker',
        name: 'marker',
        component: () => import('../views/8_marker.vue')
    },
    {
        path: '/leaflet_map_practice/polyline',
        name: 'polyline',
        component: () => import('../views/9_Polyline.vue')
    },
    {
        path: '/leaflet_map_practice/polygone',
        name: 'polygone',
        component: () => import('../views/10_Polygon.vue')
    },
    {
        path: '/leaflet_map_practice/rect_circle',
        name: 'rect_circle',
        component: () => import('../views/11_Rectangle&Circle.vue')
    },
    {
        path: '/leaflet_map_practice/grouplayer',
        name: 'grouplayer',
        component: () => import('../views/12_GroupLayer.vue')
    },
    {
        path: '/leaflet_map_practice/leaflet_draw',
        name: 'leaflet_draw',
        component: () => import('../views/13_Plugin_Draw.vue')
    },
    {
        path: '/leaflet_map_practice/geojson',
        name: 'geojson',
        component: () => import('../views/14_GeoJSON.vue')
    },
    {
        path: '/leaflet_map_practice/styling',
        name: 'styling',
        component: () => import('../views/15_Styling.vue')
    },
    {
        path: '/leaflet_map_practice/upload_edit_download',
        component: () => import('../views/upload_edit_download.vue')
    },
    {
        path: '/leaflet_map_practice/taiwan',
        component: () => import('../views/Taiwan.vue')
    },
    {
        path: '/leaflet_map_practice/tdxBikeStation',
        component: () => import('../views/TDX_BikeStation.vue')
    },
    {
        path: '/leaflet_map_practice/lineBetweenMarkers',
        component: () => import('../views/LineBetweenMarkers.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;