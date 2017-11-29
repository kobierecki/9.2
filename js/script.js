
var femaleNames = ["Ania", "Milena", "Marta", "Jagoda"];
var maleNames = ["Dariusz", "Mariusz", "Paweł", "Kamil"];
var all = femaleNames.concat(maleNames);
var newName = "Marian";

if (all.indexOf(newName) === -1) {all.push(newName);} 

console.log(all.length);




