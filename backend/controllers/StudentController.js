const Student = require('../models/Student')

const addStudent = async (req, res) => {

  const data = req.body
  console.log(data)
  await Student.insertOne(data)
    .then(() => res.json("Data inserted Successfully"))
    .catch((err) => res.json({ message: err.message }))
}
const displayStudent = async (req, res) => {
  const result = await Student.find({}).then().catch((err) => console.log(err.message))
  res.json(result)
}
const updateStudent = async (req, res) => {

}
const deleteStudent = async (req, res) => {

}

module.exports = { addStudent, displayStudent, updateStudent, deleteStudent }