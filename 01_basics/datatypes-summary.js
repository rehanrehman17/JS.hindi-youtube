//javascript dynamically typed language hai jisme humm aik he variable me different types use kr skty hain
/* let x = 10;
let x = "hello"
let x = true */

// Premitive

//7 datatypes : String , Number , Boolean , Null , Undefine , Symbol , Bigint

const Username = "rehan";
const Score = 100;
const scoreValue = 100.3;
const isLoggedin = false;
const OutsideTemp = null;
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const BigNumber = 63673732637778n


// Refreance (Non Premitive)

// Arrays , Objects , Functions

const heros = ["apple" , "banana" , "mango" , "pineapple"]
let myObj = {
    name: "rehan",
    age : 21,
    gender : "male"
}

const MyFunction = function(params) {
    console.log("hello world");
    
}

console.log(typeof id);
