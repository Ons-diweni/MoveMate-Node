const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const  {ERRORS} = require('../utils/errors');


const authMiddleware = asyncHandler(async (req, res, next) => {
    // Get token from headers or cookies
    const token = req.headers.authorization?.split(' ')[1]
    //const token = req.headers.authorization?.split(' ')[1] || req.cookies.jwt;
    // Check if token exists
    if (!token) {
      return res.status(401).json({ error: ERRORS.AUTHENTICATION_REQUIRED });
    }
  
    try {
      // Verify token
      const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  
      // Attach the decoded payload to the request object
      req.user = decoded;
      // Call the next middleware in the chain
      next();
    } catch (err) {
     // return res.status(401).json({ error: 'hello y a un erreur ' });
     return res.status(401).json({ error: ERRORS.INVALID_TOKEN });
    }
  });
  
  module.exports = authMiddleware ;


