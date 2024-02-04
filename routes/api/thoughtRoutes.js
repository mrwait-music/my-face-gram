const {  } = require("../../controllers/thoughtController");

const routes = require("express").Router();

routes.route("/thoughts")
.get(findAll)
.post(create)


routes.route("/thoughts/:id")
.get(findOne)
.put(update)
.delete(deleteThought)

routes.route("/thoughts/:thoughtID/reactions")
.post()
.delete()

module.exports = routes