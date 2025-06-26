// class User {
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//     }
//     // static greeting() {
//     //     return `Hello my name is ${this.username}`;
//     // }
//
//     work() {
//         return `Work in process`
//     }
// }
// // let user = new User('Alena', 34);
// // console.log(user);
// //
// // console.log(user.greeting());
// // console.log(User.greeting());
//
// class Customer extends User {
//     constructor(username, age, password) {
//         super(username, age);
//         this.password = password;
//     }
//     work() {
//         return super.work();
//     }
// }
// let customer = new Customer('Alena', 34, '1111')
// console.log(customer);
// console.log(customer.work());

function User(name, age) {
    this.name = name;
    this.age = age;
}

function Customer(name, age, password) {
    User.apply(this, [name, age]);  //але краще замість [] прописувати arguments
    this.password = password;
}
let customer = new Customer('Alena', 34, '1111');
console.log(customer);
