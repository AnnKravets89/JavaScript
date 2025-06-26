function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    user = new User(1, "Olena", "Koval", "olena.koval@example.com", "+380671112233" ),
    user1 = new User(2, "Andrii", "Shevchenko",  "andrii.shev@example.com", "+380672223344" ),
    user2 = new User(3, "Iryna",  "Tymoshenko", "iryna.t@example.com",  "+380673334455" ),
    user3 = new User(4,  "Oleh", "Ivanov", "oleh.i@example.com",  "+380674445566" ),
    user4 = new User(5,  "Natalia",  "Lysenko",  "natalia.ly@example.com",  "+380675556677" ),
    user5 = new User(6, "Taras",  "Bondarenko",  "taras.b@example.com",  "+380676667788" ),
    user6 = new User(7, "Sofiia",  "Melnyk",  "sofiia.m@example.com",  "+380677778899" ),
    user7 = new User(8, "Dmytro", "Kravchenko",  "dmytro.k@example.com",  "+380678889900" ),
    user8 = new User(9, "Anastasiia", "Polishchuk",  "anastasiia.p@example.com",  "+380679990011" ),
    user9 = new User(10, "Volodymyr",  "Horbenko",  "volodymyr.h@example.com",  "+380671001122" )
];

function Client(id, name, surname , email, phone, order) {
    User.apply(this, arguments);
    this.order = order;
}

let clients = [
    client= new Client(1, "Olena", "Koval", "olena.koval@example.com", "+380671112233",['laptop', 'mouse', 'headphones'] ),
    client1 = new Client(2, "Andrii", "Shevchenko",  "andrii.shev@example.com", "+380672223344",  ['phone', 'charger', 'headphones', 'power adapter'] ),
    client2 = new Client(3, "Iryna",  "Tymoshenko", "iryna.t@example.com",  "+380673334455", ['notebook', 'pen'] ),
    client3 = new Client(4,  "Oleh", "Ivanov", "oleh.i@example.com",  "+380674445566",  ['monitor', 'keyboard', 'webcam'] ),
    client4 = new Client(5,  "Natalia",  "Lysenko",  "natalia.ly@example.com",  "+380675556677",  ['tablet', 'case'] ),
    client5 = new Client(6, "Taras",  "Bondarenko",  "taras.b@example.com",  "+380676667788",  ['camera', 'tripod', 'memory card'] ),
    client6 = new Client(7, "Sofiia",  "Melnyk",  "sofiia.m@example.com",  "+380677778899", ['printer', 'ink'] ),
    client7 = new Client(8, "Dmytro", "Kravchenko",  "dmytro.k@example.com",  "+380678889900",  ['router', 'ethernet cable', 'power adapter'] ),
    client8 = new Client(9, "Anastasiia", "Polishchuk",  "anastasiia.p@example.com",  "+380679990011", ['book', 'bookmark'] ),
    client9 = new Client(10, "Volodymyr",  "Horbenko",  "volodymyr.h@example.com",  "+380671001122", ['game console',  'HDMI cable', 'memory card', 'webcam'] )
];
 console.log(clients);
 //– Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

console.log(clients.sort((cl1, cl2) => cl1.order.length - cl2.order.length));


