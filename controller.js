let userService = require('./service');

exports.createUser = function (req, res, next){
    let user = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    };
    // res.json({
    //     message: "Create Success"
    // })
    return userService.create(user);

}

exports.updateUser = function (req, res, next) {
    let user = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    };
    // res.json({
    //     message: "Update Success"
    // })
    return userService.update(user);
}

exports.deleteUser = function (req, res, next) {
    let idUser = req.body.id;
    return userService.deleteUser(idUser);
    // return res.json({
    //     message: "Delete Success"
    // })
}

exports.getAllUsers = function (req, res, next) {
    // res.json({
    //     message: "View all!"
    // })
    return userService.get();

}

