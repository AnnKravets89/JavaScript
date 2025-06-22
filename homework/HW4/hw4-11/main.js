function sum(numbers) {
    let sumNumbers = 0;
    for (let number of numbers) {
        sumNumbers += number;
    }
    return sumNumbers;
}

console.log(sum([12, 7, 25, 9, 30, 41, 3, 17, 8, 21]));
