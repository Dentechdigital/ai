import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2230] py-12 px-6 bg-[#08090f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-bold text-white text-lg mb-2">
              Dentech <span className="text-sky-400">Digital</span>
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ottawa-based dental growth partner — websites, SEO/GEO, paid media, and reputation systems.
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Links</p>
            <ul className="space-y-2">
              {[
                { label: 'Main website', href: 'https://dentechdigital.ca' },
                { label: 'Services', href: 'https://dentechdigital.ca/services' },
                { label: 'Contact', href: 'https://dentechdigital.ca/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Where we work</p>
            <p className="text-slate-500 text-sm">
              Ottawa HQ, clinics across Canada; select international fits by agreement.
            </p>
            <p className="text-slate-600 text-xs mt-3">499 Preston St, Ottawa, ON</p>
            <p className="text-slate-600 text-xs">Hybrid team — meetings by appointment</p>
          </div>
        </div>

        <div className="border-t border-[#1e2230] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © 2026 Dentech Digital. Offer details and fees are confirmed in writing before engagement. This page is informational only and not a binding quote.
          </p>
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="text-xs font-semibold bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-400 px-4 py-2 rounded-lg transition-colors"
          >
            Check eligibility →
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
