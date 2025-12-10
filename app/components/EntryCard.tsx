import Link from 'next/link';
import type { Entry } from '../lib/entries';

export default function EntryCard({ entry }: { entry: Entry }) {
  const when = entry.date ? new Date(entry.date).toLocaleDateString() : '—';
  return (
    <article className="p-4 bg-white rounded shadow border">
      <Link href={`/entries/${entry.id}`} className="block">
        <h3 className="text-lg font-semibold">{entry.title}</h3>
        <p className="text-sm text-gray-500">{when} {entry.location ? `• ${entry.location}` : ''}</p>
        {entry.notes ? <p className="mt-2 text-gray-700 line-clamp-3">{entry.notes}</p> : null}
      </Link>
    </article>
  );
}