const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocalesConTilde(palabra) {
    let numtild = 0;
    for (let i = 0; i < palabra.length; i++) {
        const caracter = palabra.charAt(i);
        if ("áéíóú ".includes(caracter)) {
            numtild++;
        }
    }
    return numtild;
}

rl.question('Ingresa tu palabra: ', (palabra) => {
    palabra = palabra.toLowerCase();
    const contvocalescontilde = contarVocalesConTilde(palabra);
    console.log('El número de vocales con tilde: ' + contvocalescontilde);
    rl.close();
});