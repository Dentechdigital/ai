import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const rows = [
  {
    item: 'Starter clinic site (up to 5 pages + booking request)',
    setup: 'Included — no separate build fee',
    after: '—',
  },
  {
    item: 'Hosting & maintenance',
    setup: '$150/mo — included in 6-month retainer from go-live',
    after: '~$150/mo on renewal',
  },
  {
    item: 'Signature Marketing retainer',
    setup: '$2,500/mo for 6 months',
    after: 'Renewal discussed before term ends',
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0e1018]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Transparent</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Pricing summary
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Six months of Signature Marketing at $2,500/mo — starter site included. Exact line items are in your contract.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="bg-[#13161f] border border-[#1e2230] rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-[#1e2230] bg-[#0e1018]">
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Item</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">During retainer</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">After launch</div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.item}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`grid grid-cols-3 gap-4 px-6 py-5 ${i < rows.length - 1 ? 'border-b border-[#1e2230]' : ''}`}
            >
              <div className="text-white text-sm font-medium">{row.item}</div>
              <div className="text-slate-300 text-sm">{row.setup}</div>
              <div className="text-slate-400 text-sm">{row.after}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-slate-500 text-xs mt-6"
        >
          Fees are only binding once you have a written agreement. This page is informational only.
        </motion.p>
      </div>
    </section>
  )
}
