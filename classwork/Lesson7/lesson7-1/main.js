// function User(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//         console.log(this)
// }
// let user1 = new User('John', 123, true);
// let user2 = new User('Ann', 12, false);

// function User(name, age, status,wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
//
// console.log(new User('John', 123, true, {name: 'ghj', age: 3, status: false}));

function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge}
    this.greeting = function () {
        console.log('hi');
    };
}

let user = new User('asd', 123, true, 'anna', 28);
console.log(user);
