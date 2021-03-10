//TO UN-COMMENT SELECT COMPLETE EXAMPLE AND PRESS  "/"" .

/*********************/
 
/**************
  "EXAMPLE 1"
***************/
var userName = "Ali"
function modifyUserName() {
    userName = "Naeem";
}
function showUserName() {
    alert(userName); // Ali 
}
//alert(userName);
showUserName(userName); //Display's Ali
modifyUserName();
showUserName(); //Display's Naeem

/*********************/

/**************
   "EXAMPLE 2"
***************/

function createUserName() {
    userName = "Ali";
}
function modifyUserName() {
    if (userName)
     userName = "Naeem";
}
function showUserName() {
    alert(userName);
}

createUserName();
showUserName(); //Ali

modifyUserName();
showUserName(); //Naeem

// /*********************/

/**************
  "EXAMPLE 3"
***************/

function createUserName() {
     var userName = "Ali"
}
function showUserName() {
    alert(userName);
}

createUserName();
showUserName(); //Gives error , due to functional   scope of username variable

/*********************/

/**************
  "EXAMPLE 4"
***************/
var userName = "Ali";
function showUserName() {
    var userName = "Naeem"; //This userName var. is having Functional Scope.
    alert(userName);
}  
showUserName(); //Naeem
alert(userName); //Ali

/*********************/

/**************
  "EXAMPLE 5"
***************/
function noBlockLevelScope(){
    if (1 > 0) {
        var myVar = 22; 
    }
    alert(myVar);
}

noBlockLevelScope(); //Display's 22

/*********************/

/**************
  "EXAMPLE 6"
***************/
var age = 100; //Global Scope
function go(){
    var age = 200; //Local Scope
    var hair = 'black';
    console.log(age);
    console.log(hair);
}
go();
console.log(age);

// OUTPUT  200 
// OUTPUT  black 
// OUTPUT  100 

/*********************/

/**************
  "EXAMPLE 7"
***************/
if (true) {
   // userName is in the global scope because of the 'var' keyword
  var userName ="Ali";
  console.log(userName);
  // age is in the local scope because of the 'let' keyword
  let age = 20;
  console.log(age);
  // skills is in the local scope because of the 'const' keyword
  const skills = "JS";
  console.log(skills);
}
console.log(userName); //output Ali 
 console.log(age); // Uncaught ReferenceError: age is not defined
console.log(skills);// Uncaught ReferenceError: skills is not defined

/*********************/
