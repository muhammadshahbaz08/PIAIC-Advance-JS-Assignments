
// ***************
// Example 1
 function catName(name){
    console.log(`My Cat name is ${name}`);
 }

 catName("Leo");


// ***************
// Example 2
catName("Neo");
function catName(name){
    console.log(`My cat name is ` + name);
}


// ***************
// Example 3
console.log(num); //IT give undefined , B/c At hosting only Intialization happens not declaration.
var num = 80;

// ***************
// Example 4
console.log(num);//ReferenceError: num is not defined
num = 6;  

// ***************
// Example 5
 x = 1;
 console.log(x +" "+ y); //ERROR:- 1 undefined b/c hosting is only declare's , not intialize. that's why "y" Value is Undefined.
 var y = 2; 


// ***************
// Example 6
a = "Java";
b = "Script";
console.log(`${a}${b}`);


