// models/todo.js

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
