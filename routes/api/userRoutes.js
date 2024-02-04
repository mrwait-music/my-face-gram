const { findAllUsers, createUser, updateUser, findOneUser, deleteUser } = require("../../controllers/userController");

const routes = require("express").Router();

routes.route("/user")
.get(findAllUsers)
.post(createUser)


routes.route("/user/:id")
.get(findOneUser)
.put(updateUser)
.delete(deleteUser)

module.exports = routes