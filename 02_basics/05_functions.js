// functions // bht saree code ko aik pkg me bnd krdeta hai 

function sayMyname(){
    console.log("r");
    console.log("e");
    console.log("h");
    console.log("a");
    console.log("n");
}

//sayMyname // this is call reference of my function
//sayMyname() // this is called execution of my function

    // Now we create a simple function by adding two numbers

//function addTwoNumbers(number1, number2){  // ()<- this is called parameters
//    console.log(number1+number2);

//}

function addTwoNumbers(number1, number2){
    
    //let result = number1+number2 
    //console.log("rehan") /// agr return se phly likhun ga tw run hjaey ga 
    //return result
    //console.log("rehan"); // return hne k bd hmara functions ruk jta hai 

    // another way function return krne ka 
    return number1 + number2 
}

const result = addTwoNumbers(3,5) // ()<- this is called arguments
//console.log("Result: " , result);

    // create another function 

function userloginMessage(username){
    return `${username} just logged in`
}

//console.log(userloginMessage("rehan"));


// create another function 

function CalculateCartPrice(val1 , val2 , ...num1){  // ' ... ' this is called rest operator (function me multiple value pass krne k liyee)
    return num1
}

console.log(CalculateCartPrice(200 , 400 , 500 , 600)); // output comes in array [200, 400, 500, 600] and [500,600] after adding val1,val2

const user = {
    username : "rehan",
    price : 199

}

function handleObject(anyobject) { // anything we can write here like (x ,y z , user) q k ye argument ly rha hai object se
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user) or
handleObject({
    username : "rehman",
    price : 399
})

const myArray = [200, 400, 500, 600]

function returnValue(getArray){
    return getArray[1]
}

//console.log(returnValue(myArray)) or 

console.log(returnValue([200, 400, 500, 600]));
