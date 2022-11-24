// GIOCO DEI DADI 

// cercare di generare un numero casuale per entrambi i giocatori e far comparire 
// l'alert "hai vinto o Ho vinto IO" a seconda di quale sia il numero più alto 



let userRandomNumber = Math.floor(Math.random() *6 + 1);
console.log(userRandomNumber);

let computerRandomNumber = Math.floor(Math.random() *6 + 1);
console.log(computerRandomNumber);


if ((userRandomNumber.value) > (computerRandomNumber.value)) {
    alert("HAI VINTO TU!");
} else if ((userRandomNumber.value) < (computerRandomNumber.value)) {
    alert("HO VINTO IO!");
} else {
    alert("PAREGGIO");
}


