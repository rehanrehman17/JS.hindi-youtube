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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack and Heap memory

//   stack (premitive)          Heap (non-premitive)
// stack k undr jb bhi ap kuch bh lety hain tw apko uska copy he milta hai jissy humm 

let myYoutubename = "rehanrehman.com"
let anothername = myYoutubename
anothername = "chaiandcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "rehan@email.com",
    password : 123456
}

let userTwo = userOne
userTwo.email = "rehanrehman@email.com"

console.log(userOne);
console.log(userTwo);

