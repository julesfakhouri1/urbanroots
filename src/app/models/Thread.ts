import mongoose, { Schema, Document } from 'mongoose';

export interface IThread extends Document {
  title: string;
  content: string;
  author: string;
  category: mongoose.Types.ObjectId;
  createdAt: Date;
  comments: Array<{
    content: string;
    author: string;
    createdAt: Date;
  }>;
}

const ThreadSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [{
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }]
});

export default mongoose.models.Thread || mongoose.model<IThread>('Thread', ThreadSchema);
