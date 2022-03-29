// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const occasion = "surprise";
let int = 10;

function writeCards(cardNames, cardOccasion) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }

    return messages;
}

writeCards(names, occasion);

console.log(messages);

function countDown (int) {
    while (int > -1) {
        console.log(int--);
    }

}





