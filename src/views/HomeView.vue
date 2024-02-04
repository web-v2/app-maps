<template>
  <div class="home">
    <h1>Welcome to Your Vue.js + TypeScript App</h1>
    <hr>
    <MapView />
    <MyLocationBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';
import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';

export default defineComponent({
  name: 'HomeView',
  components: {MapView, MyLocationBtn},
  setup(){
    usePlacesStore();
  }
});
</script>
