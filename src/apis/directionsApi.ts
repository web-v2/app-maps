import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoic3ZlcmdhcmEiLCJhIjoiY2tzYjQ4NzNlMDM2MzJvbnY1YTg2dXQwZyJ9.lOWA31Gavf545Qd_RKrcLw'
    }
});


export default directionsApi;


