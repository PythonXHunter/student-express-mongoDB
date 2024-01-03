const express = require('express')
const router = express.Router()
const Student = require('../models/models')
const {
	getAllStudent,
	createStudent,
	getStudent,
	updateStudent,
	deleteStudent
} = require('../controller/controller')

router.get('/', getAllStudent)

router.post('/', createStudent)

router.get('/:id', getStudent)

router.patch('/:id', updateStudent)

router.delete('/:id', deleteStudent)

module.exports = router