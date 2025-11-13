import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 -z-[1]">
        <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold text-white/80 backdrop-blur-xl">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{title}</h2>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
