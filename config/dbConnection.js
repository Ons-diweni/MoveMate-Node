const {config} = require ('dotenv');
const mongoose = require ('mongoose');


exports.dbConnection = async () => {
  try {
    const connection = await mongoose.connect (process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log ('Successfully connected to the database');
  } catch (err) {
    console.log ('Error connecting to the database' + err);
    process.exit(1)
  }
}
