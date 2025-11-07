import { Instagram, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-black font-extrabold">BT</div>
          <p className="mt-3 text-sm text-white/70">© {new Date().getFullYear()} BroThreads. All rights reserved.</p>
        </div>
        <nav className="flex justify-center gap-6 text-sm">
          <a href="#shop" className="hover:text-orange-400">Shop</a>
          <a href="#about" className="hover:text-orange-400">About</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </nav>
        <div className="flex justify-end gap-3">
          <a href="https://instagram.com/" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Instagram className="h-5 w-5" /></a>
          <a href="https://wa.me/" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><MessageCircle className="h-5 w-5" /></a>
          <a href="mailto:hello@brothreads.co" className="p-2 rounded-lg bg-white/10 hover:bg.white/20"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  )
}
