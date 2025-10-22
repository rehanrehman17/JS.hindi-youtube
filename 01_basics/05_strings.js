const name = "rehan"
const repoCount = 50 

//console.log(name + repoCount + "value"); not a good way 

console.log(`hello my name is ${name} and my github repo Count is ${repoCount}`);

const gameName = new String ("rehaan-AR-kk")

//console.log(gameName [0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));

console.log(gameName.indexOf("h"));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-6 , 4)
console.log(anotherString);

const newStringone = "   rehaan   " 
console.log(newStringone);
console.log(newStringone.trim());

const url = 'https://rehan.com/rehan%20rehman'
console.log(url.replace ('%20' , '_'));
console.log(url.includes('rehaan'));

console.log(gameName.split('-'));











