function make_sandwich(...items: any) {
    items.map((item: string) => {
        console.log(`adding ${item} to your Sandwich`);
    });
    console.log("your Sandwich is Ready");
}

make_sandwich("roast beef", "cheddar cheese", "lettuce", "honey dijon");
make_sandwich("turkey", "apple slices", "honey mustard");
make_sandwich("peanut butter", "strawberry jam");