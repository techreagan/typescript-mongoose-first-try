import User from './user.model'
import { Response, Request, RequestHandler } from 'express'

export const getUsers = async (_: Request, res: Response) => {
	const users = await User.find().populate('posts')
	users.forEach((user) => {
		console.log(user.getFullDetails())
	})
	res.json({ success: true, data: users })
}

export const getUser = async (req: Request, res: Response): Promise<any> => {
	const user = await User.findById(req.params.id)

	if (!user)
		return res
			.status(404)
			.json({ success: false, error: `No user with id of ${req.params.id}` })

	res.json({ success: true, data: user })
}

export const createUser: RequestHandler = async (req, res) => {
	const user = await User.create(req.body)

	res.status(201).json({ success: true, data: user })
}

export const updateUser: RequestHandler = async (req, res) => {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})

	res.status(201).json({ success: true, data: user })
}

export const deleteUser: RequestHandler = async (req, res) => {
	const user = await User.findByIdAndDelete(req.params.id)

	res.status(201).json({ success: true, data: user })
}
