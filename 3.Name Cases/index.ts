
let personName:string = "eyyan ahmed"

console.log(`lower case: ${personName.toLowerCase()}`);

console.log(`lower case: ${personName.toUpperCase()}`);

console.log(`Title case: ${personName.replace(/\bw/g,c => c.toUpperCase())}`);
