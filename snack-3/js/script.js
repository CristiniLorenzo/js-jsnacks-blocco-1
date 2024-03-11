// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// array vuoto 
const numberList = [];
for(let i = 0; i < 6; i++){
    const userNumber = parseInt(prompt('dimmi 1 numero'));

    if (userNumber % 2 !==0){
        numberList.push(userNumber);
    }
}

console.log(numberList);