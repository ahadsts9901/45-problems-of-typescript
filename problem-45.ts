function storeCarInfo({ manufacturer, modelName, ...rest }) {
    return { manufacturer, modelName, ...rest }
}

storeCarInfo({
    manufacturer: "Audi e-torn",
    modelName: "A3",
    color: "black",
    features: "The Audi A4 has 1 Petrol Engine on offer. The Petrol engine is 1998 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the A4 has a mileage of . The A4 is a 5 seater 4 cylinder car and has length of 4762mm, width of 1847mm and a wheelbase of 2819mm."
})