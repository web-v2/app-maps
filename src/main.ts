import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoic3ZlcmdhcmEiLCJhIjoiY2tzYjQ4NzNlMDM2MzJvbnY1YTg2dXQwZyJ9.lOWA31Gavf545Qd_RKrcLw';

if(!navigator.geolocation){
    throw new Error('Tu navegador no soporta el GeoLocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
