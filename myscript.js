/* definisco un'array con all'interno dei cognomi */


var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

/* chiedo all'utente di inserire il cognome */
var mioCognome = prompt("Inserisci il tuo cognome");


/* inserisco il cognome nell'array */
listaCognomi.push(mioCognome);

/* rendo tutti i cognomi in maiuscolo */
listaCognomi = listaCognomi.map(function (x) { return x.toUpperCase(); })

/* li stampo in ordine alfabetico */
console.log(listaCognomi.sort());
/* stampo la posizione del cognome inserito */
console.log(listaCognomi.indexOf(mioCognome.toUpperCase()) + 1);

document.getElementById("miocognome").innerHTML = "Il tuo cognome è:" + " " + mioCognome.toUpperCase();
document.getElementById("listcongnomi").innerHTML = "La lista cognomi in ordine alfabetico è la seguente:" + " " + listaCognomi;
document.getElementById("tuoindice").innerHTML = "Il tuo cognome è in posizione :" + " " + (listaCognomi.indexOf(mioCognome.toUpperCase()) + 1);

