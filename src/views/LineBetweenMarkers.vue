<template>
    <div id="map"></div>
</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import 'leaflet-ajax/dist/leaflet.ajax';
import plane from '../assets/img/plane.svg'

export default {
  setup() {
    // take the two markers you have selected and grab their latlngs and add them to the polyline
    const tapipei = [25.150257104114733, 121.48681640624999];
    const hankong = [25.06072125231416, 118.9434814453125];
    
    // 地圖
    let map, lyrOSM;

    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      // polyline
      const planeLine = L.polyline([tapipei, hankong], {
          color: 'blue',
          dashArray:'5,10'
        }).addTo(map);

      map.fitBounds(planeLine.getBounds())

      // Icon
      const planeIcon = L.icon({
        iconUrl: plane,
        iconSize: [20,20],
        className:'plane'
      })
      const marker = L.marker(tapipei, {icon:planeIcon}).addTo(map)

      
      // chunck Line 把路線切割成小段
      let i,
          length = planeLine._latlngs.length,
          chunkedLatLngs = [];
      
      for (i = 1; i < length; i++) {
        var currentPoint = planeLine._latlngs[i-1],
            nextPoint = planeLine._latlngs[i],
            distance = currentPoint.distanceTo(nextPoint),
            factor = 10 / distance,
            dLat = factor * (nextPoint.lat - currentPoint.lat),
            dLng = factor * (nextPoint.lng - currentPoint.lng);
  
        if (distance > 10) {
          while (distance > 10) {
            currentPoint = new L.LatLng(currentPoint.lat + dLat, currentPoint.lng + dLng);
            distance = currentPoint.distanceTo(nextPoint);
            chunkedLatLngs.push(currentPoint);
          }
        } else {
          chunkedLatLngs.push(currentPoint);
        }
      }

      chunkedLatLngs.push(planeLine._latlngs[length - 1]);
      // 刪減 chunkedLatLngs 的陣列數量
      const filterArr = chunkedLatLngs.filter((i,index) => index % 3 === 0 && index % 2 === 0)


      // animation
      for(let i = 0; i < filterArr.length; i++){
        setTimeout(() => {
          marker.setLatLng(filterArr[i]);
        }, i);
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

#map{
  width: 100vw;
  height: 95vh;
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
