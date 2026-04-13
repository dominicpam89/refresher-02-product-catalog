import { motion } from 'motion/react'
import { fadeUp } from '@/lib/homepage'

const features = [
  'Infinite scroll with cursor-based pagination',
  'Optimistic cart updates via TanStack Query',
  'Form validation schemas shared across client',
  'Nested routing with layout persistence',
  'Dark / light / system theme with localStorage',
  'Component library with shadcn + Radix primitives',
  'Type-safe API layer end-to-end',
  'Responsive, mobile-first grid layout',
]

export function ProjectSection() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — description */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              03 — The Project
            </span>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <motion.h2
            className="font-heading font-black text-[clamp(2rem,4vw,3rem)] leading-tight mb-6 text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
          >
            A product catalog. <span className="text-primary">A proving ground.</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground leading-relaxed mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={2}
          >
            The e-commerce format isn't accidental — it's one of the most complete testing surfaces
            in frontend. It demands real data fetching patterns, complex state, form validation,
            routing hierarchies, and performance considerations all in one place.
          </motion.p>

          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={3}
          >
            Powered by <span className="text-foreground font-medium">Fake Store API</span> — a safe,
            stable sandbox to run real patterns without backend complexity getting in the way of
            frontend learning.
          </motion.p>
        </div>

        {/* Right — feature list */}
        <div>
          <motion.p
            className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            What's implemented
          </motion.p>
          <ul className="space-y-0">
            {features.map((f, i) => (
              <motion.li
                key={f}
                className="flex items-center gap-4 py-3.5 border-b border-border last:border-0 group"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.4, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {f}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
