
exports.errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode).json({message: err.message})
    console.log('heyyyyyyyyyy I m the express middleware error ');
  }
  