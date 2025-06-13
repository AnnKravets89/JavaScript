let n = 100;
let s = 'asd';
let b = true;

console.log(typeof n);
console.log(typeof s);
console.log(typeof b);

let arr = [11, 22, 33, true];
let user = {
    name: 'John',
    age: 32,
};
console.log(typeof  arr);
console.log(typeof user);

function asd() {

}
console.log(typeof asd);

let x
console.log(typeof x); //undefined
console.log(null);
console.log(typeof null);

console.log(NaN);
console.log(typeof NaN);
console.log([] / 'asd'); //NaN

console.log(!!100);
console.log(!!-100);   //true
console.log(!!'asd');


console.log(!!0);
console.log(!!null);      //fasle
console.log(!!undefined);
console.log(!!'');

console.log(!!'0');
console.log(!!' ');
