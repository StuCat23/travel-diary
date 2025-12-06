import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white border-b shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-semibold">Travel Diary</Link>
                <nav className="flex gap-4">
                    <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">Dashboard</Link>
                    <Link href="/entries" className="text-sm text-gray-600 hover:text-gray-900">Entries</Link>
                    <Link href="/entries/new" className="text-sm text-blue-600 hover:underline">New</Link>
                </nav>
            </div>
        </header>
    );
}