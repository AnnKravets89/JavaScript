function stringToarray(str) {
    if (str) {
        return str.split(' ');
    }
    return [''];
}
let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);
console.log(arr);

