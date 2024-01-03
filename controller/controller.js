const Student = require('../models/models')

const getAllStudent = async (req, res) => {
	const student = await Student.find({})
	res.status(200).json({ student })
}

const createStudent = async (req, res) => {
	const student = await Student.create(req.body)
	res.status(200).json({ student, msg: "Success"})
}

const getStudent = async (req, res) => {
	const { _id: taskId} = req.params;
	const student = await Student.findOne({ id: taskId })
	res.status(200).json({ student })
}

const updateStudent = async (req, res) => {
	const { _id: taskId} = req.params;
	const student = await Student.findOneAndUpdate({ id: taskId }, req.body)
	res.status(200).json({ student, msg: "Data Successfully Updated"})
}

const deleteStudent = async (req, res) => {
	const { _id: taskId } = req.params;
	const student = await Student.findOneAndDelete({ id: taskId})
	res.status(200).json({ student, msg: "Successfully Deleted"})
}

module.exports = {
	getAllStudent,
	createStudent,
	getStudent,
	updateStudent,
	deleteStudent
}