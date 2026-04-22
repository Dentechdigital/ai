import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, TrendingUp, Shield } from 'lucide-react'

const cards = [
  {
    icon: Globe,
    title: 'No separate site build fee',
    body: 'Your 5-page starter site is bundled into the retainer — not a separate invoice.',
    color: 'sky',
  },
  {
    icon: TrendingUp,
    title: 'Signature Marketing',
    body: 'PPC, SEO, authority placements, and monthly strategy sessions at $2,500/mo.',
    color: 'amber',
  },
  {
    icon: Shield,
    title: 'Limited enrollment',
    body: 'Up to 10 qualifying practices this window — we protect launch quality with capped onboarding.',
    color: 'emerald',
  },
]

const colorMap: Record<string, string> = {
  sky: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
}

export default function Offer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="offer" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">The offer</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            What's included
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            For new dental practices that need to look established online from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#13161f] border border-[#1e2230] rounded-2xl p-8 group"
            >
              <div className={`inline-flex p-3 rounded-xl border mb-5 ${colorMap[card.color]}`}>
                <card.icon size={22} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
