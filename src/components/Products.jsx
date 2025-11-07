import { useEffect, useState } from 'react'
import { Star, Sparkles } from 'lucide-react'

const productsData = [
  { id: 1, name: 'Classic Bro Tee', tag: 'T-shirt', price: 24.99, image: 'https://images.unsplash.com/photo-1648293821694-6a4da72f68ea?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI1MzQ2NzB8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.7 },
  { id: 2, name: 'Midnight Hoodie', tag: 'Hoodie', price: 49.99, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop', rating: 4.8 },
  { id: 3, name: 'Pixel Gamer Tee', tag: 'Gaming', price: 29.99, image: 'https://images.unsplash.com/photo-1629889698401-1f9f02f22b51?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI1MzQ2NzB8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.6 },
  { id: 4, name: 'Aesthetic Mono Tee', tag: 'Aesthetic', price: 27.99, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop', rating: 4.5 },
  { id: 5, name: 'Sunset Gradient Tee', tag: 'New Arrival', price: 31.99, image: 'https://images.unsplash.com/photo-1630441446262-55e54788fa49?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI1MzQ2NzF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.9 },
  { id: 6, name: 'Custom Name Jersey', tag: 'Custom', price: 39.99, image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop', rating: 4.7 },
]

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5 hover:shadow-xl transition">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transform group-hover:scale-105 transition duration-500" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
          <Sparkles className="h-3 w-3 text-orange-400" /> {product.tag}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <Star className="h-4 w-4 text-orange-500 fill-orange-500 mr-1" />
              {product.rating}
            </div>
          </div>
          <div className="font-bold text-gray-900">${product.price.toFixed(2)}</div>
        </div>
        <button className="mt-4 w-full rounded-lg bg-black text-white py-2 font-medium hover:bg-gray-900 transition">Add to Cart</button>
      </div>
    </div>
  )
}

export default function Products() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'T-shirt', 'Hoodie', 'Gaming', 'Aesthetic', 'Custom', 'New Arrival']

  const filtered = productsData.filter(p => (filter === 'All' ? true : p.tag === filter))

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Shop BroThreads</h2>
            <p className="text-gray-600 mt-2">T-shirts, hoodies, and fresh drops designed for your vibe.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm border ${filter===c? 'bg-orange-500 border-orange-500 text-black' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
