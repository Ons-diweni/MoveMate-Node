const express = require ('express');
const User = require ('../models/user');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const asyncHandler = require ('express-async-handler');


const ERRORS = {
  NO_DATA_PROVIDED: 'No data provided',
  REQUIRED_FIELDS_MISSING: 'Required fields are missing',
  USER_ALREADY_EXISTS: 'User already exists',
  INVALID_EMAIL_OR_PASSWORD: 'Invalid email or password',
  TOO_MANY_LOGIN_ATTEMPTS: 'Too many login attempts, please try again later.',
  INTERNAL_SERVER_ERROR: 'Unexpected error occurred while logging in user'
};


//              registration
exports.register = asyncHandler(async (req, res) => {
  
  if (Object.keys(req.body).length === 0) return res.status(400).json({error : ERRORS.NO_DATA_PROVIDED})
   try { 
    const {username, password, email, cin} = req.body;
    if (!cin || !password || !email) {
      res.status (400); //Bad request
      return res.json ({error: ERRORS.REQUIRED_FIELDS_MISSING});
    }
    //check if user exists1
    const userFetched = await User.findOne ({ $or: [ { cin }, { email }]});
    if (userFetched) {
      res.status (400);
      return res.json ({error: ERRORS.USER_ALREADY_EXISTS});
    }
    //Hash user Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)

    //create and persist the user in the database
    const newUser = await User.create({username , email , password : hashedPassword , cin})

    if(newUser) {
      res.status(201).json({user : newUser , message : 'User successfully registered'})
    } else {
      res.status(400).json({error : ERRORS.INTERNAL_SERVER_ERROR})
    }
     } catch (err) {
    // Handle any unexpected errors here
    res.status(500).json({error: ERRORS.INTERNAL_SERVER_ERROR})
  } 
});



//              Login
exports.login = asyncHandler (async (req , res) => {

  console.log(req.rateLimit.remaining);
   //Check if the user has reached the threshold of unsuccessful login attempts.
if (req.rateLimit.remaining === 0) { return res.status(429).send(ERRORS.TOO_MANY_LOGIN_ATTEMPTS);}

if (Object.keys(req.body).length === 0) return res.status(400).json({error : ERRORS.REQUIRED_FIELDS_MISSING})

const {email , password} = req.body

// Exclude password and cin from user object
const user = await User.findOne({email});

if(!user) {
  // req.rateLimit.increment();
  --req.rateLimit.remaining
   res.status(401).json({error : ERRORS.INVALID_EMAIL_OR_PASSWORD});
  }

if(!(await bcrypt.compare(password , user.password))) 
  {//req.rateLimit.increment();
  console.log(req.rateLimit.remaining);
  --req.rateLimit.remaining
  console.log(req.rateLimit.remaining);
  return res.status(401).json({error :ERRORS.INVALID_EMAIL_OR_PASSWORD})}

else  {

  //resets the rate limit 
  //req.rateLimit.resetKey(req.ip);
  req.rateLimit.remaining = 4;
  //req.rateLimit.resetKey(req.ip);
  // Exclude password and cin from user object
  //const {password , cin , ...data} = user.toObject();
  const {username , email } = user;
  res.status(200).json({ data : {username , email} , message : 'Login Successfully'}) ;}

})

