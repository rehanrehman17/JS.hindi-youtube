//const tinderUser = new Object() // this is called singeltone object
let tinderUser = {} // this is called non singletone object 

tinderUser.id = "abc123"
tinderUser.name = "rehan"
tinderUser.IsLoggedin = false

//console.log(tinderUser);

// now we declare object k andr object look how we can do this : 

const regularuser = {
    fullname: {
        userfullname: {
            firstname: "rehan",
            lastname: "rehman"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1 , obj2} same issue as array 'object k andr object arha' not prefer to use 

     // assign method
//const obj3 = Object.assign({} , obj1 , obj2)
    // spread method 
const obj3 = {...obj1, ...obj2 }
//console.log(obj3);

// aik jo syntax humm sb se zyada use kren gyy jb database se koi value aaey gi 

const users = [
    {
        name: "rehan",
        email: "rehan@email.com"
    },

    {
        name: "rehan",
        email: "rehan@email.com"
    },

    {
        name: "rehan",
        email: "rehan@email.com"
    }
]

//console.log(users[1].email);
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(tinderUser.hasOwnProperty('id1')); // it return the property exist or not in the object 
//console.log(tinderUser.isPrototypeOf("id"));

// object de-structure

const course = {
    price : 1000,
    courseinstructor : "rehan",
    coursename : "js.hindi"
}

//course.courseinstructor

const {courseinstructor : instructor} = course // object ko de-structure krty hain aise " courseins:ins"
//console.log(courseinstructor);
console.log(instructor);

// json 

//{
//    "coursename": "js.hindi",
//  "price": "free",
//    "instructor": "rehan"
//}

//[
//    {}
//    {}
//    {}
//]