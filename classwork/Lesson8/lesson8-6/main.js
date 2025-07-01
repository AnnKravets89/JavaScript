let user = {
    firstName: 'Taras',
    lastName: 'Shevchenko',
};

// user.firstName = 'Ananas';
// console.log(user);
// for (const userKey in user) {
//     console.log(userKey);
// }

Object.defineProperty(
    user,
    'id',
    {
        value: 100500,
        writable: false,
        enumerable: true,
        configurable: false,
    })
console.log(user);
user.id = 100;
console.log(user);
for (const userKey in user) {
    console.log(userKey);
}

Object.defineProperty(
    user,
    'id',
    {
        value: 2600,
        writable: false,
        enumerable: true,
        configurable: false,
    })
console.log(user);


