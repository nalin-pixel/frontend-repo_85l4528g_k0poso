import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-['Inter',_system-ui] bg-white text-gray-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 ring-1 ring-black/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold">BT</span>
            <span className="font-extrabold tracking-tight">BroThreads</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 font-medium">
            <a href="#shop" className="hover:text-orange-600">Shop</a>
            <a href="#about" className="hover:text-orange-600">About</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </nav>
          <a href="#shop" className="px-3 py-1.5 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-600">Shop Now</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Products />
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
