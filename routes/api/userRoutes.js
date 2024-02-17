const { findAllUsers, createUser, updateUser, findOneUser, deleteUser, addFriend, removeFriend } = require("../../controllers/userController");
const routes = require("express").Router();

routes.route("/")
    .get(findAllUsers)
    .post(createUser);

routes.route("/:userId")
    .get(findOneUser)
    .put(updateUser)
    .delete(deleteUser);

routes.route('/:userId/friends/')
    .post(addFriend)

routes.route('/:userId/friends/:friendId')
    .delete(removeFriend);

module.exports = routes;