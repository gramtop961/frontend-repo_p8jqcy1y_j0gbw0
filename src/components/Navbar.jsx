import { useState } from 'react'
import { Menu, X, Gamepad2, Sparkles } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tournaments', label: 'Tournaments' },
  { href: '#register', label: 'Join' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_1px_1px_rgba(255,255,255,0.06)]">
          <a href="#home" className="flex items-center gap-2 pl-4 py-3">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-[#3A0CA3] to-[#4361EE] text-white shadow-lg shadow-[#3A0CA3]/30">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <div className="font-bold tracking-wide text-white/90">
              Royal Arena
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-3 text-sm text-white/80 hover:text-white transition relative group"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-[#C77DFF]/40 transition" />
              </a>
            ))}
            <a
              href="#register"
              className="ml-2 mr-3 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#C77DFF] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(67,97,238,0.7)] hover:shadow-[0_10px_35px_-8px_rgba(199,125,255,0.8)] transition"
            >
              <Sparkles className="h-4 w-4" /> Join Now
            </a>
          </nav>

          <button
            className="md:hidden p-3 text-white/90"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-4 text-white/90 hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="block px-5 py-4 text-center font-semibold text-white bg-gradient-to-r from-[#3A0CA3]/80 via-[#4361EE]/80 to-[#C77DFF]/80"
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  )
}
