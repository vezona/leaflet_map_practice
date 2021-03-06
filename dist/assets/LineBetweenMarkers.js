import{L as s}from"./leaflet-src.js";import"./leaflet.ajax.js";import{_ as j}from"./index.js";import{j as B,o as w,c as T}from"./vendor.js";var M="/assets/plane.svg";const $={setup(){const i=[25.150257104114733,121.48681640624999],c=[25.06072125231416,118.9434814453125];let a,_;const m=()=>{const d=[25.0263064,121.5262934];a=s.map("map",{zoomControl:!1,attributionControl:!1}).setView(d,10),_=s.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),a.addLayer(_);const l=s.polyline([i,c],{color:"blue",dashArray:"5,10"}).addTo(a);a.fitBounds(l.getBounds());const u=s.icon({iconUrl:M,iconSize:[20,20],className:"plane"}),v=s.marker(i,{icon:u}).addTo(a);let t,g=l._latlngs.length,n=[];for(t=1;t<g;t++){var e=l._latlngs[t-1],r=l._latlngs[t],p=e.distanceTo(r),f=10/p,k=f*(r.lat-e.lat),y=f*(r.lng-e.lng);if(p>10)for(;p>10;)e=new s.LatLng(e.lat+k,e.lng+y),p=e.distanceTo(r),n.push(e);else n.push(e)}n.push(l._latlngs[g-1]);const h=n.filter((o,L)=>L%3==0&&L%2==0);for(let o=0;o<h.length;o++)setTimeout(()=>{v.setLatLng(h[o])},o)};return B(()=>{m()}),{}}},x={id:"map"};function z(i,c,a,_,m,d){return w(),T("div",x)}var S=j($,[["render",z]]);export{S as default};
