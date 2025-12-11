// ...existing code...
import Image from "next/image";
import Link from "next/link";

const sampleTrips = [
  {
    title: "Santorini Sunset",
    location: "Greece",
    // image:
    //   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f1d44f8dfc9dfa7321935f6da8b9f5b",
  },
  {
    title: "Tokyo Nights",
    location: "Japan",
    // image:
    //   "https://images.unsplash.com/photo-1526481280698-ef0b8cbb1a5d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9aa5a0d99aebf9445f390bce17a0e982",
  },
  {
    title: "Icelandic Blue",
    location: "Iceland",
    // image:
    //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=40a7d2e3e9be7a41bb6d898e5d2bf44a",
  },
  {
    title: "Cafe in Paris",
    location: "France",
    // image:
    //   "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=bf2487cea5a3afceb8b28a3685f6c8d4",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 rounded-lg">
      {/* <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-indigo-600">✈️</span>
          Travel Diary
        </Link>

        <nav className="hidden sm:flex items-center gap-4 text-sm">
          <Link href="#" className="text-slate-600 hover:text-slate-900 font-medium">
            Home
          </Link>
          <Link href="#" className="text-slate-600 hover:text-slate-900 font-medium">
            Trips
          </Link>
          <Link href="#" className="text-slate-600 hover:text-slate-900 font-medium">
            About
          </Link>
          <Link href="#" className="px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm hover:bg-indigo-700">
            New Entry
          </Link>
        </nav>

        <div className="sm:hidden">
          <Link href="#" className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-sm">
            Menu
          </Link>
        </div>
      </header> */}

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
              Capture journeys, not just destinations.
            </h1>
            <p className="mt-4 text-slate-600 max-w-xl">
              Journal your travel memories, plan upcoming trips, and discover ideas for your next
              adventure. Store notes, photos and route ideas in one beautiful place.
            </p>
            <div className="flex gap-3 mt-6">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow hover:from-indigo-700"
              >
                Explore Trips
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:bg-slate-50"
              >
                New Entry
              </Link>
            </div>

            <div className="mt-6 flex gap-6">
              <div className="text-sm">
                <div className="text-slate-800 font-bold">120+</div>
                <div className="text-slate-500">Trips logged</div>
              </div>
              <div className="text-sm">
                <div className="text-slate-800 font-bold">30k</div>
                <div className="text-slate-500">Photos</div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            {/* <Image
              // src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1657a6d222a5e0b3e3c9c9b3b5c04d8f"
              alt="Travel header"
              fill
              className="object-cover"
              priority
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Recent Memories</h2>
          <p className="text-slate-500 mt-2">Last few trips you recorded</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {sampleTrips.map((trip) => (
              <article
                key={trip.title}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition"
              >
                <div className="relative w-full h-44">
                  {/* <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  /> */}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{trip.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{trip.location}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Link href="#" className="text-indigo-600 font-medium text-sm">
                      View entry →
                    </Link>
                    <span className="text-xs text-slate-400">3 photos</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}