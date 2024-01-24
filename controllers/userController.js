const {User} = require("../models")

module.exports = {
    findAll: async function(req, res){
        try {
            const userData = await User.find()
            res.json(userData)
        } catch (error) {
            
        }
    },
    create: async function (req, res) {
        try {
            const data = await User.create(req.body)
            res.json(data)
        } catch (error) {
            
        }
    }
}