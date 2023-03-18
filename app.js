require('dotenv').config();
const express = require ('express')
const app = express ()
const mongoose = require('mongoose')


mongoose.connect(process.env.URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> {console.log('Successfully connected to the database')})
.catch((err)=>{ console.log('Error connecting to the database',err)})




module.exports = app ;