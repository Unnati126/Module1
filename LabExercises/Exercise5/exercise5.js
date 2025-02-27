let myArray = [2, 4, 6, 8, 10];
console.log("Original Elements:", myArray);

myArray[1] = 5;
myArray[4] = 11;
console.log("After replacing elements:", myArray);

myArray.unshift(1);
console.log("After adding element at Beginning:", myArray);

myArray.pop();
console.log("After removing element from End:", myArray);