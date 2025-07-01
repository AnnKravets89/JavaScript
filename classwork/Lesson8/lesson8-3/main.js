// user = {
//     name: "Max",
//     age: 17,
// };
// let user2 = user;
// let user3 = {
//     name: "Max",
//     age: 17,
// };
// console.log(user === user2);
// console.log(user === user3);

//  user = {
//     name: "Max",
//     age: 17,
// };
// let userCopy = {...user};
// console.log(userCopy);
// console.log(userCopy === user);
// userCopy.age = 18;
// console.log(userCopy);
// console.log(user);

let nums = [11, 22, 33];
// let nums2 = nums; // true
let nums2 = [...nums]; // false
console.log(nums === nums2);

