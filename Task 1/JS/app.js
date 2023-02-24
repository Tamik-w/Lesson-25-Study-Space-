"use strict";

const user = {
    name: 'Lasha',
    age: 28,
}

Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false,
    configurable: false,
});

Object.defineProperty(user, 'age', {
    writable: false,
    enumerable: false,
    configurable: false,
})

user.id = 12;

Object.defineProperty(user, 'id', {
    writable: false,
    configurable: false,
});

console.log(
    Object.getOwnPropertyDescriptor(user, 'name'),
    Object.getOwnPropertyDescriptor(user, 'age'),
    Object.getOwnPropertyDescriptor(user, 'id'));

console.log(`Name: ${user.name};  Age: ${user.age};  User ID: ${user.id}`);