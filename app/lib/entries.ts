import { prisma } from './prisma';
import type { Entry as PrismaEntry } from '@prisma/client';

export type Entry = {
  id: string;
  title: string;
  notes?: string | null;
  location?: string | null;
  lat?: number | null;
  lng?: number | null;
  date?: string | null;
  createdAt: string;
};

function mapPrismaToEntry(e: PrismaEntry): Entry {
  return {
    id: e.id,
    title: e.title,
    notes: e.notes,
    location: e.location,
    lat: e.lat,
    lng: e.lng,
    date: e.date ? e.date.toISOString() : null,
    createdAt: e.createdAt.toISOString(),
  };
}

export async function getEntries(): Promise<Entry[]> {
  const rows = await prisma.entry.findMany({ orderBy: { createdAt: 'desc' } });
  return rows.map(mapPrismaToEntry);
}

export async function createEntry(data: Partial<Entry>): Promise<Entry> {
  const created = await prisma.entry.create({
    data: {
      title: data.title ?? 'Untitled',
      notes: data.notes ?? null,
      location: data.location ?? null,
      lat: data.lat ?? null,
      lng: data.lng ?? null,
      date: data.date ? new Date(data.date) : null,
    },
  });
  return mapPrismaToEntry(created);
}

export async function getEntry(id: string): Promise<Entry | null> {
  const row = await prisma.entry.findUnique({ where: { id } });
  if (!row) return null;
  return mapPrismaToEntry(row);
}

export async function deleteEntry(id: string): Promise<Entry | null> {
  const deleted = await prisma.entry.delete({ where: { id } });
  return mapPrismaToEntry(deleted);
}