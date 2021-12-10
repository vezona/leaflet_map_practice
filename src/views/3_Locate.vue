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

      // 每五秒鐘取一次位置
      setInterval(function(){
        map.locate(); // 執行之後，會觸發locationfound事件，然後進到 map.on('locationfound')那個方法中
      }, 5000)

      map.on('keypress', (e)=>{
        console.log(e);
        if (e.originalEvent.key === 'l'){
          map.locate()
        }
      });

      // map.locate() 順利取得位置的話，會回傳 locationfound event ，就可以監聽這個事件去做事
      map.on('locationfound', (e)=>{
        console.log(e);
        // 移除原本的mrkCurrentLocation
        if(mrkCurrentLocation){
          mrkCurrentLocation.remove()
        }
        mrkCurrentLocation = L.circleMarker(e.latlng).addTo(map) // 建立circle marker 圖層之後，記得也要將它加到map上

        // 也可以不要用circleMarker，改成circle
        // mrkCurrentLocation = L.circle(e.latlng, {radius:e.accuracy/2}).addTo(map);

        // 除了定位畫marker之外，也想把地圖定到這個中心點，所以就用setView() method 來執行
        map.setView(e.latlng, 14)
      })

       // map.locate() 取得位置失敗的話，會回傳 locationerror event
       map.on('locationerror', (e)=>{
         console.log(e);
         alert('location was not found')
       })
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
