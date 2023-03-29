const express = require ('express')
const router = express.Router()
const authController = require ('../controllers/authController')
const {loginLimiter} = require ('../middlewares/loginLimiter')
const signUpSchemaValidator = require ('../middlewares/signUpValidator')


//router.post("/add" , authController.add)
router.post("/register"  ,authController.register)
router.post("/login" , loginLimiter , authController.login)


module.exports = router