class Car {

    constructor(model, maker, yearOfRelease, maxSpeed, engineCapacity) {
        this.model = model;
        this.maker = maker;
        this.yearOfRelease = yearOfRelease;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info()
        {
            for (const key in this) {
                console.log(key, this[key]);
            }
        }
        increaseMaxSpeed(newSpeed)
        {
            return this.maxSpeed += newSpeed;
        }
        changeYear(year)
        {

            if (year > 1815) this.yearOfRelease = year;

        }
        addDriver(driver)
        {
            this.driver = driver;
        }
    }

const car = new Car("Mustang",  "Ford",  2018,  260,  5.0);

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
