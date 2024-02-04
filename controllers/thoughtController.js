const {Thought} = require("../models")
const { ObjectId } = require('mongoose').Types;


module.exports = {
    findAllThoughts: async function (req, res) {
        try {
            const data = await Thought.findAll()
            res.json(data)
        } catch (error) {

        }
    },
    findOneThought: async function (req, res) {
        try {
            const data = await Thought.findOne({ _id: req.params.thoughtID })
                .select('-__v');

            if (!data) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    createThought: async function (req, res) {
        try {
            const data = await Thought.create(req.body)
            res.json(data)
        } catch (error) {

        }
    },
    updateThought: async function (req, res) {
        try {
            const data = await Thought.findOneAndUpdate({
                where: {
                    _id: req.params.id
                }
            },
                req.body,
                { new: true }
            )
        } catch (error) {
            res.json(" No thought with that ID")
        }
    },
    deleteThought: async function (req, res) {
        try {
            const data = await Thought.findOneAndDelete({ _id: req.params.thoughtID });

            if (!data) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            await Application.deleteMany({ _id: { $in: user.applications } });
            res.json({ message: 'Thought deleted!' })
        } catch (err) {
            res.status(500).json(err);
        }
    },
}