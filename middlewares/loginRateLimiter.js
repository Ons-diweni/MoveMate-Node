const redis = require('redis');
const { RateLimiterRedis } = require('rate-limiter-flexible');


// Create a Redis client instance
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
  enableReadyCheck: true, // Enable "ready check" to test if Redis is available
});

//// Listen for Redis "ready" event
redisClient.on('ready', () => {
  console.log('Redis client connected');
});

// Listen for Redis "error" event
redisClient.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});


// Create a rate limiter instance using Redis as the store
const rateLimiter  = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_ip', // Prefix for keys used by Redis
  points: 5, // Allow 5 requests
  duration: 60, // Per 15 minutes
});


  // Middleware for rate limiting login endpoint
const loginRateLimiter = (req, res, next) => {

    // Get the user's IP address
    const ip = req.ip;
  
    // Check if the IP address has exceeded the request limit
    rateLimiter
      .consume(ip)
      .then(() => {
        // If the user has not exceeded the limit, continue with the request
        next();
      })
      .catch((err) => {
        // If the user has exceeded the limit
        console.log(`Rate limit exceeded for ${req.ip}: ${err}`);
        res.status(429).json({ message: "Too many login attempts, please try again later." });
      });
  };

// Export the rate limit middleware function for use in other modules (authRoutes Module)
module.exports = {loginRateLimiter , rateLimiter}