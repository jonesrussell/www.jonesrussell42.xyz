import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export interface IContact {
	email: string;
	message: string;
}

const ContactSchema = new Schema<IContact>({
	email: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	}
});

export default mongoose.model<IContact>('Contact', ContactSchema);
