"use strict";
// Equality and Inequality Test 1
console.log("Equality test with strings:", "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Equality test with strings:", "Apple" != "Orange");
// Tests using the lower case function
console.log("Lower Case function test: ", "Hello".toLocaleLowerCase() === "hello");
//• Numerical tests involving equality and inequality
console.log("Equality test with numbers: ", 26 === 26);
//• Numerical tests involving inequality 
console.log("Inequality test with numbers: ", 26 != 35);
// greater than test
console.log("Greater than test: ", 10 > 5);
// less than test
console.log("less than test: ", 5 < 10);
// greater than or equal to 
console.log("Greater taan or equal to test: ", 10 >= 10);
// and less than or equal to 
console.log("less than or equal to test: ", 5 <= 10);
//• Tests using "and" and "or" operator
console.log("And operators test: ", 5 === 5 && 10 > 5);
//• Tests using "or" operator
console.log("or operators test: ", 5 === 5 || false);
//• Test whether an item is in a array
const fruits = ['Mango', 'Nashpati', 'Orange'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));
//• Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ', !fruits.includes('Apple'));
