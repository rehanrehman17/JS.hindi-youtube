// objects ' objects ko declare krne k 2 tariqe hain 1) literal ki trah 2) constructor ki tarah 
// singleton -> “Only one object for the whole program.”
// object create -> constructor k liye use hta hai 

// object literals 
// -> Object literals are the simplest way to create objects in JavaScript — using curly braces {}.
// ->They let you define key–value pairs directly without needing a class or constructor.

const mySym = Symbol("key1")
// interview question aik symbol lena hai ussy define krna hai or keys ki tarah print krwana hai (object me)

const JsUser = {
    name : "rehan", "full name" : "rehan rehman",
    [mySym] : "mykey1", // mySym : "mykey1" ❌ it isnt behave like a declared symbol 
    age : 21,
    location : "Karachi",
    email : "rehanrehman060@email.com",
    password : 12345678,
    IsLoggedin : "false",
    IsLoginOut : ["monday" , "saturday"]
} // this is how we can declare an object 

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "A.rehman060@email.com"
//Object.freeze[JsUser] // freeze method esky bd object me koi changes nh kr skty 
//console.log(JsUser);
JsUser.email = "rehan060@email.com"

// lets create a function here 

JsUser.greeting = function() {
    console.log("hello js User");
}

JsUser.greetingTwo = function() {
    console.log(`hello js User , ${this.name}`); // They are used to create template literals (strings that can contain variables or expressions easily). (backticks allow ${} for variable insertion).
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

