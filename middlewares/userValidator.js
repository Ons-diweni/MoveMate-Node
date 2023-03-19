//Joi is a popular library used for data validation in Node.js applications
const joi  = require('joi')


const userSchemaValidator = joi.object({

username : joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20).required(),
email : joi.string().email().pattern(new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/)).required() ,
cin : joi.number().integer().min(10000000).max(99999999).required()  ,
password : joi.string().pattern(new RegExp('^(?=.*[A-Z])[a-zA-Z0-9]{8,30}$')).required()

})


module.exports = userSchemaValidator