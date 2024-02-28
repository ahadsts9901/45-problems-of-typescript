const users = ["bilal", "faraz", "faizan", "asif", "admin", "hamd"]

for (let i = 0; i < users.length; i++) {

    if (users[i] === "admin") {
        console.log("hello admin, would you like to see the sttaus report ?");
    } else {
        console.log(`hello ${users[i]} thank you for logging in again`);
    }

}