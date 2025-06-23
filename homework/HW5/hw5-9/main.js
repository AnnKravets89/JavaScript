let usersList = (array) => {
    for (user of array) {
        document.write(`
                        <div>
                         <p>${user.id}
                            ${user.name}
                            ${user.age}</p>
                        </div>
                      `)
    }
}
let people = [
    { id: 1, name: "Anna", age: 25 },
    { id: 2, name: "Mark", age: 30 },
    { id: 3, name: "Sophie", age: 22 },
    { id: 4, name: "Daniel", age: 28 },
    { id: 5, name: "Lina", age: 35 }
];
usersList(people);
