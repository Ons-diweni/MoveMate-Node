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



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/user',userRouter)
app.get('/greeting', (req, res) => { res.send('Hello form MoveMate Api')})


module.exports = app ;