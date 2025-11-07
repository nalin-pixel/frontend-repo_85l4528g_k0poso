import { ShoppingBag } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{background:"radial-gradient(circle at 20% 10%, rgba(255,165,0,0.25), transparent 40%), radial-gradient(circle at 80% 50%, rgba(255,165,0,0.15), transparent 35%)"}} />
      <div className="container mx-auto px-4 pt-24 pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 mb-6">
            <ShoppingBag className="h-5 w-5 text-orange-400" />
            <span className="text-sm tracking-wide text-white/80">BroThreads — The Brothers' Shirt Co.</span>
          </div>
          <div className="mx-auto mb-6 w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-400 font-extrabold text-3xl">
            BT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Threads for Every Bro
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Casual. Gaming. Aesthetic. Custom. Built by brothers Baqir & Shahzaib for the bros who wear their vibe.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#shop" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition text-black font-semibold shadow-lg shadow-orange-500/20">
              Shop Now
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white font-semibold">
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
