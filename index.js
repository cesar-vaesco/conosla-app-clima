
require('colors')

const { inquirerMenu, pausa, leerInput } = require('./helper/inquirer');
const Busquedas = require('./models/busqueda');




const main = async () => {

    const busquedas = new Busquedas();

    let opt;

    do {

        //Función que imprime el menú
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad :');
                await busquedas.ciudad(lugar);
                console.log('Lugar: ', lugar);

                //Buscar los lugares

                //Seleccionar el lugar

                //Datos de clima

                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:');
                console.log('Lat:');
                console.log('Lng:');
                console.log('Temperatura:');
                console.log('Mínima:');
                console.log('Máxima:');

                break;

            default:
                break;
        }

        await pausa();
        /* if (opt !== 0) await pausa(); */


    } while (opt !== 0);

}


main();
