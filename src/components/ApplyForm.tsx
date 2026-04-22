import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send } from 'lucide-react'

const startOptions = [
  'Already open',
  'Opening in 1–3 months',
  'Opening in 3–6 months',
  'Opening in 6+ months',
  'Prefer to discuss',
]

const budgetOptions = [
  'Under $1,500/mo',
  '$1,500–$2,000/mo',
  'Signature: ~$2,500/mo',
  'Elite / custom — prefer to discuss',
]

export default function ApplyForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="apply" ref={ref} className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Apply</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Check eligibility
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Short form — we confirm Signature fit and next steps on your call. Fees are only binding once you have a written agreement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="bg-[#13161f] border border-[#1e2230] rounded-2xl p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-sky-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Request received</h3>
              <p className="text-slate-400 text-sm">
                We'll be in touch to confirm fit and next steps. Submitting this form does not reserve a slot.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Full name" type="text" placeholder="Dr. Jane Smith" required />
                <Field label="Practice name" type="text" placeholder="Smith Family Dental" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="City / region" type="text" placeholder="Ottawa, ON" required />
                <Field label="Work email" type="email" placeholder="jane@smithdental.ca" required />
              </div>
              <Field label="Phone" type="tel" placeholder="(613) 000-0000" required />

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Start timeline <span className="text-sky-400">*</span>
                </label>
                <select
                  required
                  className="w-full bg-[#0e1018] border border-[#1e2230] text-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="">Select…</option>
                  {startOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Monthly marketing budget <span className="text-sky-400">*</span>
                </label>
                <select
                  required
                  className="w-full bg-[#0e1018] border border-[#1e2230] text-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="">Select…</option>
                  {budgetOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              <textarea
                rows={3}
                placeholder="Anything else you'd like us to know (optional)"
                className="w-full bg-[#0e1018] border border-[#1e2230] text-slate-300 placeholder-slate-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
              />

              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`mt-0.5 w-4 h-4 flex-shrink-0 rounded border transition-colors ${
                    agreed ? 'bg-sky-500 border-sky-500' : 'border-[#1e2230] bg-[#0e1018]'
                  }`}
                />
                <span className="text-xs text-slate-400 leading-relaxed">
                  I agree to be contacted about this offer and understand final terms are set in a written agreement. I have reviewed the privacy practices on the main Dentech site.
                </span>
              </label>

              <motion.button
                type="submit"
                disabled={!agreed}
                whileHover={agreed ? { scale: 1.02 } : {}}
                whileTap={agreed ? { scale: 0.98 } : {}}
                className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors duration-200"
              >
                <Send size={16} />
                Submit eligibility request
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm mb-4 font-medium">Prefer to talk first?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a href="tel:+16138693121" className="text-sky-400 hover:underline font-medium">
              (613) 869-3121
            </a>
            <span className="text-slate-600 hidden sm:block">·</span>
            <a href="mailto:hello@dentech.digital" className="text-sky-400 hover:underline font-medium">
              hello@dentech.digital
            </a>
          </div>
          <p className="text-slate-600 text-xs mt-2">Mon – Fri, 9:00 AM – 6:00 PM ET</p>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, type, placeholder, required }: { label: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">
        {label} {required && <span className="text-sky-400">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[#0e1018] border border-[#1e2230] text-slate-300 placeholder-slate-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors"
      />
    </div>
  )
}
