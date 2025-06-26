// let user = new User('vasya', 31);
// user.greeting = function () {
//     console.log('Hello World!');
// }
// console.log(user);
// user.greeting();
//
// let user2 = new User('Alena', 34);
// console.log(user2);
// user2.greeting();

// console.log(User);
// User.prototype.greeting = function () {
//     return `Hello my name is ${this.name}`;
// }
//
// let user = new User('vasya', 34);

//  let user = new User('vasya', 31);
// user.greeting = function (msg) {
//     return `${msg}, me name is ${this.name}`;
// }
//
// let user2 = new User('Alena', 34);
// console.log(user.greeting.apply(user2, ['Hi']));
// console.log(user.greeting.call(user2, 'Olla'));

let user = new User('vasya', 31);
user.greeting = function (msg) {
    return `${msg} my name is ${this.name} `;}
let user2 = new User('Alena', 34);
let greetingCopy = user.greeting.bind(user2);
console.log(greetingCopy('Вітаю!'));





