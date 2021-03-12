// ***************
// Example 1
let x = 1;
if (x === 1) {
    let x = 2;
    console.log(x); //Display "2"
}
console.log(x); //Display's 1 . B/c The 2nd 'let x' is declared in if block, AS, we know Let ,also make scope in block element's.
 
// **************
// Example 2
let x = 1;
if (x === 1){
    let x = 2;
    console.log(x); //Display's 2
}
console.log(x); //Display's 1


// **************
// Example 3
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined


// **************
// Example 4
if (x) {
    let foo;
    let foo; // SyntaxError thrown.
  }

// **************
// Example 5
let x = 1;
switch(x) {
case 0:
 let foo;
 break;

case 1: 
 let foo;
 break; 
}

// **************
// Example 6
let x = 1;
switch(x) {
 case 0: {
  let foo;
  break;
 }
 case 1: {
  let foo;
  break;
 }
}
// **************
// Example 7
function do_something(){
    console.log(bar); //Undefiend due to hosting.
    console.log(foo); //Refrence Error.
    var bar = 1;
    let foo = 2;
  }
 do_something();

// **************
// Example 8
// prints out 'undefined'
console.log(typeof undeclaredVariable);

// results in a 'ReferenceError'
console.log(typeof i);
let i = 4;

// **************
// Example 9
function test(){
    var foo = 32;
    if(foo) {
       let foo = (foo + 55); // ReferenceError
    }
 }
 test();

// **************
// Example 10

// NOT Understand

// **************
// Example 11
var a = 40;
var b = 90;

if (a === 40){
 var a = 10;   //global scope
 let b = 22;  //Block Scope
 console.log(a);  //10
 console.log(b);  //22
}

// **************
// Example 12
let x = 22; //Global Scope.
{
  var x = 24; // SyntaxError for re-declaration,b/c "x" is already declared 
}

// **************
// Example 13

// NOT UNderstand

