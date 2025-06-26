function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    user = new User(10, "Olena", "Koval", "olena.koval@example.com", "+380671112233" ),
    user1 = new User(2, "Andrii", "Shevchenko",  "andrii.shev@example.com", "+380672223344" ),
    user2 = new User(8, "Iryna",  "Tymoshenko", "iryna.t@example.com",  "+380673334455" ),
    user3 = new User(4,  "Oleh", "Ivanov", "oleh.i@example.com",  "+380674445566" ),
    user4 = new User(7,  "Natalia",  "Lysenko",  "natalia.ly@example.com",  "+380675556677" ),
    user5 = new User(6, "Taras",  "Bondarenko",  "taras.b@example.com",  "+380676667788" ),
    user6 = new User(5, "Sofiia",  "Melnyk",  "sofiia.m@example.com",  "+380677778899" ),
    user7 = new User(3, "Dmytro", "Kravchenko",  "dmytro.k@example.com",  "+380678889900" ),
    user8 = new User(9, "Anastasiia", "Polishchuk",  "anastasiia.p@example.com",  "+380679990011" ),
    user9 = new User(1, "Volodymyr",  "Horbenko",  "volodymyr.h@example.com",  "+380671001122" )
];

console.log(users.sort((user1, user2) => user1.id - user2.id));
