// Array

const MyArr = [0, 1, 2, 3, 4, 5, "rehan", true] //InJavaScriptArrayCanBeResizableAndMixtureOfDifferent(DataTypes)
const MyHeros = ["avengers", "daredevil", "johnwick"]

const MyArr2 = new Array(1, 2, 3, 4)
//console.log(typeof MyArr[4]); // [4] is the indexing we cannot use like "[one]" this

// Array method

//MyArr.push(6)
//MyArr.push(7) add krdeta value
//MyArr.pop() end walii value remove krdeta phr chahe wo kch bh ho 

//MyArr.unshift(9) //array k starting me value add krdeta whatever it is
//MyArr.shift() starting walii value ko remove krdeta hai

//console.log(MyArr.includes(9)); // Output comes in boolean
//console.log(MyArr.indexOf(5)); // Output comes in numbers

const NewArr = MyArr.join() // join kya krta hai hmare array ko bind bh krta hai or ussy string me bhi convert krdeta hai

//console.log(typeof NewArr); // Output string
//console.log(MyArr) // output -> object

console.log("A " , MyArr);

const myn1 = MyArr.slice(1, 3) // slice() -> does not change the original array (it makes a copy).
console.log(myn1); // Output is -> [1, 2]

console.log("b " , MyArr); // Output -> original array 

const myn2 = MyArr.splice(1, 3) // splice() → changes (manipulates) the original array
console.log("C " , MyArr); // Output is -> C  [ 0, 4, 5, 'rehan', true ]
console.log(myn2); // Output -> [1, 2, 3]
