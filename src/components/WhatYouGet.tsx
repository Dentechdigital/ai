import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const siteFeatures = [
  'Up to 5 pages (Home, About, Team, Services, Contact)',
  'Appointment / callback request on contact',
  'Mobile-first, fast-loading',
  'Single-language (English)',
  'Hosted, updated, and maintained by us',
]

const marketingFeatures = [
  'Everything in Starter Marketing',
  'PPC campaign creation and management',
  'Expanded SEO with deeper keyword strategy',
  'Authority-building placements and content',
  'Monthly strategy and optimization sessions',
]

function FeatureList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
          <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${color}`}>
            <Check size={12} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function WhatYouGet() {
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
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Deliverables</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            What you get
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="bg-[#13161f] border border-[#1e2230] rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <h3 className="text-white font-bold text-lg">Starter Site</h3>
              <span className="ml-auto text-xs text-sky-400 bg-sky-400/10 border border-sky-400/20 px-2.5 py-1 rounded-full font-medium">
                Included
              </span>
            </div>
            <FeatureList items={siteFeatures} color="bg-sky-400/15 text-sky-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="bg-[#13161f] border border-amber-400/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <h3 className="text-white font-bold text-lg">Signature Marketing</h3>
              <span className="ml-auto text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full font-medium">
                $2,500/mo
              </span>
            </div>
            <FeatureList items={marketingFeatures} color="bg-amber-400/15 text-amber-400" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Need Starter, Elite, or custom scope?{' '}
          <a href="https://dentechdigital.ca" className="text-sky-400 hover:underline">
            Contact us on the main site
          </a>{' '}
          — this page is Signature-only.
        </motion.p>
      </div>
    </section>
  )
}
