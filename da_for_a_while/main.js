const myarray = [
    'pippo',
    'pluto',
    'peperino'
]

//variante con il ciclo for
for (let i = 0 ; i < myarray.length; i++) {
    console.log(myarray[i]);
}


//variante con il ciclo while

//esterno al ciclo while, 
//scrivo l'eventuale inizializzazione come farei con il primo argomento del for
let j = 0; 
while (j < myarray.length) {  //la condizione nel while è il secondo argomento della funzione for
    console.log(myarray[j]);
    j++; // questo è il terzo argomento della funzione for
}



