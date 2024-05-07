'use stricti';

// Creo array della lista della spesa
const lista = ['pasta', 'cioccolata', 'porchetta', 'tovaglioli', 'trippa', 'pomodori', 'salsa verde'];

// Creo l'elemenrto html (ul) e lo richiamo creando una variabile
const ul = document.getElementById('lista-spesa');

// Creo una variabile esterna al ciclo per tenere il conto
let index = 0;

// Creo un ciclo finchè la variabile esterna è uguale alla lunghezza di array
while (index < lista.length) {

    // Creo l'elemento li
        const li = document.createElement('li');
    
    // Appendo l'elemento dell'array a li
        li.append(lista[index]);
    
    // appendo li a ul
        ul.append(li);
    
    // incremento la variabile esterna al ciclo
        index++;
    };