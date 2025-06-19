let randomArr = [];
for (let i = 0; i < 20; i++) {
    randomArr[i] = Math.floor(Math.random() * 100);
}
console.log(randomArr);
let newArr = [];
for (let i =0; i < randomArr.length; i++) {
    newArr[i] = randomArr[i] * 5;
}
console.log(newArr)
