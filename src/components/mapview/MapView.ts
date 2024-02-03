import { defineComponent, onMounted, ref } from 'vue';
import { userPlacesStore } from '@/composables';

export default defineComponent({
    name: 'MapView',
    setup() {
        const {userLocation, isUserLocationReady} = userPlacesStore();
        const mapElement = ref<HTMLDivElement>();

        onMounted(()=>{
            console.log(mapElement.value);
        });

        return { 
            userLocation, 
            isUserLocationReady,
            mapElement
        }
    }
});