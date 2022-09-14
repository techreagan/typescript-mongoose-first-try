import { Model, Schema, model } from 'mongoose'

export interface IUser {
	name: string
	email: string
	role?: string
}

interface IUserMethods {
	getFullDetails(): string
}

type UserModel = Model<IUser, {}, IUserMethods>

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

userSchema.virtual('posts', {
	ref: 'Post',
	localField: '_id',
	foreignField: 'userId',
	justOne: false,
})

userSchema.method('getFullDetails', function getFullDetails() {
	return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`
})

export default model<IUser, UserModel>('User', userSchema)
