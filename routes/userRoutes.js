const express = require ('express')
const router = express.Router()
const userController = require ('../controllers/userController')




router.post("/add" , userController.add)


module.exports = router