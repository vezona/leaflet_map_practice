<template>
  <div class="wrap">
    <div id="map"></div>
    <div class="info">
      <button type="button"  @click="openPop">打開 popup</button>
    </div>
  </div>
</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, onMounted, watch } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import popupImg from '../assets/img/tapiei_101.jpg'

export default {
  setup() {
    // 地圖
    let map, lyrOSM, popTaipei, popTemplate;

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

      // 建立 popups，加上一些 options 設定
      popTaipei = L.popup({
        keepInView: true
      });
      // 用 method 設定一些 popup 細節
      popTaipei.setLatLng([25.0263064, 121.5262934]);
      popTaipei.setContent(`<h2>台北</h2> <img src="${popupImg}" class="popupImg">`)

      // popup 也可傳入已經寫好的 html template
      popTemplate = L.popup();
      popTemplate.setLatLng([25.0273164, 121.7597934]);

      const popupTemplate = `<h4>哈囉</h4>`;
      popTemplate.setContent(popupTemplate);
      popTemplate.openOn(map);
    }

    // 用 map 的 openPopup method 打開 popup
    const openPop = () => {
      map.openPopup(popTaipei)
    }


    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
      popTaipei,
      openPop,
      open
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
