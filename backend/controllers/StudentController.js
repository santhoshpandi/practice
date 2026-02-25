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
  try {
    const { id } = req.params
    const { name, age } = req.body
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, age },
      { new: true, runValidators: true }
    )
    if (!updatedStudent) return res.status(404).json({ success: false, message: 'Student Not found' })
    res.status(200).json({ success: true, message: 'Student Updated' })
  }
  catch (err) {
    res.status(500).json({ success: false, message: err.message })
    console.log(err.message)
  }
}
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params
    const deletedStudent = await Student.findByIdAndDelete(id)
    if (!deletedStudent) return res.status(404).json({ success: false, message: 'Student Not found' })
    res.status(200).json({ success: true, message: 'Student Deleted' })
  }
  catch (err) {
    res.status(500).json({ success: false, message: err.message })
    console.log(err.message)
  }
}

module.exports = { addStudent, displayStudent, updateStudent, deleteStudent }