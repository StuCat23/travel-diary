import { notFound } from 'next/navigation';

export default function EntryPage({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) return notFound();

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-2">Entry {id}</h1>
      <p className="text-gray-600">Entry detail content will go here.</p>
    </section>
  );
}