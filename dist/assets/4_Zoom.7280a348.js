import{L as l}from"./leaflet-src.e5d4c8e0.js";import{_ as u}from"./index.90411537.js";import{i as c,j as v,o as g,c as f,g as n,t as i,p as h,f as L}from"./vendor.e39d45be.js";const x={setup(){const e=c(0),a=c("LatLng()"),s=c("LatLng()");let o,r;const p=()=>{const m=[25.0263064,121.5262934],d='\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors';o=l.map("map").setView(m,10),r=l.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:d,minZoom:9,maxZoom:15}),o.addLayer(r),o.on("zoomend",()=>{e.value=o.getZoom()}),o.on("moveend",()=>{a.value=o.getCenter().toString()}),o.on("mousemove",t=>{console.log(t),s.value=_(t.latlng)});function _(t){return`[${t.lat.toFixed(5)}], [${t.lng.toFixed(5)}]`}};return v(()=>{p()}),{zoomLevel:e,mapCenter:a,mouseLocation:s}}},y=e=>(h("data-v-13e23006"),e=e(),L(),e),S={class:"wrap"},w=y(()=>n("div",{id:"map"},null,-1)),Z={class:"info"};function I(e,a,s,o,r,p){return g(),f("div",S,[w,n("div",Z,[n("h4",null,"Zoom level : "+i(o.zoomLevel),1),n("h4",null,"map center Location : "+i(o.mapCenter),1),n("h4",null,"Mouse Location : "+i(o.mouseLocation),1)])])}var M=u(x,[["render",I],["__scopeId","data-v-13e23006"]]);export{M as default};