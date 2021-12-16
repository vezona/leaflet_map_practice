<template>
  <div class="wrap">
    <div id="map"></div>
    <div class="info">
    </div>
  </div>
</template>

<script>
import '../assets/scss/_reset.scss';
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// draw
import "leaflet-draw";
import 'leaflet-draw/dist/leaflet.draw.css';
// styleEditor
import 'leaflet-styleeditor/dist/javascript/Leaflet.StyleEditor';
import 'leaflet-styleeditor/dist/css/Leaflet.StyleEditor.css';

export default {
  setup() {
    // 地圖
    let map, lyrOSM, featurelyr;

    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      // 建立一個新的 featurelayer 來放建立的圖型
      featurelyr = L.featureGroup().addTo(map)

      // 建立Draw control
      const ctlDraw = new L.Control.Draw({
        position:'topright',
        draw:{
          circle:false,
          rectangle: { showArea: false }
        },
        edit:{
          featureGroup : featurelyr
        }
      })

      ctlDraw.addTo(map)

      // 上面只是加上 draw control
      // 如果要建立圖型，要使用到 Event -> draw:created
      map.on('draw:created', (e)=>{
        console.log(e);
        // 把 eventObj 中的 layer 加上去
        // 這個 layer 包含 用draw:created 時建立的 vector layer
        featurelyr.addLayer(e.layer)
      })

      // style Editor
      const ctlEditor = L.control.styleEditor()
      ctlEditor.addTo(map)
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
