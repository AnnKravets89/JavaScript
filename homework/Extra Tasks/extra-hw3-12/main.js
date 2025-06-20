//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
let arr = ['a', 'b', 'c'];
let word = '';
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];
//     console.log(word);
// }

//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0;
// while (i < arr.length) {
//     word += arr[i];
//     i++;
// }console.log(word);

//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

for (let i of arr) {
    word += i;
}
console.log(word);
