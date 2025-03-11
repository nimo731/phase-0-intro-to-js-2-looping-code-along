// Code your solutions in this file
function writeCards(names, event) {
    let messages = []; // Corrected variable name

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages; // Return the correct variable
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number) {  // Updated function name to match the test
    while (number >= 0) {
        console.log(number);
        number--;  
    }
}

countDown(10);
