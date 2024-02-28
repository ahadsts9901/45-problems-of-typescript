const name1 = "john"
console.log(name1 === "john");

const name2 = "doe"
console.log(name2 !== "doe");

const mySchool = "PrograMMeR SchOoL";
console.log(mySchool.toLowerCase() == "Programmer School");
console.log(mySchool.toLowerCase() == "Programmer School".toLowerCase());

const one = true
const two = false

console.log(one && two);
console.log(one || two);

const item1 = [1, 2, 3, 4, 5]
const item2 = "hi"

console.log("is array",Array.isArray(item1));
console.log("is array",Array.isArray(item2));

console.log("is not array", !Array.isArray(item1));
console.log("is not array", !Array.isArray(item2));