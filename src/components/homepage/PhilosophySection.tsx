import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { fadeUp } from '@/lib/homepage'

const tags = [
  'TypeScript-first',
  'Accessible',
  'Performance-aware',
  'Maintainable',
  'Real-world patterns',
]

export function PhilosophySection() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          04 — Process
        </motion.span>

        <motion.blockquote
          className="font-heading font-black text-[clamp(1.75rem,4.5vw,3.25rem)] leading-tight text-foreground mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
        >
          "Don't just use the tool.{' '}
          <span className="text-primary">Understand what problem it solves</span> and what it costs
          you to use it."
        </motion.blockquote>

        <motion.p
          className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={2}
        >
          Every dependency in this project was evaluated through a single lens: complexity cost vs.
          value delivered. That's why TanStack Query over raw fetch. Zustand over Redux. shadcn over
          a component library you can't escape. The architecture reflects the economics of
          maintainability.
        </motion.p>

        <motion.div
          className="flex justify-center gap-2 mt-12 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-border text-muted-foreground text-xs px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
