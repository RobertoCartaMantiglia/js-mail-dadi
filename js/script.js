// GIOCO DEI DADI 

// cercare di generare un numero casuale per entrambi i giocatori e far comparire 
// l'alert "hai vinto o Ho vinto IO" a seconda di quale sia il numero più alto 



// const button = document.getElementById("bottone");

// let userRandomNumber = Math.floor(Math.random() *6 + 1);
// console.log(userRandomNumber);

// let computerRandomNumber = Math.floor(Math.random() *6 + 1);
// console.log(computerRandomNumber);


// if ((userRandomNumber) > (computerRandomNumber)) {
//     alert("HAI VINTO TU!");
// } else if ((userRandomNumber) < (computerRandomNumber)) {
//     alert("HO VINTO IO!");
// } else {
//     alert("PAREGGIO");
// }


// ================================================================== 


// EMAIL 

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.


const emailList = [
    "ginogino@gmail.com",
    "minociccino@hotmail.it",
    "luigimicco@boolean.com",
    "stefanocappelli_pochi@boolean.com",
    "riccardoplomooplata@boolean.uk",
];
// prima ho creato l'array (lista)

// dichiaro la costante 
const button = document.getElementById("bottone");

// dopo averlo fatto aggiungo l'evento click dove inizierà il mio processo di verifica dell'utente 

button.addEventListener("click", function () {
//  verifico il valore della costante del dato inserito dall'utente a seguito del click
    const userEmail = document.getElementById("verifica-email").value;

// è più probabile che non vi sia nell'elenco da me fatto
    let find = false;

    // per attuare la ricerca apro un ciclo for la cui ampiezza sarà pari alla lunghezza della lista. 
    // i deve essere < di emailList.length poiché i valori in essa partono da zero e non da uno... la lista è composta da 3 valori ma il loro posizionamento parte da zero

    for (let i = 0; i < emailList.length; i++) {
        if (userEmail == emailList[i]) {
            find = true;
        }   
    }
    // fuori dal for stampo la funzione find per vedere se il dato sia vero o meno
    console.log(find);


    // se find è verificato allora parte un alert verificato
    if (find) {
        alert("Utente verificato!")
    } else {
        alert("Utente non abilitato!")
    }

})



