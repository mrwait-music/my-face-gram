const { User } = require("../models")
const { ObjectId } = require('mongoose').Types;


module.exports = {
    findAllUsers: async function (req, res) {
        try {
            const userData = await User.findAll()
            res.json(userData)
        } catch (error) {

        }
    },
    findOneUser: async function (req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    createUser: async function (req, res) {
        try {
            const data = await User.create(req.body)
            res.json(data)
        } catch (error) {

        }
    },
    updateUser: async function (req, res) {
        try {
            const data = await User.findOneAndUpdate({
                where: {
                    _id: req.params.id
                }
            },
                req.body,
                { new: true }
            )
        } catch (error) {
            res.json(" ")
        }
    },
    deleteUser: async function (req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            await Application.deleteMany({ _id: { $in: user.applications } });
            res.json({ message: 'User and associated apps deleted!' })
        } catch (err) {
            res.status(500).json(err);
        }
    },
}