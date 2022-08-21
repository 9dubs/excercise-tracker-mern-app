const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({origin: 'http://localhost:3000', credentials: true, allowedHeaders: ['Content-Type']}));
app.use(express.json());

const uri = process.env.ATLAS_URI || "mongodb+srv://ashash:ash254@cluster0.mznhd.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection establshed successfully!")
});

const excerciseRoute = require('./routes/excercise');
const userRoute = require('./routes/users');

app.use('/excercise', excerciseRoute);
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
