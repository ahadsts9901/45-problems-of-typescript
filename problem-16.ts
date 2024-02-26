const guests = ["muzammil", "mutahir", "bilal"]

for (let i = 0; i < guests.length; i++) {

    console.log(`hey ${guests[i]} lets have a dinner today`);

}

const sick_guest = guests.splice(2, 1, "faraz")

console.log(
    `Hey guys unfortunately ${sick_guest} is Sick today, He can't Join us today`
);

console.log("Inviting friends Again");

for (let i = 0; i < guests.length; i++) {

    console.log(`hey ${guests[i]} lets have a dinner today`);

}

console.log("Hey friends just found a big diner table");

// guest at begining
guests.unshift("faizan")

// guest at end
guests.push("anas")

// guest at middle
guests.splice(1, 0, "hamd");


for (let i = 0; i < guests.length; i++) {

    console.log(`hey ${guests[i]} lets have a dinner today`);

}