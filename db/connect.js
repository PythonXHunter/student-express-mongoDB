const mongoose = require('mongoose')

const connectDB = async(url) => {
	try {
		await mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		});
		console.log('Connected to Mongodb...')
	} catch(err){
		console.log(err)
	}
}

module.exports = connectDB