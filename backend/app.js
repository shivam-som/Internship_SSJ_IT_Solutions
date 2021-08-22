const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
const PORT = process.env.PORT;

require('./db/conn');
// const teachersDoc = require('./model/teachersDoc');

app.use(express.json());

app.use(require('./router/auth'));

// app.get('/about', (req, res)=>{
//     console.log("Hello My About after middleware");
//     res.send("Hello World From About");
// });

app.get('/courses', (req, res)=>{
    res.send("Hello World From Courses");
});

app.get('/contact', (req, res)=>{
    res.send("Hello World From Contact");
});

app.listen(PORT, ()=>{
    console.log(`Server is Running at ${PORT}`);
})