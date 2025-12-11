import { NextResponse } from 'next/server';
import { getEntry, deleteEntry } from '../../../lib/entries';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const entry = await getEntry(id);
  if (!entry) return new NextResponse(null, { status: 404 });
  return NextResponse.json(entry);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const deleted = await deleteEntry(id);
    return NextResponse.json(deleted);
  } catch (err) {
    return new NextResponse(null, { status: 500 });
  }
}
