const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  },
  {
    timestamps: true
  })

const Student = mongoose.model('student', StudentSchema)

module.exports = Student