import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const logos = [
  'The Smile Doctors',
  'Riverside Orthodontics',
  'Luminara Dental',
  'Kanata Family Dentistry',
  'Dentistry @ Kanata',
]

const testimonials = [
  {
    quote:
      'Working with Dentech has been one of the best business decisions we made. Their team is proactive, clear, and consistently focused on real growth.',
    name: 'Dr. Nazneen Sadikot',
    practice: 'The Smile Doctors',
    initials: 'NS',
    color: 'from-sky-500 to-blue-600',
  },
  {
    quote:
      'From day one, their team showed care, clarity, and strong business judgment. We trust them fully and value the relationship tremendously.',
    name: 'Dr. Rasha Al-Taweel',
    practice: 'Luminara Dental',
    initials: 'RA',
    color: 'from-amber-500 to-orange-600',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Partners</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
            Same proof as on dentechdigital.ca
          </h2>

          {/* Logo ticker */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {logos.map((logo, i) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="text-xs text-slate-400 font-medium bg-[#13161f] border border-[#1e2230] px-4 py-2 rounded-full"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#13161f] border border-[#1e2230] rounded-2xl p-8 relative overflow-hidden"
            >
              <Quote size={40} className="absolute top-6 right-6 text-white/5" />
              <p className="text-slate-300 text-base leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.practice}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
