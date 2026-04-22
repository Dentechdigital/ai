import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles size={14} />
          New clinic offer · Limited to 10 practices
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          We'll Build Your{' '}
          <span className="relative inline-block">
            <span className="text-sky-400">$3,000 Website</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-400/40 origin-left"
            />
          </span>{' '}
          for Free
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A professional starter site bundled in — no separate build fee — when you commit to
          six months of{' '}
          <span className="text-white font-medium">Signature Marketing at $2,500/mo</span>.
          You're paying for patients, not a one-off build.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-sky-500/20"
          >
            Check eligibility
          </motion.a>
          <motion.a
            href="#offer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors duration-200"
          >
            See the offer
          </motion.a>
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 text-sm text-slate-500"
        >
          Built for new practices that need to look established online on day one.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
