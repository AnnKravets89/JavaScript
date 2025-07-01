// console.log({});
// console.log({}.__proto__);

let base = {
    id: 1,
    name: 'John',
};
let copy = Object.create(base);
copy.surname = 'foobar';

console.log(base); //id - 1
console.log(copy);
console.log(copy.id);
console.log(copy.name);
copy.id = 1005000;
console.log(copy.hasOwnProperty('id'));
console.log(copy.hasOwnProperty('surname'));

let obj = {};
obj.__proto__ = base;
console.log(obj);
