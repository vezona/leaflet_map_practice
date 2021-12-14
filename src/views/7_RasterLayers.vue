<template>
  <div class="wrap">
    <div id="map"></div>
    <div class="info">
      <h4>image opacity: <span>{{opacityLevel}}</span></h4>
      <input type="range" min="0" max="1" step="0.1" v-model="opacityLevel">
    </div>
  </div>
</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, onMounted, watch } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import logoImg from '../assets/logo.png'

export default {
  setup() {
    // 地圖
    let map, lyrOSM, lyrImage;
    const opacityLevel = ref(1)

    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      // 加上image over
      lyrImage = L.imageOverlay( logoImg, 
      [[25.253273842692565, 121.04736328125001], [24.645290695239503, 122.00181549789865]],
      {opacity:1}).addTo(map)

      // 使用 slide 去控制opacity
      watch(opacityLevel, (e)=>{
          lyrImage.setOpacity(e)
      })

      // 加上 layer control
      const objBasemaps = {
        "Open Stree Map": lyrOSM
      }
      // 加上image overlay
      const ObjOverlayers = {
        "vuelogo Image": lyrImage
      };

      const ctlLayer = L.control.layers(objBasemaps, ObjOverlayers).addTo(map)

    }


    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
      opacityLevel
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
  height: 90vh;
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
