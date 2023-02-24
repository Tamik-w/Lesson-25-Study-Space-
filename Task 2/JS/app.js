"use strict";

const dataBase = {
    dbName: 'user',
    dbType: 'MySQL',
};
Object.freeze(dataBase);

const configurateDB = {
    token: '123',
    password: '567',
    user: 'admin',
};
Object.seal(configurateDB);

