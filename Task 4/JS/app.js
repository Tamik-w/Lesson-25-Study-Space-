const user = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,

    get userInfo() {
        const result = [];
            for (const key in this) {
                if (Object.hasOwnProperty.call(this, key)) {
                    result.push(`${key}: ${this[key]}`);
                }
            }  
        return result.join(', ');
    },
};

Object.defineProperty(user, 'userInfo', {
    enumerable: false,
});

console.log(user.userInfo);
console.log(user)
user.login = 'MK_18';
console.log(user)
console.log(user.userInfo);
