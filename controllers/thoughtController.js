const {Thought} = require("../models")


module.exports = {
    findAllThoughts: async function (req, res) {
        try {
            const data = await Thought.find()
            res.json(data)
        } catch (error) {

        }
    },
    findOneThought: async function (req, res) {
        try {
            const data = await Thought.findById(req.params.thoughtId )
                .select('-__v');

            if (!data) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(data);
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
    createThought: async function (req, res) {
        try {
            const data = await Thought.create(req.body)
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
    updateThought: async function (req, res) {
        try {
            const data = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                req.body, 
                { new: true } 
            );
            
            if (!data) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }
    
            res.json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },  
    deleteThought: async function (req, res) {
        try {
            const data = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!data) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json({ message: 'Thought deleted!' })
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
    createReaction: async function (req, res) {
        try {
            const data = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {reactions: {$addToSet: req.body}}, {new: true})
            res.json(data)
        } catch (error) {
            res.status(500).json(err.message);
        }
    },
    deleteReaction: async function (req, res) {
        try {
            const data = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, {reactions: {$pull: {reactionId: req.params.reactionId}}}, {new: true});

            if (!data) {
                return res.status(404).json({ message: 'No reaction with that ID' });
            }
            res.json({ message: 'Reaction deleted!' })
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
}