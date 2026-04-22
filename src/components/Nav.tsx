import { motion, useScroll, useTransform } from 'framer-motion'

export default function Nav() {
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ['rgba(8,9,15,0)', 'rgba(8,9,15,0.95)'])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <motion.nav
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-[#1e2230]"
      />
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-white text-lg tracking-tight">
          Dentech <span className="text-sky-400">Digital</span>
        </span>
        <a
          href="#apply"
          className="text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Check eligibility
        </a>
      </div>
    </motion.nav>
  )
}
