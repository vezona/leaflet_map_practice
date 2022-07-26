<template>
  <div class="wrap">
    <div ref="smallMap" id="smallMap"></div>
    <div ref="map" id="map"></div>
    <div class="info">
      <p><button @click="cancelEditedCoords">取消</button></p>
      <br>
      <p><button @click="save">儲存</button></p>
      <br>
      <p><button @click="changeConditions = !changeConditions">changeConditions</button></p>
      <!-- <p v-if="changeConditions === true">{{a}}{{c}}</p> -->
      {{conditions}}
      <br>
      {{a||null}}
      {{b||null}}
      {{c||null}}
    </div>
  </div>
</template>

<script>
import '../assets/scss/_reset.scss'
import { ref, reactive, onMounted, watch, watchEffect, toRefs } from 'vue';
import { mapInit, cancelEditedCoords, saveEditedCoords } from '../js/useMap';

export default {
  setup() {
    // map
    let modalMapObj, smallMapObj;
    const map = ref(null);
    const smallMap = ref(null);

    const save = ()=>{
      saveEditedCoords(modalMapObj);
    }

    let dataset;
    const a = {a:1}, b = {b:2}, c = {c:3};
    // const dataset = {...a, ...b, ...c};
    const changeConditions = ref(false);
    watchEffect(()=>{
      dataset = changeConditions.value
        ?  {...a, ...b}
        :  {...a, ...c}
    })

    const conditions = reactive(dataset);
    watchEffect(()=>{
      if (changeConditions.value){
        Object.keys(c).forEach(key => delete conditions[key]);
        Object.assign(conditions, dataset)
      } else {
        Object.keys(b).forEach(key => delete conditions[key]);
        Object.assign(conditions, dataset)
      }
      
      console.log('conditions', conditions);
    })


    // const conditions = reactive(dataset);
    

    onMounted(async () => {
      modalMapObj = await mapInit(map.value, true);
      smallMapObj = await mapInit(smallMap.value, false)
    });

    return {
      conditions,
      ...toRefs(conditions),
      map,
      smallMap,
      cancelEditedCoords,
      save,
      changeConditions
    }
  }
}


</script>

<style lang="scss">
.wrap {
  display:flex;
}
#smallMap{
  width: 30vw;
  height: 50vh;
}

#map{
  width: 40vw;
  height: 50vh;
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
