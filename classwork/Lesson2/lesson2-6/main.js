let user = {
    id : 1,
    name : 'anna'
};
user.age = 35;
user['status'] = false;
console.log(user);

delete user.id;
console.log(user);
