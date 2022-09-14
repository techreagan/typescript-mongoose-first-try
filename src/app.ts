import express, { Application, json } from 'express'
import 'colors'
import DBconnection from './config/db'
import userRoutes from './components/users/user.routes'
import postRoutes from './components/posts/post.routes'

const app: Application = express()

DBconnection()

app.use(json())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/posts', postRoutes)

const PORT = 3003

app.listen(PORT, () => {
	console.log('Server is running on PORT', PORT)
})
