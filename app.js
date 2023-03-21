require('dotenv').config();
const express = require ('express')
var path = require('path');
const app = express ()
const mongoose = require('mongoose')
const userRouter = require ('./routes/userRoutes')

// database connection
mongoose.connect(process.env.URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> {console.log('Successfully connected to the database')})
.catch((err)=>{ console.log('Error connecting to the database',err)})



//middleware to handle incoming HTTP requests that contain JSON-encoded data in the request body
app.use(express.json());
//middleware to handle HTTP requests containing URL-encoded data.
app.use(express.urlencoded({ extended: false }));
//middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));




app.use('/user',userRouter)
app.get('/greeting', (req, res) => { res.send('Hello form MoveMate Api')})


module.exports = app ;