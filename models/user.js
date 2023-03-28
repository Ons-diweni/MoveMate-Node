//Mongoose is a Node.js library that provides a way to interact with MongoDB databases
//allowing developers to work with MongoDB documents in a more object-oriented way.
const mongoose = require ('mongoose');

//User schema
const userSchema = mongoose.Schema (
  {
    email: {type: String, required: true , unique : true},
    username: {type: String, required: true},
    cin: {type: Number, required: true, unique: true},
    password: {type: String, required: true},
  },
  // an option provided by Mongoose to automatically add two fields to each document created in the database, namely createdAt and updatedAt.
  {
    timestamps: true,
  }
);

//allows other parts of the application to import the "User" model and use it to interact with the database
module.exports = mongoose.model ('User', userSchema);
