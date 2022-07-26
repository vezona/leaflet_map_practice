import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-draw";
import 'leaflet-draw/dist/leaflet.draw.css';
import { ref, computed, reactive, toRefs, watch, nextTick } from 'vue';

let featurelyr;

// 地圖圖磚設定
const mapType = () => {
  const Layer_ID = 'EMAP';
  const MAP_TYPE = {
    osm: `https://{s}.tile.osm.org/{z}/{x}/{y}.png`,
    nlsc: `https://maps.nlsc.gov.tw/S_Maps/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${Layer_ID}&STYLE=_null&TILEMATRIXSET=EPSG:3857&TILEMATRIX=EPSG:3857:{z}&TILEROW={y}&TILECOL={x}&FORMAT=image/png`,
  };

  return MAP_TYPE.nlsc;
};


const currRect = reactive({
  topLeftCord: [], //25.029106724134973, 121.53038620948793
  topRightCord: [],
  downRightCord: [], // 25.024080697222264, 121.5386474132538
  downLeftCord: [],
});

// 取消編輯圖形
export const cancelEditedCoords = (map) => {
  console.log('cancel');
}

// 儲存編輯圖形
export const saveEditedCoords = (map) => {
 console.log(map);
  console.log('featurelyr', featurelyr);
  const geoJSON = featurelyr.toGeoJSON();
  const marker = L.marker([25.178117, 121.689572]);
  featurelyr.addLayer(marker);
}

export const mapInit = async (mapElementRef, modalOpen) => {

  // 選擇圖磚
  const mapTileType = mapType();

  // 設定大小地圖不同的 zoom 倍數、地圖顏色
  let currZoom = modalOpen ? 15 : 14;
  let rectStyle = modalOpen
    ? {
        color: '#eaab57',
        fillColor: '#f97d03',
        weight: 2,
      }
    : {
        color: 'white',
        opacity: 0.8,
        fillColor: '#f97d03',
        fillOpacity:0.3,
        weight: 2,
    };
  
  const map = L.map(mapElementRef, {
    center: [25.178117, 121.689572],
    zoomControl: false,
    minZoom: 13,
    maxZoom: 18,
    zoom: currZoom,
    zoomDelta: 0.5,
    zoomSnap: 0,
    attributionControl: false,
  });

  const tileLayer = L.tileLayer(mapTileType, {
    maxZoom: 19,
    attribution: `&copy; <a target="_blank" rel="noopener noreferrer" href="https://maps.nlsc.gov.tw/">內政部國土測繪中心</a>`,
  });
 

  // 設定初始範圍離中心點半徑 1 公里
  const bounds = L.latLng([25.178117, 121.689572]).toBounds(500)
  const initRect = L.rectangle([[25.187100152770714, 121.69949824967824], [25.169133847229286, 121.67964575032175]], rectStyle);

  map.addLayer(tileLayer);
  
  if (modalOpen) {
    featurelyr = new L.featureGroup().addTo(map);
    featurelyr.addLayer(initRect);

    // 開啟編輯模式
    initRect.editing.enable();
    map.on('draw:editresize', e => {
      console.log(e);
    });
    // featurelyr = new L.featureGroup().addTo(map);

  } else {
    map.dragging.disable();
    map.scrollWheelZoom.disable()
    initRect.addTo(map);
    map.fitBounds(initRect.getBounds(), {
      padding: [30, 30],
    });
  }

  return map;
};
