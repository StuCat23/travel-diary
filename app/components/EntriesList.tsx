'use client';
import { useEffect, useState } from 'react';
import EntryCard from './EntryCard';
import type { Entry } from '../lib/entries';

export default function EntriesList({ initialEntries }: { initialEntries: Entry[] }) {
  const [entries, setEntries] = useState<Entry[]>(initialEntries || []);

  async function refresh() {
    const res = await fetch('/api/entries');
    if (!res.ok) return;
    const next = await res.json();
    setEntries(next);
  }

  useEffect(() => {
    setEntries(initialEntries || []);
  }, [initialEntries]);

  useEffect(() => {
    const handler = () => refresh();
    window.addEventListener('entries:created', handler);
    return () => window.removeEventListener('entries:created', handler);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Entries</h2>
        <button onClick={refresh} className="text-sm text-blue-600">Refresh</button>
      </div>

      {entries.length === 0 ? (
        <p className="text-gray-500">No entries yet — add one to get started.</p>
      ) : (
        <ul className="grid gap-4">
          {entries.map((e) => (
            <li key={e.id}><EntryCard entry={e} /></li>
          ))}
        </ul>
      )}
    </div>
  );
}