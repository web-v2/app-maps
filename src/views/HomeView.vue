<template>
  <div class="home">
    <span class="text-center" >
      <h1>Welcome to your AppMaps [Vue + TS] - Samir V2</h1>
    </span>
    <hr>
    <MapView />
    <MyLocationBtn />
    <SearchBar />
    <TripDetails />    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';
import MapView from '@/components/mapview/MapView.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';

export default defineComponent({
  name: 'HomeView',
  components: {MapView, MyLocationBtn, SearchBar, TripDetails},
  setup(){
    usePlacesStore();
  }
});
</script>
