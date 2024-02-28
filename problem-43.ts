let magicianNames = ["magician-1", "magician-2", "magician-3"];

function show_magicians(magicianName: string[]) {
    for (let i = 0; i < magicianName.length; i++) {
        console.log(magicianName[i]);
    }
}

function make_great(magicianName: string[]) {

    let great_magicians: string[] = [];

    magicianName.map((magName: string) => {
        let magName1 = `the great ${magName}`;
        great_magicians.push(magName1);
    });

    magicianNames = great_magicians;
    return magicianNames;

}

show_magicians(magicianNames);
make_great(magicianNames);
console.log(magicianNames);