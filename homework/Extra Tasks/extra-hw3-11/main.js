let arr = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
}
console.log(newArr);
