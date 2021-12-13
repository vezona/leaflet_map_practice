
<template>
  <div class="wrapper">
    <router-link to="mapbox">mapbox</router-link>
    <router-link to="event">event、original event</router-link>
    <router-link to="locate">locate Methods and associate event</router-link>
    <router-link to="zoom">zoom</router-link>
     <router-link to="popups">popups</router-link>
     <router-link to="controls">controls</router-link>
    <!-- <router-link to="markers">markers</router-link> -->
  </div>
</template>

<script setup>

</script>


<style lang="scss" scoped>
// .wrapper{
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
a {
  margin:10px;
  padding:10px;
  width: fit-content;
  background-color: rgba(40,78,78);
  color: white;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
}
</style>
