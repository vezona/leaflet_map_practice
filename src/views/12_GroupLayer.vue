<template>
  <div class="wrap">
    <div id="map"></div>
    <div class="info">
      <button type="button" @click="addMrk">點擊{{ btnText }}</button>
      <br />
      <br />
      <button type ="button" @click="changeLayerStyle">改變顏色</button>
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
    let map, lyrOSM, plgGuting, plgYonghe, polgMultiple, grouplayer, grouplayer2, marker;
    const GutingCoor = [
            [
              25.042681800625722,
              121.5277576446533
            ],
            [
              25.03894916887192,
              121.51591300964354
            ],
            [
              25.018417664026128,
              121.5186595916748
            ],
            [
              25.01079524642272,
              121.54252052307129
            ],
            [
              25.019506542198013,
              121.56166076660156
            ],
            [
              25.043381656432114,
              121.56037330627441
            ],
            [
              25.042681800625722,
              121.5277576446533
            ]
          ];

    const YongheCoor = [
          [
            [
              25.018884327282397,
              121.51144981384277
            ],
            [
              24.995782367241738,
              121.51393890380858
            ],
            [
              25.001072088396175,
              121.55539512634279
            ],
            [
              25.018884327282397,
              121.51144981384277
            ]
          ]
        ];
    const YongheHoleCoor = [
          [
            [
              25.010717464212547,
              121.51883125305176
            ],
            [
              25.00192775718502,
              121.51977539062499
            ],
            [
              25.003561290142674,
              121.5333366394043
            ],
            [
              25.010717464212547,
              121.51883125305176
            ]
          ]
        ];
    const Multi1 = [
          [
            [
              25.033972149830436,
              121.6377067565918
            ],
            [
              25.01367315356623,
              121.64380073547363
            ],
            [
              25.008617325916603,
              121.66740417480469
            ],
            [
              25.027206190770983,
              121.68645858764648
            ],
            [
              25.033972149830436,
              121.6377067565918
            ]
          ]
        ];

    const Multi2 = [
          [
            [
              25.037704933043095,
              121.67272567749023
            ],
            [
              25.00760613541079,
              121.6831111907959
            ],
            [
              25.019817648473204,
              121.70182228088377
            ],
            [
              25.037704933043095,
              121.69246673583984
            ],
            [
              25.037704933043095,
              121.67272567749023
            ]
          ]
        ];
    const mapInit = () => {
      const center = [25.0263064, 121.5262934];
      map = L.map("map", { zoomControl : false, attributionControl: false})
              .setView(center, 10);

      lyrOSM =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

      map.addLayer(lyrOSM);

      // polygon
      plgGuting = L.polygon(GutingCoor)

      // polygon with hole
      plgYonghe = L.polygon(
            [YongheCoor, YongheHoleCoor], 
            { color:'orange', 
              fillColor:'red',
              fillOpacity:0.4
            }
          )
      // Multiple polygon
      polgMultiple = L.polygon([[Multi1], [Multi2]], {color:'red', fillColor:'red'})

      // groups 
      grouplayer = L.featureGroup([plgGuting, plgYonghe]).addTo(map)
      grouplayer2 = L.featureGroup([polgMultiple]).addTo(map)

      // marker 
      marker = L.marker([24.995782367241738,121.51393890380858])

      // layer controls
      const basemaps = {
        'base map': lyrOSM
      }

      const vectormaps = {
        '群組一': grouplayer,
        '群組二': grouplayer2
      }

      const lyrControl = L.control.layers(basemaps, vectormaps).addTo(map)
    }

    const btnText = ref('加上 marker')

    const addMrk = () => {
      // 判斷是否有這個layer,有就加上，沒有就移除
      if (grouplayer.hasLayer(marker)){
        grouplayer.removeLayer(marker)
        btnText.value = '加上 marker'
      } else {
        grouplayer.addLayer(marker)
        btnText.value = '移除 marker'
      }
    }

    // 改變 group layers 的樣式
    const changeLayerStyle = () => {
        grouplayer2.setStyle({color: 'purple', 'fillColor': 'yellow'})
    }

    // 綁定DOM
    onMounted(() => {
      mapInit()
    })

    return {
      btnText,
      addMrk,
      changeLayerStyle
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
