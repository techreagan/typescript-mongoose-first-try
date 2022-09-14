import mongoose from 'mongoose'

const DBconnection = async () => {
	await mongoose
		.connect(
			'mongodb://localhost:27017,localhost:27027,localhost:27037/user-post?replicaSet=rs0',
			{
				// useNewUrlParser: true,
				// useUnifiedTopology: true,
				// useCreateIndex: true,
				// useFindAndModify: false,
			}
		)
		.then((conn) => {
			console.log(
				`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
			)
		})
		.catch((err) => {
			console.log(`For some reasons we couldn't connect to the DB`.red, err)
		})
}

export default DBconnection
