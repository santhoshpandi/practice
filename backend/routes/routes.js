const express = require('express')
const router = express.Router()

const { addStudent, deleteStudent, displayStudent, updateStudent} = require('../controllers/StudentController')

router.route('/get').get(displayStudent)
router.route('/add').post(addStudent)
router.route('/update/:id').put(updateStudent)
router.route('/del/:id').delete(deleteStudent)


module.exports = router
