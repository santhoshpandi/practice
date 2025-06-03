const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.DB_URL)
    .then(() => console.log('DB connected successfully😍'))
    .catch((err) => console.log(err.message))
}

module.exports = connectDB
