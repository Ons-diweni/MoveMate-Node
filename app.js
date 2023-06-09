require('dotenv').config();
const express = require ('express')
var path = require('path');
const app = express () ;
const os = require ('os')
const {dbConnection} = require('./config/dbConnection');
const {errorHandler} = require('./middlewares/errorHandler');


// database connection
dbConnection()


//middleware to handle incoming HTTP requests that contain JSON-encoded data in the request body
app.use(express.json());
//middleware to handle HTTP requests containing URL-encoded data.
app.use(express.urlencoded({ extended: false }));
//middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));


//Routes configuration
app.use('/', require ('./routes/authRoutes'))
app.get('/greeting', (req, res) => { res.send('Hello form MoveMate Api')})


//Error Middleware
app.use(errorHandler)


module.exports = app ;