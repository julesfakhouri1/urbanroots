import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../lib/mongodb';
import Event from '../../models/Event';

export async function GET() {
  await dbConnect();
  const events = await Event.find({});
  return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
  await dbConnect();
  const { title, description, start, end, createdBy } = await request.json();
  const newEvent = new Event({ title, description, start, end, createdBy });
  await newEvent.save();
  return NextResponse.json(newEvent, { status: 201 });
}