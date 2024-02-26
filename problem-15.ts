const guests_list = ["muzammil", "mutahir", "bilal"]

for (let i = 0; i < guests_list.length; i++) {

    console.log(`hey ${guests_list[i]} lets have a dinner today`);

}

const sickGuest = guests_list.splice(2, 1, "faraz")

console.log(
    `Hey guys unfortunately ${sickGuest} is Sick today, He can't Join us today`
);

console.log("Inviting friends Again");

for (let i = 0; i < guests_list.length; i++) {

    console.log(`hey ${guests_list[i]} lets have a dinner today`);

}