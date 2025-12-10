export type Entry = {
    id: string;
    title: string;
    notes?: string;
    location?: string;
    lat?: number;
    lng?: number;
    date?: string;
    createdAt: string;
};

let entries: Entry[] = [
    {
        id: '1',
        title: 'Trip to Paris',
        notes: 'Visited the Eiffel Tower and Louvre Museum.',
        location: 'Paris, France',
        date: new Date().toISOString(),
        createdAt: new Date().toISOString(),
    },
];

export function getEntries(): Entry[] {
    return entries;
    // return entries.slice().sort((a, b) => new Date(b.createdAt) - +new Date(a.createdAt));
}

export function createEntry(data: Partial<Entry>): Entry {
  const entry: Entry = {
    id: String(Date.now()),
    title: data.title ?? 'Untitled',
    notes: data.notes ?? '',
    location: data.location,
    lat: data.lat ? Number(data.lat) : undefined,
    lng: data.lng ? Number(data.lng) : undefined,
    date: data.date ?? new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
  entries.unshift(entry);
  return entry;
}