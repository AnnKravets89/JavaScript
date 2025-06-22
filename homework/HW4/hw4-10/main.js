function returnTheSmallestNumber(array) {
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        let number = array[i];
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

let numbers = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(returnTheSmallestNumber(numbers));
