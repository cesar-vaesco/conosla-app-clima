
const axios = require('axios');
class Busquedas {

    historial = ['Ecatepec', 'Coacalco', 'Atizapán']

    constructor() {
        //TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    /* const openWeatherToken = process.env.OPENWEATHER_KEY */

    get paramsOpenWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    async ciudad(lugar = '') {

        try {
            // petición http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox

            });

            const resp = await instance.get();
            /* console.log(resp.data.features); */
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
            /* return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            })); */

        } catch (error) {
            return [];
        }


        return [];
    }

    async climaLugar(lat, lon) {
        try {

            // Instancia de axios.create()
            // petición http
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOpenWeather, lat, lon }

            });


            const resp = await instance.get();
            /* console.log(resp); */
            const { weather, main } = resp.data;

            console.log();

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }

        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = Busquedas;
