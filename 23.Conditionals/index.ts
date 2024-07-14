let bike:  string = 'Yamaha';

// Test 1 : Equality Compration(true)

console.log("Is bike == 'Yamaha'? I predict True.")
console.log(bike == 'Yamaha') //True

// Test 2 : Strict equality Compration(true)

 console.log("Is bike === 'Yamaha'? I predict True.")
console.log(bike === 'Yamaha') //True

 // Test 3 : inequality Compration(false)

console.log("Is bike != 'Yamaha'? I predict false.")
 console.log(bike != 'Yamaha') //false

 // Test 4 : Strict inequality Compration(false)

 console.log("Is bike !== 'Yamaha'? I predict false.")
 console.log(bike !== 'Yamaha') //false

// Test 5 : less then Compration(false)

console.log("Is bike < 'Yamaha'? I predict True.")
console.log(bike < 'Yamaha') //false (lexicographic comprarison)

 // Test 6 : Greeter then Compration(false)

console.log("Is bike > 'Yamaha'? I predict True.")
 console.log(bike > 'Yamaha') //false (lexicographic comprarison)

 // Test 7 : less then or equal Compration(true)

 console.log("Is bike <= 'Yamaha'? I predict True.")
console.log(bike <= 'Yamaha') //True

// Test 8 : Greeter then or equal Compration(true)

 console.log("Is bike >= 'Yamaha'? I predict True.")
 console.log(bike >= 'Yamaha') //Tru

// Test 9 : Checking truthiness(true)

 console.log("Is bike? 'Yamaha'? I predict True.")
console.log(bike);  //Truth (non-empty string is truthy)

 // Test 10 : Checking falseness (false)

 console.log("Is bike? 'Yamaha'? I predict True.")
console.log(!bike); //false (non-empty string is truthy)

