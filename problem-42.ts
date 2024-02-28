let magician_names = ["magician-1", "magician-2", "magician-3"];

function show_magicians(magician_name: string[]) {
    for (let i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i]);
    }
}

function make_great(magician_name: string[]) {

    let great_magicians: string[] = [];

    magician_name.map((mag_name: string) => {
        let mag_name1 = `the great ${mag_name}`;
        great_magicians.push(mag_name1);
    });

    magician_names = great_magicians;
    return magician_names;

}

show_magicians(magician_names);
make_great(magician_names);
console.log(magician_names);