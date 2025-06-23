let sum = (arr) => {
    let sumNumbers = 0;
    for (let number of arr) {
        sumNumbers += number;
    }
    return sumNumbers;
}
let numbers = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(sum(numbers));
