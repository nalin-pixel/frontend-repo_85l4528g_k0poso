import { Instagram, MessageCircle, Mail, Phone, Send, Star } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(`Hey BroThreads! I'm ${name || 'a customer'} and I wanted to ask: ${message}`)}`
  const instagramLink = 'https://instagram.com/'

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Contact & Orders</h2>
            <p className="mt-3 text-white/80">Questions, custom designs, or bulk orders? Reach out and we’ll reply fast.</p>

            <div className="mt-6 space-y-3">
              <a href={whatsappLink} target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 ring-1 ring-white/10 transition">
                <MessageCircle className="h-5 w-5 text-green-400" />
                <span className="font-medium">WhatsApp us</span>
              </a>
              <a href={instagramLink} target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 ring-1 ring-white/10 transition">
                <Instagram className="h-5 w-5 text-pink-400" />
                <span className="font-medium">DM on Instagram</span>
              </a>
            </div>

            <div className="mt-8 text-white/70 text-sm">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@brothreads.co</div>
              <div className="flex items-center gap-2 mt-2"><Phone className="h-4 w-4" /> +1 (555) 010-1234</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-black/5 text-black">
            <h3 className="text-xl font-bold">Send a quick message</h3>
            <p className="text-gray-600 text-sm mt-1">We’ll reach back within 24 hours.</p>
            <form className="mt-4 space-y-3" onSubmit={(e)=>{e.preventDefault(); window.open(whatsappLink, '_blank')}}>
              <div>
                <label className="text-sm font-medium text-gray-700">Your name</label>
                <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500" placeholder="e.g., Ali" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500" placeholder="I’m interested in a custom gamer tee with my tag..." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-600 transition">
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
