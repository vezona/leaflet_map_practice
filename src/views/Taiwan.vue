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

      // Taiwan
      const features = L.featureGroup();
      const taiwan = new L.geoJson.ajax('COUNTY_MOI_1090820.json',{
    	  middleware: function(data){ // https://github.com/calvinmetcalf/leaflet-ajax
          	// console.log(data);
            L.geoJson(data, {
              onEachFeature: onEachFeature,
              style: setStyle
            })
    	  }
      })

      // layer control
      const lyrControl = L.control.layers().addTo(map)    
      lyrControl.addOverlay(features, '全部')  

      function onEachFeature(attributes, layer){
        // console.log(layer)
        layer.bindTooltip((layer) => {
          return layer.feature.properties.COUNTYNAME
        })
        .addTo(features)

        // 把 layer 一一加到 layer control 上面
        lyrControl.addOverlay(layer, layer.feature.properties.COUNTYNAME)

        // hover 時改變區域顏色
        layer.on('mouseover', () => {
          layer.setStyle({ fillColor:'yellow', fillOpacity:0.6})
        })

        layer.on('mouseout', () => {
          layer.setStyle({ fillColor:'none', fillOpacity:0})
        })

      }

      function setStyle(geoJsonFeature){
        return { fillOpacity: 0 }
      }

      // map 監聽 overlayer 被加入時
      map.on('overlayadd', (eventLayer) => {
        //  console.log(eventLayer);
        // if(eventLayer.name === '全部'){
        //   features.clearLayers() 
        // }
        
      })

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
  width: 100vw;
  height: 90vh;
}

.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out{
  font-size: 14px;
}
</style>
