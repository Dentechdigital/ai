import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Why is there a monthly fee if the website is included?',
    a: 'The site build is bundled into your six-month Signature retainer — not a separate invoice. Hosting, backups, updates, and reasonable maintenance are included at $150/mo for the full six-month term from go-live.',
  },
  {
    q: 'Is this offer only for Signature at $2,500/mo?',
    a: 'Yes — this landing page is exclusively for the Signature bundle. Other tiers (Starter, Elite, or custom scope) are available on the main site but are not bundled here.',
  },
  {
    q: 'We are not open yet — can we start? What about content?',
    a: 'Yes. We work with pre-launch clinics regularly. We stage the site and sequence the build around your opening timeline. For content, we guide you through what we need — you don't need to show up with a copywriter.',
  },
  {
    q: 'How is this different from Wix or a template?',
    a: 'Custom design, our hosting stack, hands-on maintenance, and a marketing team behind it — not a DIY platform. You're not managing hosting, updates, or plugins. We are.',
  },
  {
    q: 'What happens after six months? Who owns the site?',
    a: 'You do. After the initial term, hosting continues monthly per your renewal agreement (typically $150/mo). Marketing is discussed before renewal — you're never locked in without a conversation.',
  },
]

function FAQItem({ faq, index, inView }: { faq: typeof faqs[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-[#1e2230] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-white font-medium text-sm group-hover:text-sky-400 transition-colors">
          {faq.q}
        </span>
        <span className="flex-shrink-0 text-slate-500 group-hover:text-sky-400 transition-colors">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0e1018]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Short answers
          </h2>
          <p className="text-slate-500 text-sm mt-3">Final terms are in your agreement.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#13161f] border border-[#1e2230] rounded-2xl px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} inView={inView} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-6"
        >
          Custom build or integrations?{' '}
          <a href="https://dentechdigital.ca" className="text-sky-400 hover:underline">
            Main site contact.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
