
let numero = parseInt(prompt('Inserisci un numero maggiore di zero'));

while (numero <= 0 || isNaN(numero)) {
    alert('Ha inserito un numero sbagliato!');
    numero = parseInt(prompt('Inserisci un numero maggiore di zero'));
}

let numero;

do {
    alert('Ha inserito un numero sbagliato!');
    numero = parseInt(prompt('Inserisci un numero maggiore di zero'));
} while (numero <= 0 || isNaN(numero))


console.log(numero);


/*
let numero = parseInt(prompt('Inserisci un numero maggiore di zero'));

while (numero <= 0 || isNaN(numero)) {
    numero = parseInt(prompt('Hai sbagliato, il numero deve essere maggiore di zero!'));
}
*/

/*

let numero;
let precedenteErrore = false;

do {
    if (precedenteErrore) {
        numero = parseInt(prompt('Hai sbagliato, il numero deve essere maggiore di zero!'));
    } else {
        numero = parseInt(prompt('Inserisci un numero maggiore di zero'));
    }
    precedenteErrore = true;
} while (numero <= 0 || isNaN(numero))

*/