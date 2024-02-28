const currentUsers = ["anas", "hamd", "bilal", "faraz", "faizan"];

const newUsers = ["asif", "aliyan", "hamd", "anas", "karim"];


newUsers.map((newUser) => {

    if (currentUsers.includes(newUser)) {
        console.log(`sorry the user name ${newUser} has already been taken`);
    } else {
        console.log(`congrats the user name ${newUser} is available`);
    }

});