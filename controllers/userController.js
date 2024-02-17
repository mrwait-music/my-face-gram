const { User } = require("../models")
const { ObjectId } = require('mongoose').Types;


module.exports = {
    findAllUsers: async function (req, res) {
        try {
            const userData = await User.find()
            res.json(userData)
        } catch (error) {
            res.status(500).json({ message: 'Error finding all users', error: error.message });
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
            res.status(404).json(error.message );
        }
    },
    updateUser: async function (req, res) {
        try {
            const data = await User.findOneAndUpdate(
                { _id: req.params.userId },
                req.body, 
                { new: true } 
            );
            
            if (!data) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }
    
            res.json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },    
    deleteUser: async function (req, res) {
        try {
            const data = await User.findOneAndDelete({ _id: req.params.userId });
                return res.json({ message: 'User Deleted' });
            
        } catch (err) {
            res.status(500).json(err);
        }
    },
    addFriend: async function (req, res) {
        try {
            const data = await User.findOneAndUpdate({_id: req.params.userId}, {$addToSet: {friends: req.params.userId}}, {new: true});
            if (!data) {
                return res.status(404).json({ message: 'No user with that ID' });
            }            
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
    removeFriend: async function (req, res) {
        try {
            const data = await User.findOneAndUpdate({ _id: req.params.userId }, {$pull: {friends: req.params.userId}}, {new: true});

            if (!data) {
                return res.status(404).json({ message: 'No friend with that ID' });
            }
            res.json({ message: 'Friend removed!' })
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
}