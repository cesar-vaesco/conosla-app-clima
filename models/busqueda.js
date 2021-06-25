
const axios = require('axios');
class Busquedas {

    historial = ['Ecatepec', 'Coacalco', 'Atizapán']

    constructor() {
        //TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiY2VzYXJkZXYiLCJhIjoiY2txYmUzY2xkMDNuaTJucGUwZ2tmcmc5cSJ9.pth8dYxnio3FOE9u_4S3og',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = '') {

        try {
            // petición http
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox

            });

            const resp = await intance.get();

            console.log(resp.data);

        } catch (error) {
            return [];
        }


        return [];
    }
}


module.exports = Busquedas;
