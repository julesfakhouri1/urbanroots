import mongoose, { Document, Schema } from 'mongoose';

interface IEvent extends Document {
  title: string;
  description?: string;
  start: Date;
  end: Date;
  createdBy: {
    name: string;
    email: string;
  };
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  createdBy: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
});

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);