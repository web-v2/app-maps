export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; //lng, lat
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined//[9.304596,-75.411807]
    }
}

export default state;