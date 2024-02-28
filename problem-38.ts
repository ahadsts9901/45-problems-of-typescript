const describe_city = (city: string, country: string = "Pakistan") => {

    console.log(`${city} is in ${country}`);

}

describe_city("Karachi")
describe_city("Bangalore", "India")
describe_city("Dhaka", "Bangladesh")