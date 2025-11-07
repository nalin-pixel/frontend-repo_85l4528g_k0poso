export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" alt="BroThreads" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">About BroThreads</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              BroThreads began as a passion project between two brothers, <span className="font-semibold">Baqir</span> and <span className="font-semibold">Shahzaib</span>. What started with a single sketch turned into a bold clothing brand built for community, creativity, and brotherhood. From casual fits to gaming-inspired designs and custom pieces, we craft shirts that speak your style with premium fabrics and fearless energy.
            </p>
            <p className="mt-4 text-gray-700">
              Every drop is limited, every print is sharp, and every order is made with care. Our mission is simple: make shirts you’ll actually want to wear—again and again.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-2.5 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition">Contact Us</a>
              <a href="#shop" className="px-5 py-2.5 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-600 transition">Shop Collection</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
