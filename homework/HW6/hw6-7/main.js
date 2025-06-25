function sortNums(array,direction) {
    if (direction === 'ascending') {
        array.sort((a,b) => a - b)
    }
    if (direction === 'descending') {
        array.sort((a,b) => b - a)
    }
    return array;
}
let nums = [3, 11, 21];
console.log(sortNums(nums,'descending'));
