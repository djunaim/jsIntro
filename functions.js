console.log("boo");

let firstName = 'George';
let lastName = 'Weasley';

console.log( `${firstName} ${lastName}` )

firstName = 'Bill';
lastName = 'Weasley';

console.log( `${firstName} ${lastName}` )

firstName = 'Ginny';
lastName = 'Weasley';

console.log( `${firstName} ${lastName}` )

const sayMyName = (first, last) => {
    return `${first} ${last}`;
}

console.log(sayMyName('Monica', 'Djunaidi'));

const nuggetizer = (animal) => {
    return `nugget ${animal}`;
}


const humaneNuggetizer = (animal) => {
    return animal;
}

const spamFactory = (literallyAnything) => {
    return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('john wark'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('john wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('john wark'));

// const printToDOM = (toPrint) => {
//     document.getElementById('output').innerHTML += toPrint;
// }

let bandNumber = 1

const takeNumber = (bandName) => {
    printToDOM(`<h3>${bandNumber}. ${bandName}</h3>`);
    bandNumber++; //increment by 1
}

takeNumber('Galactic Scum');
takeNumber('Underdogs');

printToDOM('Monica');