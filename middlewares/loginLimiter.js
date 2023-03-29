const rateLimit = require('express-rate-limit')


// rate limiting middleware for the login endpoint
exports.loginLimiter = rateLimit ({ 
    windowMs : 15 * 60 * 1000  , //the time window (in milliseconds) during which the rate limit applies
    max : 4 , //limit each IP to 4 requests per windowMs
    keyGenerator: (request, response) => request.ip //// Use the IP address of the machine as rate limit key

    })
  
  