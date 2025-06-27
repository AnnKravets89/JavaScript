function Car(model, maker, yearOfRelease, maxSpeed, engineCapacity) {
    this.model = model
    this.maker = maker
    this.yearOfRelease = yearOfRelease
    this.maxSpeed = maxSpeed
    this.engineCapacity = engineCapacity
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function(newSpeed) {
        return this.maxSpeed += newSpeed;
    }
    this.changeYear = function(year) {

        if (yearOfRelease > 1815) this.yearOfRelease = year;

    }
    this.addDriver = function (driver) {
                    this.driver = driver;
    }
}
let car = new Car("Mustang",  "Ford",  2018,  260,  5.0);

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(10);
car.changeYear(2022);
car.addDriver({
    name: "Oleh",
    age: 32,
    experience: 5});
console.log(car);

