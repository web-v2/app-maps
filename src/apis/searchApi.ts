import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoic3ZlcmdhcmEiLCJhIjoiY2tzYjQ4NzNlMDM2MzJvbnY1YTg2dXQwZyJ9.lOWA31Gavf545Qd_RKrcLw'
    }
});


export default searchApi;


