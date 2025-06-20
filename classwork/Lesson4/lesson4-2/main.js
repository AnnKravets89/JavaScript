

// function calc (a, b) {
//         result = a + b;
//         return result;
// }
//
// let r1 = 10 + 20;
// let r2 = 22 + 20;
// console.log(r1, r2);

// 10000 pdv warTax

// function percentage(sum, per) {
//     return sum / 100 * per;
// }
// function tax(sum) {
//      return  sum - percentage(sum, 20) - percentage(sum, 1.5);
//
// }
// let number = tax(10000);
// console.log(number);

function userFilter(users) {
    let filteredUsers = [];
    for (const user of users) {
        if (user.age > 30) {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let filter = userFilter(users);
console.log(filter);
