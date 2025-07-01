let course =  {
    id:1,
    title: 'JavaScript Complex',
    monthDuration: 5,
    greeting() {
        console.log('Good morning!');
    },
    foo() {}
};
function deepCopy(obj) {
    if (obj) {
        let functionArr = [];
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                let functionCopy = obj[key].bind({});
                functionArr.push({functionCopy, key});
            }
        }
        const copyObj = JSON.parse(JSON.stringify(obj));
        for (let func of functionArr) {
            copyObj[func.key] = func.functionCopy;
        }
        return copyObj;
    }
    throw new Error('!!!!!!');
}

console.log(deepCopy(course));
course.greeting();
course.foo();



