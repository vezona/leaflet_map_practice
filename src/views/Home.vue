
<template>
  <div class="wrapper">
    <router-link to="mapbox">mapbox</router-link>
    <router-link to="event">event、original event</router-link>
    <router-link to="locate">locate Methods and associate event</router-link>
    <router-link to="zoom">zoom</router-link>
    <router-link to="popups">popups</router-link>
    <router-link to="controls">controls</router-link>
    <router-link to="rasterLayers">Raster Layers</router-link>
    <router-link to="marker">marker</router-link>
    <router-link to="polyline">polyline</router-link>
    <router-link to="polygone">polygone</router-link>
    <router-link to="rect_circle">rectangle and circle</router-link>
    <router-link to="grouplayer">group layer</router-link>
    <router-link to="leaflet_draw">plugin draw</router-link>
    <router-link to="geojson">geojson</router-link>
    <router-link to="finalResult">upload edit download</router-link>
  </div>
</template>

<script setup>

</script>


<style lang="scss" scoped>
// .wrapper{
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
a {
  display:inline-block;
  margin:10px;
  padding:10px;
  width: fit-content;
  background-color: rgba(40,78,78);
  color: white;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
}
</style>
