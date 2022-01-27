const lista = [
    'insalata',
    'pomodori',
    'latte',
    'pane'
];

const htmlListaContainer = document.getElementById('lista_della_spesa');

let elementi = "";

/*
for (let i=0; i<lista.length; i++) {
    elementi += `<li>${lista[i]}</li>`;
}
*/


let j = 0;

while (j < lista.length) {
    elementi += `<li>${lista[j]}</li>`;
    j++;
}

htmlListaContainer.innerHTML = elementi;
