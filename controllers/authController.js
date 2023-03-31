const express = require ('express');
const User = require ('../models/user');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const asyncHandler = require ('express-async-handler');
const {rateLimiter} = require ('../middlewares/loginRateLimiter')



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

  // Check if request body is empty
if (Object.keys(req.body).length === 0) return res.status(400).json({error : ERRORS.REQUIRED_FIELDS_MISSING})

// Extract email and password from request body
const {email , password} = req.body

// Find user by email
const user = await User.findOne({email});

// Check if user exists and password is correct
if(!user) {
  res.status(401).json({error : ERRORS.INVALID_EMAIL_OR_PASSWORD});
} else if(!(await bcrypt.compare(password , user.password))) {
  res.status(401).json({error :ERRORS.INVALID_EMAIL_OR_PASSWORD})
} else {
  // Authentication successful
  rateLimiter.delete(req.ip); // Reset rate limiter for client IP address
  // Generate a JWT token with user ID and email as payload
  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  const {username , email } = user;
  res.status(200).json({ data : {username , email , token } , message : 'Login Successfully'}) ;
}

})

