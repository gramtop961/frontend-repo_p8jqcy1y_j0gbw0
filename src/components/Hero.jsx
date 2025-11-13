import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#3A0CA3]/40 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#4361EE]/30 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60">
          <div className="h-[900px] w-[900px] rounded-full bg-[#C77DFF]/10 blur-[160px]" />
        </div>
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold text-white/80 backdrop-blur-xl">
            Premium Esports Management
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Build. Host. Dominate.
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl">
            Elite tournament operations for Valorant, BGMI, CS2 and more. From registrations to live ops — crafted for scale and spectacle.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#register"
              className="rounded-xl bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#C77DFF] px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-12px_rgba(67,97,238,0.8)]"
            >
              Get Started
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#tournaments"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white/90 backdrop-blur-xl"
            >
              View Tournaments
            </motion.a>
          </div>
        </motion.div>

        <div className="pointer-events-none" />
      </div>
    </section>
  )
}
