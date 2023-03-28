const express = require ('express');
const User = require ('../models/user');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const asyncHandler = require ('express-async-handler');



//              registration
exports.register = asyncHandler(async (req, res) => {

  if (Object.keys(req.body).length === 0) return res.status(400).json({error : 'No data provided'})
   try { 
    const {username, password, email, cin} = req.body;
    if (!cin || !password || !email) {
      res.status (400); //Bad request
      return res.json ({error: 'Required fields are missing'});
    }
    //check if user exists
    const userFetched = await User.findOne ({ $or: [ { cin }, { email }]});
    if (userFetched) {
      res.status (400);
      return res.json ({error: 'User already exists'});
    }
    //Hash user Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)

    //create and persist the user in the database
    const newUser = await User.create({username , email , password : hashedPassword , cin})

    if(newUser) {
      res.status(201).json({user : newUser , message : 'User with cin' + newUser.cin + ' added successfully'})
    } else {
      res.status(400).json({error : 'Error while persisting user in the database'})
    }
     } catch (err) {
    // Handle any unexpected errors here
    res.status(500).json({error: 'Unexpected error occurred while registering user'})
  } 
});


