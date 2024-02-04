import { defineComponent, onMounted, ref, watch } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();        
        const { setMap } = useMapStore();
        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Element no exits');
            if ( !userLocation.value ) throw new Error('User Location no existe');
      
            await Promise.resolve();
            //console.log('La localización es: '+userLocation.value); 
            const map = new Mapboxgl.Map({
              container: mapElement.value, // container ID
              style: 'mapbox://styles/mapbox/light-v10', // style URL
              center: userLocation.value,
              zoom: 9 // starting zoom
            });
            /**/
            const myLocationPopup = new Mapboxgl.Popup()
              .setLngLat( userLocation.value )
              .setHTML(`
                <h4>Aquí estoy</h4>
                <p>Actualmente en Sincelejo</p>
              `);
              
      
            const myLocationMarker = new Mapboxgl.Marker()
              .setLngLat( userLocation.value )
              .setPopup( myLocationPopup )
              .addTo( map );
                //console.log(myLocationMarker);
            setMap(map);
          }

          onMounted(() => {
            if ( isUserLocationReady.value ){
                return initMap();
            } 
        });
    
        watch( isUserLocationReady, ( newVal ) => {
          if ( isUserLocationReady.value ){
            initMap();
          } 
          console.log(newVal);
        })

        return { 
            isUserLocationReady,
            userLocation,
            mapElement
        }
    }
});