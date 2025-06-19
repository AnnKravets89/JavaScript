let arr = [];

// for (let i = 0;i < 50; i++) {
//      arr[i] = i * 2;
// }
// console.log(arr);
//
// let number = 1;
// for (let i = 1;i < 50; i++) {
//      arr[i] = number;
//      number += 2;
// }
// console.log(arr);


// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 100);
// }
// console.log(arr);

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(arr);

// for (let i = 2; i < arr.length; i+= 3) {
//     console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i+= 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
// let arr2 = [];
// let count = 0;
// for (let i = 0; i < arr.length; i+= 3) {
//     if (arr[i] % 2 === 0) {
//           arr2[count] = arr[i];
//           count++;
//
//     }
// }
// arr2.length = count;
// console.log(arr2);

// for (let i = 0; i < arr.length -1; i++) {
//    if (arr[i + 1]  % 2 === 0) {
//        console.log(arr[i]);
//    }
//
// }

let prices = [100,250,50,168,120,345,188];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
}
let averageCheck = sum / prices.length;
console.log(averageCheck);

