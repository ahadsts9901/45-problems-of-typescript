let personName: string = "Abdul Ahad"

console.log("upper-case", personName.toUpperCase());
console.log("lower-case", personName.toLowerCase);

function titleCase(str: string) {
    
    let _name = personName.toLowerCase().split(" ")

    for (let i = 0; i < _name.length; i++) {

        _name[i] = _name[i].charAt(0).toUpperCase() + _name[i].slice(1);

    }

    return _name.join(" ")

}

console.log("title-case", titleCase(personName));