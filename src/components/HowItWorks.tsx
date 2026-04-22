import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClipboardList, Rocket, BarChart2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Apply',
    body: 'Short form + a quick call — we confirm Signature fit and availability.',
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Kickoff',
    body: 'Goals, brand inputs, content — you approve everything before we launch.',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Launch',
    body: 'Site goes live; then six months of Signature execution and monthly reporting.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            How it works
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-transparent via-[#1e2230] to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-24 h-24 rounded-2xl bg-[#13161f] border border-[#1e2230] flex items-center justify-center mb-6 group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15, type: 'spring' }}
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </motion.div>
                  <step.icon size={32} className="text-sky-400" />
                </motion.div>
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-[#13161f] border border-[#1e2230] rounded-xl p-5 text-center text-sm text-slate-400 max-w-2xl mx-auto"
        >
          <span className="text-slate-300 font-medium">Availability:</span> Up to 10 qualifying
          practices in the current window. Application does not guarantee a slot — we confirm fit
          and availability on your call.
        </motion.div>
      </div>
    </section>
  )
}
