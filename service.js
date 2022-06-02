let users = require('./user');

exports.create = (user) => {
    users.push(user)
    return users;
}

exports.update = (user) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === user.id) {
            users[i].name = user.name;
            users[i].age = user.age;
        }
    }
}

exports.deleteUser = (idUser) => {
    let index = -1;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === idUser);
        index = i;
    }
    if (index !== -1) {
        users.splice(index, 1);
    }
}

exports.get = () => {
    return users;
}



