let arr = [];
console.log(Array.isArray(arr));

console.log(arr.push('new element1'));
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.unshift('!!!'));
console.log(arr);

console.log(arr.shift());

let join = arr.join(';');
console.log(join);
let nums = [11, 22, 33];
let concat = arr.concat(nums);
console.log(concat);

console.log(nums.reverse());

let slice = concat.slice(0, 4);
console.log(slice);
console.log(concat);

// let splice = concat.splice(0, 2, 'fghj', 78, 'nmghj');
// console.log(splice);
// console.log(concat);

// console.log(concat.indexOf(11), 1);

console.log(concat.includes(11));


