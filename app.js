require('dotenv').config();
const express = require ('express')
var path = require('path');
const app = express ()
const os = require ('os')
const {dbConnection} = require('./config/dbConnection')



// database connection
dbConnection()


//middleware to handle incoming HTTP requests that contain JSON-encoded data in the request body
app.use(express.json());
//middleware to handle HTTP requests containing URL-encoded data.
app.use(express.urlencoded({ extended: false }));
//middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));


//Routes configuration
app.use('/user', require ('./routes/userRoutes'))


app.get('/greeting', (req, res) => { res.send('Hello form MoveMate Api')})




module.exports = app ;