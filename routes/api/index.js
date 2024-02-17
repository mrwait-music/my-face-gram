const routes = require("express").Router();
const userRoutes = require("./userRoutes")
const thoughtRoutes = require("./thoughtRoutes")

routes.use("/users", userRoutes)
routes.use("/thoughts", thoughtRoutes)



module.exports = routes