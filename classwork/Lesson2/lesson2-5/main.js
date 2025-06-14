let users = [
    {skills : ['html','javascript','mongo'],id : 1, name: 'vasya', age : 31, status: true},
    {skills : ['html','mysql','css'],id : 2, name: 'petya', age : 33, status: false},
    {skills : ['html','mysql','css'],id : 3, name: 'anna', age : 28, status: true},
    {skills : ['html','javascript','mongo'],id : 4, name: 'olya', age : 29, status: false}
];
console.log(users);
console.log(users[0].age);

let user0 = users[0];
console.log(user0);

console.log(users[0].skills[2]);
console.log(users[0]['skills'][2]);
console.log(users[0]['skills'][2]);
