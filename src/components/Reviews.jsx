import { Star } from 'lucide-react'

const reviews = [
  { id: 1, name: 'Hamza', text: 'Quality is fire. The print still looks new after many washes.', rating: 5 },
  { id: 2, name: 'Aisha', text: 'The hoodie is cozy and the fit is perfect. Love the minimal aesthetic.', rating: 5 },
  { id: 3, name: 'Umer', text: 'Ordered a custom gamer tag tee — came out super clean!', rating: 4 },
]

function Stars({ count }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < count ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`} />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Bros Are Saying</h2>
            <p className="text-gray-600 mt-2">Real feedback from the BroThreads family.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.id} className="rounded-2xl p-6 bg-orange-50 ring-1 ring-orange-100">
              <Stars count={r.rating} />
              <p className="mt-3 text-gray-800">“{r.text}”</p>
              <div className="mt-4 text-sm font-semibold text-gray-900">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
