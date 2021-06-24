
const axios = require('axios');
class Busquedas {

    historial = ['Ecatepec', 'Coacalco', 'Atizapán']

    constructor() {
        //TODO: leer DB si existe
    }

    async ciudad(lugar = '') {
        // petición http

        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
        } catch (error) {
            return [];
        }


        return [];
    }
}


module.exports = Busquedas;
