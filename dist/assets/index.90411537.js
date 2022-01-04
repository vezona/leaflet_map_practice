import{r as m,o as l,c as u,a as d,b as f,d as E,e as h}from"./vendor.e39d45be.js";const v=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function _(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=_(e);fetch(e.href,t)}};v();var y=(i,a)=>{const _=i.__vccOpts||i;for(const[r,e]of a)_[r]=e;return _};const L={},P={id:"app"};function O(i,a){const _=m("router-view");return l(),u("div",P,[d(_)])}var g=y(L,[["render",O]]);const R="modulepreload",s={},j="/",o=function(a,_){return!_||_.length===0?a():Promise.all(_.map(r=>{if(r=`${j}${r}`,r in s)return;s[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":R,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((c,p)=>{n.addEventListener("load",c),n.addEventListener("error",p)})})).then(()=>a())},A=[{path:"/",name:"home",component:()=>o(()=>import("./Home.a3cc886c.js"),["assets/Home.a3cc886c.js","assets/Home.0a24e457.css","assets/vendor.e39d45be.js"])},{path:"/mapbox",name:"mapbox",component:()=>o(()=>import("./1_Mapbox.1801935a.js"),["assets/1_Mapbox.1801935a.js","assets/1_Mapbox.e2b770d8.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/event",name:"event",component:()=>o(()=>import("./2_event.cba48d98.js"),["assets/2_event.cba48d98.js","assets/2_event.207a6c00.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/locate",name:"locate",component:()=>o(()=>import("./3_Locate.25e279b8.js"),["assets/3_Locate.25e279b8.js","assets/3_Locate.d432fa20.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/zoom",name:"zoom",component:()=>o(()=>import("./4_Zoom.7280a348.js"),["assets/4_Zoom.7280a348.js","assets/4_Zoom.9098dd80.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/popups",name:"popups",component:()=>o(()=>import("./5_Popups.6a7ca2ee.js"),["assets/5_Popups.6a7ca2ee.js","assets/5_Popups.a8e6ed6b.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/controls",name:"controls",component:()=>o(()=>import("./6_Controls.5681fe39.js"),["assets/6_Controls.5681fe39.js","assets/12_GroupLayer.18cd7ca4.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/rasterLayers",name:"rasterLayers",component:()=>o(()=>import("./7_RasterLayers.3d095fa5.js"),["assets/7_RasterLayers.3d095fa5.js","assets/12_GroupLayer.18cd7ca4.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/marker",name:"marker",component:()=>o(()=>import("./8_marker.2c242419.js"),["assets/8_marker.2c242419.js","assets/12_GroupLayer.18cd7ca4.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/polyline",name:"polyline",component:()=>o(()=>import("./9_Polyline.b7311270.js"),["assets/9_Polyline.b7311270.js","assets/12_GroupLayer.18cd7ca4.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/polygone",name:"polygone",component:()=>o(()=>import("./10_Polygon.7b1e6919.js"),["assets/10_Polygon.7b1e6919.js","assets/12_GroupLayer.18cd7ca4.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/rect_circle",name:"rect_circle",component:()=>o(()=>import("./11_Rectangle_Circle.3318550f.js"),["assets/11_Rectangle_Circle.3318550f.js","assets/12_GroupLayer.18cd7ca4.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/grouplayer",name:"grouplayer",component:()=>o(()=>import("./12_GroupLayer.4f9afd97.js"),["assets/12_GroupLayer.4f9afd97.js","assets/12_GroupLayer.18cd7ca4.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js"])},{path:"/leaflet_draw",name:"leaflet_draw",component:()=>o(()=>import("./13_Plugin_Draw.c9071639.js"),["assets/13_Plugin_Draw.c9071639.js","assets/13_Plugin_Draw.0873ff50.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/leaflet.draw.abde4e00.js","assets/leaflet.draw.4bd3f5ff.css","assets/vendor.e39d45be.js"])},{path:"/geojson",name:"geojson",component:()=>o(()=>import("./14_GeoJSON.14643297.js"),["assets/14_GeoJSON.14643297.js","assets/12_GroupLayer.18cd7ca4.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/leaflet.ajax.286cee54.js","assets/vendor.e39d45be.js"])},{path:"/styling",name:"styling",component:()=>o(()=>import("./15_Styling.6c49e66f.js"),["assets/15_Styling.6c49e66f.js","assets/15_Styling.a46a8e17.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/leaflet.ajax.286cee54.js","assets/vendor.e39d45be.js"])},{path:"/upload_edit_download",component:()=>o(()=>import("./upload_edit_download.b14e9a82.js"),["assets/upload_edit_download.b14e9a82.js","assets/upload_edit_download.74626368.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/leaflet.draw.abde4e00.js","assets/leaflet.draw.4bd3f5ff.css","assets/vendor.e39d45be.js"])},{path:"/taiwan",component:()=>o(()=>import("./Taiwan.c661e749.js"),["assets/Taiwan.c661e749.js","assets/Taiwan.71850ba3.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/leaflet.ajax.286cee54.js","assets/vendor.e39d45be.js"])},{path:"/tdxBikeStation",component:()=>o(()=>import("./TDX_BikeStation.5760551a.js"),["assets/TDX_BikeStation.5760551a.js","assets/TDX_BikeStation.a015a163.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/vendor.e39d45be.js","assets/leaflet.ajax.286cee54.js"])},{path:"/lineBetweenMarkers",component:()=>o(()=>import("./LineBetweenMarkers.f37201ac.js"),["assets/LineBetweenMarkers.f37201ac.js","assets/LineBetweenMarkers.2af2ad96.css","assets/leaflet-src.e5d4c8e0.js","assets/leaflet-src.6e9c6bc7.css","assets/leaflet.ajax.286cee54.js","assets/vendor.e39d45be.js"])}],D=f({history:E(),routes:A});h(g).use(D).mount("#app");export{y as _};