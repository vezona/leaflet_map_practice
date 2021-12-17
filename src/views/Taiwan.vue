<template>
  <div class="wrap">
    <div id="map"></div>
  </div>
</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import 'leaflet-ajax/dist/leaflet.ajax';

export default {
  setup() {
    // 地圖
    let map, lyrOSM;

    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      // Taiwan
      const taiwan = new L.geoJson.ajax('COUNTY_MOI_1090820.json')
      taiwan.addTo(map)


      // layer control 
      const basemap = {
          'base':lyrOSM
      }

      const overlayers = {
          '台灣地圖': taiwan
      }
      const lyrControl = L.control.layers(basemap, overlayers).addTo(map)

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
  width: 100vw;
  height: 90vh;
}

.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out{
  font-size: 14px;
}
</style>
