async function foo() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    console.log(users);
    console.log(posts);
}

foo();
