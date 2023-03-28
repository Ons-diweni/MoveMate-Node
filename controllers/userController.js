const express = require ('express');
const User = require ('../models/user');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const asyncHandler = require ('express-async-handler');



//          registration
exports.register = asyncHandler (async (req, res) => {
  const {username, password, email, cin} = req.body;
  if (!cin || !password || !email) {
    res.status (400); //Bad request
    return res.json ({error: 'Required fields are missing'});
  }
  //check if user exists
  const userFetched = await User.findOne ({cin});
  if (userFetched) {
    res.status (400);
    return res.json ({error: 'User already exists'});
  }
  //Hash user Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password , salt)

  //create and persist the user in the database
  const newUser = await User.create({username , email , password : hashedPassword , cin})

  if(newUser) {res.status(201).json(newUser)} 
  else res.status(400).json({error : 'Error while persisting user in the database'})



});



//          Add a user
exports.add = async (req, res, next) => {
  console.log (req.body);
  if (Object.keys (req.body).length !== 0) {
    const user = new User ({...req.body});
    await user
      .save ()
      .then (data => {
        res.send ({
          message: 'User with id ' + data._id + ' added successfully',
        });
      })
      .catch (err => {
        res.send ({
          message: 'Some error occurred while creating a user',
          error: err,
        });
      });
  } else {
    res.status (400).send ({message: 'No data provided to persist'});
    return;
  }
};
