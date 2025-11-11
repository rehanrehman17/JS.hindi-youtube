const marvel_heros = ["ironman", "batman" , "thor"]
const dc_heros = ["spiderman", "superman", "flash"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros [3][1]);

       // concat operator
//const All_heros = marvel_heros.concat(dc_heros)
//console.log(All_heros);

      // spread operator (most of the programmer prefer spread as compare to concat)
//const all_new_hero = [...marvel_heros, ...dc_heros]   
//console.log(all_new_hero);

const another_array = [1, 2, 3, [2, 3], 6, [5, 7, [5, 2]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("rehan"));
console.log(Array.from("rehan"));
console.log(Array.from({name: "rehan"})); // interesting esme humee key bh btani prti hai wrna empty Array deta hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
   