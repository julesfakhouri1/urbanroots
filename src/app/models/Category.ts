import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
});

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
