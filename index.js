require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/route')
const connectDB = require('./db/connect')

const port = process.env.PORT || 3000

app.use(express.json())
app.use('/', router);

const start = async() => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server at http://localhost:${port}`)
		})

	} catch(err) {
		console.log(err)
	}
}

start();
