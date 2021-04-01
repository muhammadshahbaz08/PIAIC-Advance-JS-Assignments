// Example 1
const number = 99;
try {
    number = 100;
} catch(err){
    console.log(err);
    // Type error : Assignment to constant variable.
}
console.log(number); //99

/******************/
//Example 2
const no = 1;

no = 2; // Uncaught TypeError: Assignment to   constant variable.

console.log(`My Favourite No: ${no}`);

 const no = 309; //Uncaught SyntaxError: Identifier 'no' has already been declared

// the name "no" is reserved for constant above, so this will fail too
var no = 89;

// this throw error also b/c const,var let are used for decalring variable's
let no = 55;


if (no === 1){
    // let is block scope, so it will work
    let no = 200; 
    // My favourite No is 200
    console.log(`My Favourit No is ${no}`);
    // this gets hoisted into the global context and throws an error 
    var no = 100;
}

//`My Favourite No is still 1
console.log(`My Favourit No is ${no}`);

// Uncaught SyntaxError: Missing initializer in const declaration
const FOO;

const OBJECT = {key: "values"};
//Uncaught TypeError: Assignment to constant variable.
OBJECT = {other_key: 'Avalue'};

//THis is possible b/c we are Only Changing key's and values.
OBJECT.key = "otherValue";

//TO prevent Object-Keys also to get Changed.(Making Object immutable)
Object.freeze(OBJECT); 
//IT will not through any error b/c, but also it will not change "OBJECT "due to freeze Method.
OBJECT.key = "nextValue";

// The same applies to arrays
const MyARR = [];
// It's possible to push items into the array
MyARR.push("Pakistan!");
// However, assigning a new array to the variable throws an error - Uncaught TypeError: Assignment to constant variable.
MyARR = ["PIAIC"];


/***************/
