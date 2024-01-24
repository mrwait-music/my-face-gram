const routes = require("express").Router();
const apiRoutes = require("./api")


routes.use("./api", apiRoutes
)
routes.use((req, res) => {
    res.status(404).json("not found")
})


module.exports = routes