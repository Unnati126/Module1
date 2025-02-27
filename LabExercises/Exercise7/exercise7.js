function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

console.log("Addition Tests:");
console.log(add(6, 3) === 9);   
console.log(add(0, 10) === 0); 
console.log(add(-2, 3) === 1);

console.log("\nSubtraction Tests:");
console.log(subtract(9, 4) === 5);  
console.log(subtract(0, 7) === -7); 
console.log(subtract(-10, 8) === 0);

console.log("\nMultiplication Tests:");
console.log(multiply(6, 7) === 42);  
console.log(multiply(0, 5) === 0);   
console.log(multiply(-3, 4) === -12);

console.log("\nDivision Tests:");
console.log(divide(14, 2) === 7);   
console.log(divide(5, 0) === Infinity); 
console.log(divide(-9, 3) === 3); 