import { computed } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '@/store/index';
import Mapboxgl from 'mapbox-gl';

export const useMapStore = () => {
    const store = useStore<StateInterface>();


    
    return {
        // State
        map: computed( () => store.state.map.map ), 
        distance: computed( () => store.state.map.distance ), 
        duration: computed( () => store.state.map.duration ),       

        // Getters

        //Mutations
        setMap: (map:Mapboxgl.Map) => store.commit('map/setMap', map)
        
        //Actions
    }
}

