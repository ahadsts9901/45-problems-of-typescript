const magicians_ = ["magician-1", "magician-2", "magician-3"]

const show_magicians_ = (array: string[]) => {

    for (let i = 0; i < array.length; i++) {

        console.log(array[i]);

    }

}

show_magicians_(magicians_)

const make_great = (array: string[]) => {

    for (let i = 0; i < array.length; i++) {

        array[i] = `the great ${array[i]}`

    }

}

make_great(magicians_)
show_magicians_(magicians_)