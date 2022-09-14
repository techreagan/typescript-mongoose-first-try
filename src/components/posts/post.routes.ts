import { Router } from 'express'
import { createPost, getPosts } from './post.controller'

const router = Router()

router.route('/').post(createPost).get(getPosts)

export default router
