// Calcola la somma e la media dei primi 10 numeri. 
let sum = 0;
let media = 0;
const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
// faccio somma
for (let i = 0; i < 10; i++){
    const thisNumber = numbers[i];
    console.log(thisNumber);

    sum += thisNumber;

    media = sum / (i+1);
}
console.log(media);

console.log(sum);
// faccio la media 