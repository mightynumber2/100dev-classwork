///////////////////////////////////////
// HELLO OBJECT

const user = new Object();

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);
