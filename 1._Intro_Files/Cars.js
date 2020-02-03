class Car {

    //Fields
    engineType = [];
    colours = [];
    constructor(brandName){
        this.brand = brandName
    }

    addEngine(addEngineType) {
        this.engineType.push(addEngineType)
    } 
    addColour(addColour) {
        this.colours.push(addColour)
    } 
}
const car = new Car ("BMW");
car.addEngine("V8");
car.addColour("Blue");

console.log(car.brand,  ' ' , car.engineType,  ' ' , car.colours);


