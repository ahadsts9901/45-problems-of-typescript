const guests_ = ["muzammil", "mutahir", "bilal"]

for (let i = 0; i < guests_.length; i++) {

    console.log(`hey ${guests_[i]} lets have a dinner today`);

}

const sick_guest_ = guests_.splice(2, 1, "faraz")

console.log(
    `Hey guys unfortunately ${sick_guest_} is Sick today, He can't Join us today`
);

console.log("Inviting friends Again");

for (let i = 0; i < guests_.length; i++) {

    console.log(`hey ${guests_[i]} lets have a dinner today`);

}

console.log("Hey friends just found a big diner table");

// guest at begining
guests_.unshift("faizan")

// guest at end
guests_.push("anas")

// guest at middle
guests_.splice(1, 0, "hamd");


for (let i = 0; i < guests_.length; i++) {

    console.log(`hey ${guests_[i]} lets have a dinner today`);

}

console.log(
    "Hey guys I just figured out that my dinning will not arrive on time I can only invite 2 guests"
);

for (let i = -1; i < guests_.length; i++) {

    const unInvitedGuest = guests_.pop();

    console.log(
        `Sorry ${unInvitedGuest}, friend you are not invited only have a capacity of 2`
    );

}

for (let i = 0; i < guests_.length; i++) {
    console.log(`You are still invited ${guests_[i]}`);
}

for (let i = guests_.length; i > 0; i--) {
    guests_.pop();
}

console.log(guests_);