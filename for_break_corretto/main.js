const myarray = [
    'pippo',
    'pluto',
    'peperino',
    'minnie',
    'gastone'
]

let invitato = prompt('Come ti chiami?');

let trovato = false;

for (let i = 0 ; i < myarray.length && trovato == false; i++) {

    console.log('sto verificando:' + myarray[i]);

    if (myarray[i] == invitato) {
        trovato = true;
    }
    
}


let i = 0;

while(i < myarray.length && trovato == false) {

    console.log('sto verificando:' + myarray[i]);

    if (myarray[i] == invitato) {
        trovato = true;
    }

    i++;
}




if (trovato) {
    alert('sei autorizzato ad accedere!');
} else {
    alert('Non sei invitato alla festa!');
}