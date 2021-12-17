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
import 'leaflet-ajax/dist/leaflet.ajax'

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

      const returnMarker = (json, latlng) => {
        const attribute = json.properties // 能夠讓我們 access to 整個json資料的 attribute data
        // console.log(attribute);  // 可以叫出來看
        let radius,color;
        if (attribute.name === '大安'){
          radius = 20;
          color = 'deeppink';
        } else {
          radius = 10;
          color = 'green';
        }
        return L.circleMarker(latlng, { radius: radius, color: color })
                .bindTooltip(`<p>${attribute.name}</p>`) // 把 attributes 使用 bindTooltip 綁定上去
      }

      // GeoJSON
      const polygon = L.geoJson.ajax('geoJson/markers.geojson',
       { pointToLayer : returnMarker, // 是一個方法，
        }
      );
      polygon.addTo(map)

      // 套件的 event handler: data:loaded
      polygon.on('data:loaded', () => {
        // 資料一載完就讓 map zoom 到資料的區域
        map.fitBounds( polygon.getBounds() )
      })

      // Layer control
      const basemaps = {
        'base':lyrOSM
      };
      const overlays = {
        '台北市': polygon
      };
      const ctlLayer = L.control.layers(basemaps, overlays).addTo(map)
    
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
