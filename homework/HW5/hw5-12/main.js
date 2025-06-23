let swap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return "Error!";
}
let numbers = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(swap(numbers, 0, 1));
