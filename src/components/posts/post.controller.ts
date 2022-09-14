import { Request, Response } from 'express'
import { IUser } from '../users/user.model'
import Post from './post.model'

export const createPost = async (req: Request, res: Response) => {
	const post = await Post.create(req.body)

	res.status(201).json({ success: true, data: post })
}

export const getPosts = async (_: Request, res: Response) => {
	const posts = await Post.find().populate<{ userId: IUser }>('userId')

	posts.forEach((post) => {
		console.log(post.userId.name)
	})

	res.json({ success: true, data: posts })
}
