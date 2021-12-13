<template>
  <div class="wrap">
    <div id="map"></div>
    <div class="info">
    </div>
  </div>
</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  setup() {
    // 地圖
    let map, lyrOSM, controlZoom;

    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
      map = L.map("map", { zoomControl : false }).setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: attribution,
        minZoom: 9,
        maxZoom: 15,
        })

      map.addLayer(lyrOSM);

      // 手動加上 Zoom control
      controlZoom = L.control.zoom({
        zoomInText: '放大', 
        zoomOutText: '縮小',
      })
      controlZoom.addTo(map)

    
    }


    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
    }
  }
}


</script>

<style lang="scss">
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

.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out{
  font-size: 14px;
}
</style>
