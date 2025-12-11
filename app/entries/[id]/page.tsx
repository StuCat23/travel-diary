import { notFound } from 'next/navigation';
import { getEntry } from '../../lib/entries';

export default async function EntryPage({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) return notFound();

  const entry = await getEntry(id);
  if (!entry) return notFound();

  const when = entry.date ? new Date(entry.date).toLocaleDateString() : '—';

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-2">{entry.title}</h1>
      <p className="text-sm text-gray-500">{when} {entry.location ? `• ${entry.location}` : ''}</p>
      {entry.notes ? <p className="mt-4 text-gray-700 whitespace-pre-wrap">{entry.notes}</p> : null}
    </section>
  );
}