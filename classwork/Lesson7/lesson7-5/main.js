// let set = new Set();
// set.add('asd');
// set.add('qwe');
// set.add('asd');
// set.add('xxx');
// console.log(set);
// console.log(set.has('xxx'));
// set.delete('xxx');
// console.log(set);
// console.log(set.size);
//
// set.forEach(value => console.log(value));
//
// let arrayFromSet = Array.from(set);
// console.log(arrayFromSet);

let set = new Set([11, 22, 33, 11, 22, 44, 55]);
console.log(set);
let numbers = Array.from(set);
console.log(numbers);

