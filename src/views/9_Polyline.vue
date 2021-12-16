<template>
  <div class="wrap">
    <div id="map"></div>
    <div class="info">
      <button type="button" @click="showRoute">zoom to route</button>
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
    let map, lyrOSM, pllRoute, MulpllRoute;
    const route1Coor = [[
            25.033699963278174,
            121.52960300445555
          ],
          [
            25.033699963278174,
            121.53282165527342
          ],
          [
            25.038404817249855,
            121.53282165527342
          ],
          [
            25.03797711070914,
            121.54385089874268
          ],
          [
            25.025106334517087,
            121.5433359146118
            
          ],
          [
            25.026350698115788,
            121.52981758117676
          ]]

    const route2Coor = [[
            25.042059703222566,
            121.53247833251953
          ],
          [
            25.023861958301705,
            121.50999069213866
          ]]

    const route3Coor = [[
            25.04711415327437,
            121.50921821594237
          ],
          [
            25.021373168022677,
            121.5293025970459
          ]]

    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      // polyline
      pllRoute = L.polyline(route1Coor, {color:'red'}).addTo(map)

      // Multiple polyline 
      MulpllRoute = L.polyline([route2Coor,route3Coor]).addTo(map)
    }

    const showRoute = (e) => {
      // fitBounds mehtod 會接收一個 LatLng bounds Obj，然後會zoom the map to the LatLng bounds
      // 至於要給的 LatLng bounds Obj 從哪邊抓呢? 就用 polyline 裡的 getBounds method 去抓，這個方法會 Returns the LatLngBounds of the path.
      map.fitBounds(MulpllRoute.getBounds())
    }

    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
      showRoute
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
