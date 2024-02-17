const { findAllThoughts, createThought, findOneThought, updateThought, deleteThought, createReaction, deleteReaction } = require("../../controllers/thoughtController");

const routes = require("express").Router();

routes.route("/")
.get(findAllThoughts)
.post(createThought)


routes.route("/:thoughtId")
.get(findOneThought)
.put(updateThought)
.delete(deleteThought)

routes.route("/:thoughtId/reactions")
.post(createReaction)

routes.route("/:thoughtId/reactions/:reactionId")
.delete(deleteReaction)


module.exports = routes