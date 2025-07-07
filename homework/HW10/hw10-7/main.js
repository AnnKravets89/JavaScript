function addToLocalStorage(arrayName, objToAdd) {
    const item = localStorage.getItem(arrayName);
    const arr = JSON.parse(item);

    if(typeof objToAdd === 'object') {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

localStorage.setItem('sessionsList', JSON.stringify([]));
addToLocalStorage('sessionsList', {});
