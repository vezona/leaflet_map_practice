<template>
  <div class="wrap">
    <div id="map"></div>
    <div class="info">
      <h4>Zoom level : {{ zoomLevel }}</h4>
      <h4>map center Location : {{ mapCenter }}</h4>
      <h4>Mouse Location : {{ mouseLocation }}</h4>
    </div>
  </div>
</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, onMounted, watch } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  setup() {
    const zoomLevel = ref(0);
    const mapCenter = ref('LatLng()')
    const mouseLocation = ref('LatLng()')

    // 地圖
    let map, lyrOSM, mrkCurrentLocation;
    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
      map = L.map("map").setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: attribution,
        minZoom: 9,
        maxZoom: 15,
        })

      map.addLayer(lyrOSM);

      // zoom
      map.on('zoomend', ()=>{
        zoomLevel.value = map.getZoom();
      })

      // get center
      map.on('moveend', () => {
        mapCenter.value = map.getCenter().toString()
      })

      // get center
      map.on('mousemove', (e)=>{
        console.log(e);
        mouseLocation.value = latlngToArrayString(e.latlng)
      })

      // 把座標處理好看一下，變成陣列
      function latlngToArrayString(Latlng){
        return `[${Latlng.lat.toFixed(5)}], [${Latlng.lng.toFixed(5)}]`
      }

    }

    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
      zoomLevel,
      mapCenter,
      mouseLocation
    }
  }
}

</script>

<style lang="scss" scoped>
.wrap {
  display:flex;
}
#map{
  width: 80vw;
  height: 100vh;
}

.info{
  width: 20vw;
  height: 100vh;
  padding:10px
}
</style>
