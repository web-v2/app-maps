<template>
  <button class="btn btn-primary" @click="onMyLocationClicked">
    Ir a mi ubicación
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

 export default defineComponent ({
 name: 'MyLocationBtn',

 setup() {
 
  const {userLocation, isUserLocationReady} = usePlacesStore();
  const {map} = useMapStore();

  return {
    ///Quede por aquiiiii 
    
    onMyLocationClicked: ()=>{
      map.value?.flyTo({
        center:userLocation.value,
        zoom: 14
      })
    }
  };
},
})
</script>

<style scoped>
button {
    position:fixed;
    top: 90px;
    right: 30px;    
}
</style>