<template>
  <div id="map"></div>
  <div class="selector">
    <select name="" id="" v-model="chosedCity">
      <option value="" disabled>
        請選擇區域</option>
      <option v-for="city in cityList" :key="city.value" :value="city.value" >{{city.name}}</option>
    </select>
  </div>


</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, onMounted, watch } from 'vue';
import "leaflet/dist/leaflet.css";
import { getAuthorizationHeader } from '../js/getAuthorizationHeader';
import L from "leaflet";
import 'leaflet-ajax/dist/leaflet.ajax';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { cityList } from '../utils/cities';
import bike from '../assets/img/bike.svg'

export default {
  setup() {
    // 選擇區域
    const chosedCity = ref('');
    const bikeStations = ref([])

    // get TDX data
    const fetchData = async (url) => {
      const res = await fetch(
          `https://ptx.transportdata.tw/MOTC/v2/${url}`,
          {
          headers: getAuthorizationHeader()
          }
      )
      const json = await res.json();
      bikeStations.value = json
      setMarkers(bikeStations.value)
    }

    watch(chosedCity, () => {
      fetchData(`Bike/Station/${chosedCity.value}?&format=JSON`);
    })


    // 地圖
    let map, lyrOSM, markerGroup;
    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      markerGroup = L.markerClusterGroup().addTo(map)

    }

    function setMarkers(data){
      markerGroup.clearLayers();

      data.forEach(d => {
        // 設定 icon 樣式
        const bikeIcon = L.icon({
          iconUrl: bike,
          iconSize: [40, 40]
        })


        // console.log(d);
        const name = d.StationName.Zh_tw,
              lat = d.StationPosition.PositionLat,
              lon = d.StationPosition.PositionLon;

        const layer = L.marker([lat , lon], {icon: bikeIcon}).bindPopup(name)
        markerGroup.addLayer(layer)
      })

      // zoom to 
      map.fitBounds(markerGroup.getBounds())
      
      
    }


    
    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
      cityList,
      chosedCity,
      bikeStations
    }
  }
}


</script>

<style lang="scss">
#map{
  width: 100vw;
  height: 95vh;
  z-index: 10;
}

.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out{
  font-size: 14px;
}

.selector{
  position:absolute;
  top:10px;
  right:10px;
  z-index: 20;
}
</style>
