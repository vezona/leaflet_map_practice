import{L as n}from"./leaflet-src.e5d4c8e0.js";import{_ as i}from"./index.90411537.js";import{i as d,j as _,o as l,c as m,p as u,f as g,g as f}from"./vendor.e39d45be.js";const v={setup(){const e=d();let t,a;const r=()=>{const s=[25.0263064,121.5262934],c='\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors';t=n.map("map").setView(s,10),a=n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:c,minZoom:9,maxZoom:15}),t.addLayer(a),t.on("click",o=>{console.log("event object",o),o.originalEvent.shiftKey?alert(t.getZoom()):alert(o.latlng.toString())}),t.on("contextmenu",o=>{const p=new Date;n.marker(o.latlng).addTo(t).bindPopup(o.latlng.toString()+"<br />"+p.toString())})};return _(()=>{r()}),{data:e}}},h=e=>(u("data-v-5d2d6760"),e=e(),g(),e),x={class:"wrap"},y=h(()=>f("div",{id:"map"},null,-1)),S=[y];function b(e,t,a,r,s,c){return l(),m("div",x,S)}var k=i(v,[["render",b],["__scopeId","data-v-5d2d6760"]]);export{k as default};
