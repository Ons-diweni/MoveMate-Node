const express = require ('express');
const User = require ('../models/user');



//          Add a user
exports.add = async (req, res, next) => {
  console.log(req.body)
  if (Object.keys (req.body).length !== 0) {
  const user = new User ({...req.body});
  await user.save ()
      .then (data => {res.send ({message: 'User with id ' + data._id + ' added successfully'});})
      .catch (err => { res.send ({message: 'Some error occurred while creating a user', error: err,});
      });
  } else {
    res.status (400).send ({message: 'No data provided to persist'});
    return;
  }
};
