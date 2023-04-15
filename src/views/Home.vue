<template>
  <div>
    <div id="map-wrap"></div>
  </div>
</template>
<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    const map = new BMapGL.Map("map-wrap")
    const point = new BMapGL.Point(116.404, 39.915)

    map.centerAndZoom(point, 15)
  }, 1000)
})

</script>

<style scoped>
#map-wrap {
  width: 100vw;
  height: 100vh;
}
</style>