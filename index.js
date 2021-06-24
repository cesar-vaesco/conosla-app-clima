/* const { leerInput } = require("./inquirer") */
require('colors')

const { inquirerMenu, pausa } = require('./helper/inquirer');




const main = async () => {

    let opt;

    do {

        //Función que imprime el menú
        opt = await inquirerMenu();
        console.log({ opt });

        if (opt !== 0) await pausa();


    } while (opt !== 0);

}


main();
