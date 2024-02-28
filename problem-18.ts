// an array of countries
const placesToVisit = ["Pakistan", "Saudi Arab", "Turkey", "USA", "Qatar", "Dubai"]

// prit the array
console.log("an array", placesToVisit);

// sort the array
console.log("sort the array without modifying original", [...placesToVisit].sort());

// is array is still in its original condition
console.log("original array is still in its original condition", placesToVisit);

// sort in descending order
console.log("sort and reverse the array without modifying original", [...placesToVisit].sort().reverse());

// is array is still in its original condition
console.log("original array is still in its original condition", placesToVisit);

// reverse the array by modifying
console.log("reversed array", placesToVisit.reverse());

// reverse the array again by modifying
console.log("again reversed array", placesToVisit.reverse());

// sort the array by modifying
console.log("sorted array", placesToVisit.sort());

// sort and reverse the array by modifying
console.log("sorted in reverse array", placesToVisit.sort().reverse());
