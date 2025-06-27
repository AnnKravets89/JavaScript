Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
}

const cars = [
    { model: "Civic", maker: "Honda", yearOfRelease: 2020, maxSpeed: 210, engineCapacity: 1.8 },
    { model: "Model S", maker: "Tesla", yearOfRelease: 2022, maxSpeed: 250, engineCapacity: 0 },
    { model: "Corolla", maker: "Toyota", yearOfRelease: 2019, maxSpeed: 195, engineCapacity: 1.6 },
    { model: "A4", maker: "Audi", yearOfRelease: 2021, maxSpeed: 240, engineCapacity: 2.0 },
    { model: "Mustang", maker: "Ford", yearOfRelease: 2018, maxSpeed: 260, engineCapacity: 5.0 },
    { model: "3 Series", maker: "BMW", yearOfRelease: 2020, maxSpeed: 235, engineCapacity: 2.0 },
    { model: "CX-5", maker: "Mazda", yearOfRelease: 2021, maxSpeed: 210, engineCapacity: 2.5 },
    { model: "Octavia", maker: "Skoda", yearOfRelease: 2017, maxSpeed: 200, engineCapacity: 1.4 },
    { model: "Accord", maker: "Honda", yearOfRelease: 2022, maxSpeed: 230, engineCapacity: 2.0 },
    { model: "Elantra", maker: "Hyundai", yearOfRelease: 2019, maxSpeed: 190, engineCapacity: 1.6 }
];
cars.myForEach(car => console.log(car.model));

Array.prototype.myFilter = function (predicate) {
    const result = [];
    for (const i of this) {
        if (predicate(i)) {
            result.push(i);
        }
    }
    return result;
};
let carsSpeed = cars.myFilter(car => car.maxSpeed > 200);
console.log(carsSpeed);



