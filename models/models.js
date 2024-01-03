const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
	name: {
		type: String
	},
	course: {
		type: String
	},
	phone_number: {
		type: Number
	}
})

const StudentInfo = mongoose.model("StudentInfo", studentSchema)

module.exports = StudentInfo