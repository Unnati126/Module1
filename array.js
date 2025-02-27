let emptyScores = new Array();
//or
let scored = ["A+", 95 , "C-", 55, 83, 71, "B+"];
console.log(scored[0]); 
console.log(scored[1]);
console.log(scored[5]); 
console.log(scored[6]); 

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

mountains[1] = 'Kilimanjaro';
console.log(mountains); 

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];

console.log(seas);
seas.push('Red Sea');

console.log(seas);
seas.unshift('Adriatic Sea');

let lastSea = seas.pop();
console.log(lastSea); // Red Sea
console.log(seas);

let rivers = ['Mississippi', 'Amazon', 'Nile'];
let lastRiver = rivers.pop();
console.log(lastRiver); // Nile
console.log(rivers); // ['Mississippi', 'Amazon']

let firstRiver = rivers.shift();
console.log(firstRiver); // Mississippi
console.log(rivers); // ['Amazon']

let volcanos = ['Mount Vesuvius', 'Mount Etna', 'Mount Fuji'];
let fujiIndex = volcanos.indexOf('Mount Fuji');
console.log(fujiIndex); // 2

let numVolcanos = volcanos.length;
console.log(numVolcanos); // 3

const list = ['a', 'b', 'c', 'd', 'e'];
[list[0], list[2]] = [list[2], list[0]];
console.log("swap", list); 
