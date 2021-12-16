<template>
  <div class="wrap">
    <div id="map"></div>
    <div class="info">
      <button type="button" @click="set101Marker">定位 101 Marker</button>
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
    let map, lyrOSM, Taipei101Coor, mrkTaiper101;

    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      // Markers
      Taipei101Coor = [25.0328359,121.5648198];
      mrkTaiper101 = L.marker(Taipei101Coor, {
        draggable:true
      }).addTo(map)
      mrkTaiper101.bindTooltip('台北101') // Tooltip 是 hover 時出現

      // 拖曳時改變tooltip
      mrkTaiper101.on('dragend', () => {
        // 要改變tooltip 時，使用 setTooltipContent method
        mrkTaiper101.setTooltipContent(`目前座標: ${mrkTaiper101.getLatLng().toString()} <br>
                    距離台北101的：${mrkTaiper101.getLatLng().distanceTo(Taipei101Coor).toFixed(1)} 公尺`) 
      })
    }

    // 設定點擊 button 把 marker 抓回101的方法
    const set101Marker = ()=>{
      mrkTaiper101.setLatLng(Taipei101Coor);
      mrkTaiper101.setTooltipContent('台北101')
    }


    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
      set101Marker
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
