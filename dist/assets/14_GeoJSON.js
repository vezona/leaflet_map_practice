import{L as t}from"./leaflet-src.js";import"./leaflet.ajax.js";import{_ as f}from"./index.js";import{j as g,o as y,c as v,g as p}from"./vendor.js";const j={setup(){let e,s;const n=()=>{const i=[25.0263064,121.5262934];e=t.map("map",{zoomControl:!1,attributionControl:!1}).setView(i,10),s=t.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),e.addLayer(s);const l=(m,u)=>{const c=m.properties;let a,r;return c.name==="\u5927\u5B89"?(a=20,r="deeppink"):(a=10,r="green"),t.circleMarker(u,{radius:a,color:r}).bindTooltip(`<p>${c.name}</p>`)},o=t.geoJson.ajax("geoJson/markers.geojson",{pointToLayer:l});o.addTo(e),o.on("data:loaded",()=>{e.fitBounds(o.getBounds())});const d={base:s},_={\u53F0\u5317\u5E02:o};t.control.layers(d,_).addTo(e)};return g(()=>{n()}),{}}},x={class:"wrap"},h=p("div",{id:"map"},null,-1),k=p("div",{class:"info"},null,-1),b=[h,k];function B(e,s,n,i,l,o){return y(),v("div",x,b)}var T=f(j,[["render",B]]);export{T as default};