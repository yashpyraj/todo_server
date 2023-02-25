const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || 'jwt-secret',
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/todo',
};
