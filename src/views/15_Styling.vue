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
import dog from '../assets/img/dog.png';
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

      // 自訂 icon
      const iconDog = L.icon(
            {
             iconUrl: dog,
             iconSize:[48,48],
             iconAnchor:[20,24],
             popupAnchor:[-10,-20]
            }
          )
      const marker = L.marker([25.04307060990016, 121.54234886169434], {icon :iconDog})
      marker.bindPopup('汪汪').addTo(map)

      const iconDiv = L.divIcon({className: 'my-div-icon'});
      L.marker([25.05807060990016, 121.34234886169434], {icon: iconDiv}).addTo(map);


      // 距離中心點 X meter, 畫出四方型
      const bounds = L.latLng(25.04307060990016, 121.54234886169434).toBounds(500)
      const rectCoor = [[bounds._northEast.lat, bounds._northEast.lng], [bounds._southWest.lat, bounds._southWest.lng]]
      L.rectangle(rectCoor).addTo(map);
      // map.fitBounds(bounds);

    // styling poly - style
    //  const lyrPolygon = L.geoJson.ajax('geoJson/polygon.json', {style:{color:'pink'}})
    //  lyrPolygon.bindTooltip('多邊形').addTo(map)


     // styling poly - onEachFeature
      const lyrPolygon = L.geoJson.ajax('geoJson/polygon.json', {
          style: stylePolygon,
          onEachFeature: processPolygon
      })
      lyrPolygon.addTo(map)

      function stylePolygon(json){
          console.log(json); // feature 
          const attributes = json.properties
          const type = json.type // 
          if (type === 'Feature'){
              return { color : 'pink', weight: 10}
          }
      }

      function processPolygon(json, layer){
          json.properties = '多邊形'
          layer.bindTooltip(json.properties)

      }

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

.my-div-icon{
    width:48px;
    height:48px;
    background-color: white;
    border:2px solid black
}
</style>
