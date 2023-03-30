const express = require ('express')
const router = express.Router()
const authController = require ('../controllers/authController')
const signUpSchemaValidator = require ('../middlewares/signUpValidator')
const {loginRateLimiter} = require ('../middlewares/loginRateLimiter')



//router.post("/add" , authController.add)
router.post("/register" ,signUpSchemaValidator ,authController.register)
router.post("/login" , loginRateLimiter , authController.login)


module.exports = router