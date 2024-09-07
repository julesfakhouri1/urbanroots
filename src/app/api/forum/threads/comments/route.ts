import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Thread from '@/app/models/Thread';

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const { threadId, content, author } = await request.json();

    const updatedThread = await Thread.findByIdAndUpdate(
      threadId,
      { 
        $push: { 
          comments: { content, author, createdAt: new Date() } 
        } 
      },
      { new: true, runValidators: true }
    );

    if (!updatedThread) {
      return NextResponse.json(
        { success: false, error: 'Thread not found' },
        { status: 404 }
      );
    }

    const newComment = updatedThread.comments[updatedThread.comments.length - 1];
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}
