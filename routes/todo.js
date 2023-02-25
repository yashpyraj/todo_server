


const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.userId });

        res.json(todos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const todo = new Todo({
            user: req.user.userId,
            title,
            description,
        });

        await todo.save();

        res.json({ message: 'Todo created', todo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.patch('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { done } = req.body;

        const todo = await Todo.findOne({ _id: id, user: req.user.userId });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        todo.done = done;
        await todo.save();

        res.json({ message: 'Todo updated', todo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findOne({ _id: id, user: req.user.userId });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        await todo.delete();

        res.json({ message: 'Todo deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
