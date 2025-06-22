function swap(array, index1, index2) {
    if (index1 < array.length && index2 < array.length) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    }
    return "Error!"
}
let numbers = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(swap(numbers, 0, 1));
