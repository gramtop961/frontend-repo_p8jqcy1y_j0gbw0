import { motion } from 'framer-motion'

export default function TournamentCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_1px_1px_rgba(255,255,255,0.06)]"
    >
      {item.banner_url && (
        <img src={item.banner_url} alt={item.title} className="h-44 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
      )}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          {item.featured && (
            <span className="rounded-full bg-gradient-to-r from-[#3A0CA3]/70 to-[#4361EE]/70 px-3 py-1 text-xs text-white">Featured</span>
          )}
        </div>
        <p className="mt-1 text-white/70 text-sm">{item.game} • {item.mode}</p>
        {item.description && (
          <p className="mt-3 text-white/80 text-sm line-clamp-2">{item.description}</p>
        )}
        <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/80">
          <div className="rounded-lg bg-white/5 px-3 py-2">Entry: ₹{item.entry_fee_inr}</div>
          <div className="rounded-lg bg-white/5 px-3 py-2">Prize: ₹{item.prize_pool_inr}</div>
          <div className="rounded-lg bg-white/5 px-3 py-2">Slots: {item.slots}</div>
        </div>
      </div>
    </motion.div>
  )
}
