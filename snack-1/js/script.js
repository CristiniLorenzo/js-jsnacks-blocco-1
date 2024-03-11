// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati 
// (inserire il numero nell'array solo se non è già presente).

// array vuoto 
const numberList = [];

// chiedere numeri 
for(let i = 0; i < 5; i++){
    const userNumber = parseInt(prompt('dimmi 1 numero'));
    console.log(userNumber);

    // verificare se il numero è già presente nella lista 
    if (numberList.includes(userNumber) === false){
        numberList.push(userNumber);
    }
}

console.log(numberList)