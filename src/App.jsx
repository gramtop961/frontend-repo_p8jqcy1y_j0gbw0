import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import TournamentCard from './components/TournamentCard'
import { motion } from 'framer-motion'

function App() {
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/tournaments`)
        if (res.ok) {
          const data = await res.json()
          setTournaments(data)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const [form, setForm] = useState({ name: '', email: '', role: 'player', team_name: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) setStatus('success')
      else setStatus(data?.detail || 'error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      <Navbar />
      <Hero />

      <Section id="about" eyebrow="About Us" title="Royal, Futuristic, Competitive">
        <div className="grid md:grid-cols-3 gap-6">
          {["White-glove tournament ops","Broadcast & production","Brand-safe, scalable tech"].map((t,i)=> (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-white/70 text-sm">We handle brackets, registrations, anti-cheat, payouts, and live ops with precision.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="tournaments" eyebrow="Tournaments" title="Upcoming & Past">
        {loading ? (
          <p className="text-white/70">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((t) => (
              <TournamentCard key={t.id} item={t} />
            ))}
          </div>
        )}
      </Section>

      <Section id="register" eyebrow="Join / Register" title="For Players and Organizers">
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your Name" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#4361EE]/50 backdrop-blur-xl" />
            <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#4361EE]/50 backdrop-blur-xl" />
          </div>
          <select value={form.role} onChange={(e)=>setForm({...form,role:e.target.value})} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#C77DFF]/50 backdrop-blur-xl">
            <option value="player">Player</option>
            <option value="organizer">Organizer</option>
          </select>
          <input value={form.team_name} onChange={(e)=>setForm({...form,team_name:e.target.value})} placeholder="Team Name (optional)" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C77DFF]/50 backdrop-blur-xl" />
          <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Message" rows={4} className="md:col-span-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#3A0CA3]/50 backdrop-blur-xl" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="md:col-span-2 rounded-xl bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#C77DFF] px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-12px_rgba(67,97,238,0.8)]">
            {status === 'loading' ? 'Submitting...' : 'Submit'}
          </motion.button>
          {status && status !== 'loading' && (
            <p className={`md:col-span-2 text-sm ${status==='success' ? 'text-emerald-400' : 'text-red-400'}`}>
              {status==='success' ? 'Registration received! We will reach out soon.' : String(status)}
            </p>
          )}
        </form>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s talk ops, broadcast, or brand activations">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-white/80">Email: hello@royalarena.gg</p>
            <p className="text-white/80 mt-2">X / Twitter: @royalarena</p>
            <p className="text-white/80 mt-2">Discord: discord.gg/royalarena</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-white/70 text-sm">We operate pan-India with global partners for production and anti-cheat. For custom events, media rights or white-label platforms, say hi.</p>
          </div>
        </div>
      </Section>

      <footer className="mt-10 border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Royal Arena. All rights reserved.
      </footer>
    </div>
  )
}

export default App
