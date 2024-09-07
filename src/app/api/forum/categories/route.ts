import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Category from '../../../models/Category';

export async function GET() {
  await dbConnect();
  try {
    const categories = await Category.find({});
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to fetch categories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const body = await request.json();
    const category = new Category(body);
    await category.save();
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create category' }, { status: 500 });
  }
}
