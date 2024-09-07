import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Thread from '@/app/models/Thread';

export async function GET() {
  await dbConnect();

  try {
    const threads = await Thread.find({}).populate('category').sort({ createdAt: -1 });
    return NextResponse.json(threads);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la récupération des threads' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const body = await request.json();
    const thread = new Thread(body);
    await thread.save();
    return NextResponse.json(thread, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la création du thread' }, { status: 400 });
  }
}
