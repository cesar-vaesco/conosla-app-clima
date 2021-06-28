/** Esta clase da la funcionalidad a la línea de comandos
 * ayudandose de la librería inquirer
  */
const inquirer = require('inquirer');
require('colors');


//Menú de la app -->  función llamada dentro de inquererMenu()
const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: `-- ${'¿'.green}Qué desea hacer${'?'.green} -->`,
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'3.'.green} Salir....\n`
            }

        ]
    }
];




// Cabecera del menú
const inquirerMenu = async () => {
    console.clear();
    console.log('\n==========================='.green);
    console.log('** Seleccione una opción **'.yellow);
    console.log('===========================\n'.green);

    const { opcion } = await inquirer.prompt(menuOpts);

    return opcion;
}


// Pregunta para -salir  - hace una pausa y pregunta
const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar \n`
        }
    ]

    console.log('\n');

    await inquirer.prompt(question);
}


//  Función que permite leer el dato que ingresa el usuario
const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listarLugares = async (lugares = []) => {

    const choices = lugares.map((lugar, i) => {

        const idx = `${(i + 1)}`.green;

        return {
            value: lugar.id,
            name: `${idx}. ${lugar.nombre}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (mensaje) => {

    const pregunta = [{
        type: 'confirm',
        name: 'ok',
        mensaje
    }];

    const { ok } = await inquirer.prompt(pregunta);
    return ok;
}

const mostrarListadoChecklist = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${(i + 1)}`.green;

        return {
            value: tarea.id,
            name: `${idx}. ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });



    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist
}
