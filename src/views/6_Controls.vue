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
    let map, lyrOSM;

    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      // 手動加上 Zoom control
      const ctlZoom = L.control.zoom({
        zoomInText: '放大', 
        zoomOutText: '縮小',
        position: 'topright'
      })
      ctlZoom.addTo(map);

      // 手動加上 Attrubution
      const ctlAttribution = L.control.attribution({position:'bottomleft'})
      ctlAttribution.addTo(map)
      // addAttribution 設定文字
      ctlAttribution.addAttribution('OSM')
      ctlAttribution.addAttribution('&copy; <a href="www.google.com">Go to google</a>')

      // 加上 Scale bar
      const ctlScale = L.control.scale({
        position: 'bottomright',
        metric:false, 
        maxWidth:200
      }).addTo(map)

      // 加上 layer control
      const objBasemaps = {
        "Open Stree Map": lyrOSM
      }
      
      const ObjOverlayers = {};

      const ctlLayer = L.control.layers(objBasemaps, ObjOverlayers).addTo(map)


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
