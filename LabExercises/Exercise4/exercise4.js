function add(a, b) {
    return a + b
 }
 
 function subtract(a, b) {
     return a - b
 }
 
 function multiply(a, b) {
     return a * b
 }
 
 function divide(a, b) {
     return a / b
 }
 
 console.log("Addition: " + add(10, 5));
 console.log("Subtraction: " + subtract(10, 5));
 console.log("Multiplication: " + multiply(10, 5));
 console.log("Division: " + divide(10, 5));  

 let myArray = [1, 2, 3, 4, 5, 6];

function swapValues(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
console.log("Before swapping:", myArray);

swapValues(myArray, 1, 4);
console.log("After swapping:", myArray);

 function hello(name)
 {
     console.log("Hello " + name);
 }
 hello("Unnati here");