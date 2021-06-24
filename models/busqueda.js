
const axios = require('axios');
class Busquedas {

    historial = ['Ecatepec', 'Coacalco', 'Atizapán']

    constructor() {
        //TODO: leer DB si existe
    }

    async ciudad(lugar = '') {
        // petición http

        try {
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid%2C%20Espa%C3%B1a.json?access_token=pk.eyJ1IjoiY2VzYXJkZXYiLCJhIjoiY2txYmUzY2xkMDNuaTJucGUwZ2tmcmc5cSJ9.pth8dYxnio3FOE9u_4S3og&limit=5&language=es');
            console.log(resp.data);
        } catch (error) {
            return [];
        }


        return [];
    }
}


module.exports = Busquedas;
