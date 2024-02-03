<template>
  <div class="home">
    <h1>Welcome to Your Vue.js + TypeScript App</h1>
    <hr>
    <MapView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { userPlacesStore } from '@/composables';
import MapView from '@/components/mapview/MapView.vue';

export default defineComponent({
  name: 'HomeView',
  components: {MapView},
  setup(){
    userPlacesStore();
  }
});
</script>
