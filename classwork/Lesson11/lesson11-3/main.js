let url = new URL('https://jsonplaceholder.typicode.com/posts');
url.searchParams.set('userId', 8);
url.searchParams.set('userId', 9);
console.log(url.searchParams.get('userId'));

url.searchParams.fetch(url)
    .then(value => value.json())
    .then(value => {
        console.log(value);
    })
