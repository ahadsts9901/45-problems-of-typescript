const users_ = []

if (users_.length > 0) {

    for (let i = 0; i < users_.length; i++) {

        if (users_[i] === "admin") {
            console.log("hello admin, would you like to see the sttaus report ?");
        } else {
            console.log(`hello ${users_[i]} thank you for logging in again`);
        }

    }

} else {
    console.log("we need to find some users");

}