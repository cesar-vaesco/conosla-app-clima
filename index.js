const { leerInput } = require("./inquirer")

require('colors')



const main = async () => {
    const texto = await leerInput('Hola: ');

    console.log(texto);

}


main();
