'use client';
import { useState } from 'react';

export default function EntryForm({ onCreated }: { onCreated?: (entry: any) => void }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    const res = await fetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, location, date, notes }),
    });

    if (!res.ok) {
      setLoading(false);
      return;
    }

    const newEntry = await res.json();
    // notify other client components to refresh
    (window as any).dispatchEvent(new CustomEvent('entries:created', { detail: newEntry }));
    onCreated?.(newEntry);

    // clear
    setTitle('');
    setLocation('');
    setDate('');
    setNotes('');
    setLoading(false);
  }

  return (
    <form onSubmit={submitForm} className="bg-white p-4 rounded border shadow-sm space-y-3">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded" required />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className="w-full px-3 py-2 border rounded"></textarea>
      </div>
      <div className="text-right">
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white" disabled={loading}>
          {loading ? 'Saving…' : 'Save entry'}
        </button>
      </div>
    </form>
  );
}