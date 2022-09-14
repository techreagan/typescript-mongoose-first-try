import { model, Schema, InferSchemaType } from 'mongoose'

// interface IPost {
//   title: string,
//   body: string,
//   userId: Types.ObjectId
// }

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
})

type Post = InferSchemaType<typeof postSchema>

export default model<Post>('Post', postSchema)
