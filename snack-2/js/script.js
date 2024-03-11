// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// chiedo 5 numeri all'utente 
let sum = 0;
for(let i = 0; i < 5; i++){
    const userNumber = parseInt(prompt('dimmi 1 numero'));
    // faccio la somma 
    sum += userNumber;

    console.log(userNumber)
    
}
console.log(sum)