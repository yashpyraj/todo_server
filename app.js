// app.js

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { authMiddleware } = require('./middleware/auth');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todo');
const config = require('./config');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:4000' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todo', authMiddleware, todoRoutes);

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error(`Failed to connect to MongoDB: ${err}`);
});

app.get('/', (req, res) => {
    res.send({ message: 'successful' });
});




app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
