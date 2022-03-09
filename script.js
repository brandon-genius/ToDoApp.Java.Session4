// Simulation
// Database
let userName="brandon.wpi@gmail.com";
let password="Test1234";

//the program
let Uname = prompt("Enter your username:");
let pass = prompt("Enter your password:");

if(Uname==userName && pass == password){//true statement
    console.log("Welcome to the system");
}else{//false statement
    console.log("Invalid crudentials");
}

let number1=prompt("enter first number");
let number2=prompt("enter second number");

if(number1>number2){
    console.log(number1);
}else if(number2>number1)
    console.log(number2);
else if(number1==number2){
    console.log("The numbers are equal");
}