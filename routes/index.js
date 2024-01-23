const routes = require("express").Router();


routes.use((req, res) => {
    res.status(404).json("not found")
})


module.exports = routes