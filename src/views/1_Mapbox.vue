<template>
<div class="wrap">
  <div id="map"></div>
</div>


</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, onMounted, watch } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  setup() {
    const data = ref()

    // 地圖
    let map;
    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
      map = L.map("map").setView(center, 10);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: attribution,
        minZoom: 9,
        maxZoom: 15,
        }).addTo(map);
    }


    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
      data,

    }
  }
  
}

</script>

<style lang="scss" scoped>
#map{
  width: 100vw;
  height: 100vh;
}

</style>
