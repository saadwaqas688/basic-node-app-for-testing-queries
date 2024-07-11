const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB connection URI
const mongoURI = 'mongodb://root:prisma@localhost:27018/test?authSource=admin';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.error('Error connecting to MongoDB:', err));

// Use middleware to parse JSON bodies
app.use(express.json());

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
