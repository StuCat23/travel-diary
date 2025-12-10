import EntriesList from '../components/EntriesList';
import EntryForm from '../components/EntryForm';
import { getEntries } from '../lib/entries';

export default function EntriesPage() {
  const entries = getEntries(); // server-side, sync function used by the API too

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold mb-2">Entries</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <EntryForm />
        </div>

        <div>
          <EntriesList initialEntries={entries} />
        </div>
      </div>
    </section>
  );
}