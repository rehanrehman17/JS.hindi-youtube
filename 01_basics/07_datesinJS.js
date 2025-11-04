// Dates 

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.valueOf());

//let myCreatedDate = new Date(2025,0,11) // javascript me month "0" se start hty hain
//let myCreatedDate = new Date(2025,0,11,4,13)
let myCreatedDate = new Date("2025-11-22") // in the format of yy-mm-dd
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor (Date.now()/1000));

let NewDate = new Date()
//console.log(NewDate.getDate());
//console.log(NewDate.getMonth()+1);

//`${NewDate.getDay()} and the time is` We use this template literal format: To combine text + variables neatly.


// tolocalestring k andr ap object define krty hain or many parameters use kr skty hain 
console.log(
NewDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit"
})
);














