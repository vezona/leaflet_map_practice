import{L as p}from"./leaflet-src.js";import{_ as r}from"./index.js";import{i as n,j as c,o as _,c as i,p as d,f as m,g as u}from"./vendor.js";const f={setup(){const t=n();let e;const o=()=>{const a=[25.0263064,121.5262934],s='\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors';e=p.map("map").setView(a,10),p.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:s,minZoom:9,maxZoom:15}).addTo(e)};return c(()=>{o()}),{data:t}}},l=t=>(d("data-v-039fc7e4"),t=t(),m(),t),h={class:"wrap"},v=l(()=>u("div",{id:"map"},null,-1)),x=[v];function g(t,e,o,a,s,w){return _(),i("div",h,x)}var j=r(f,[["render",g],["__scopeId","data-v-039fc7e4"]]);export{j as default};
