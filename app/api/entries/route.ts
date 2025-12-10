import { NextResponse } from 'next/server';
import { getEntries, createEntry } from '../../lib/entries';

export async function GET() {
  const items = getEntries();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const body = await request.json();
  const entry = createEntry(body);
  return NextResponse.json(entry, { status: 201 });
}