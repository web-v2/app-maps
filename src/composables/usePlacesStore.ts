import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '@/store/index';

export const usePlacesStore = () => {
    const store = useStore<StateInterface>();

    onMounted( () => {
        if ( !store.getters['places/isUserlocationReady'] ) {
            store.dispatch('places/getInitialLocation');
        }
    });
    
    return {
        // State
        isLoading: computed( () => store.state .places.isLoading ),
        userLocation: computed( () => store.state.places.userLocation ),
        isLoadingPlaces: computed( () => store.state.places.isLoadingPlaces),
        places: computed( () => store.state.places.places),

        // Getters
        //isMapReady: computed<boolean>( () => store.getters['map/isMapReady'] ),
        isUserLocationReady: computed<boolean>( () => store.getters['places/isUserlocationReady'] ),
        //Mutations

        //Actions
        searchPlacesByTerm: (query:string) => store.dispatch('places/searchPlacesByTerm', query)
    }
}

