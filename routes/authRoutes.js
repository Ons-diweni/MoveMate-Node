const express = require ('express')
const router = express.Router()
const authController = require ('../controllers/authController')
const signUpSchemaValidator = require ('../middlewares/signUpValidator')
const {loginRateLimiter} = require ('../middlewares/loginRateLimiter')
const authMiddleware = require ('../middlewares/authMiddleware')



//router.post("/add" , authController.add)
router.post("/register" ,signUpSchemaValidator ,authController.register)
router.post("/login" , loginRateLimiter , authController.login)
router.get('/isValid' , authMiddleware , authController.validater)

module.exports = router