new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = 1;
        console.log(x);
        resolve(x);
    }, 1000);
}).then(value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            value++;
            console.log(value);
            if (false) {
                reject('ghjklvbnm');
            } else {
                resolve(value);
            }
            // throw new Error('error');
        }, 1000);
    });
})
    .catch(reason => {
        console.log(reason);
    })
    .then(value => {
        setTimeout(() => {
            value++;
            console.log(value);

        }, 1000);
    })


