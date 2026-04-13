import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Layers, Repeat2, ScrollText, ShoppingBag, Zap, Code2 } from 'lucide-react'
import { fadeUp } from '@/lib/homepage'

const stack = [
  {
    name: 'Vite + React',
    sub: 'TypeScript',
    desc: 'Lightning-fast build tool with React 19 & React Compiler for auto-memoization.',
    icon: Zap,
    color: 'text-yellow-500',
  },
  {
    name: 'TanStack Query',
    sub: 'v5',
    desc: 'Server-state management — caching, background refetch, infinite scroll, optimistic updates.',
    icon: Repeat2,
    color: 'text-primary',
  },
  {
    name: 'React Hook Form',
    sub: '+ Zod',
    desc: 'Performant forms with schema validation. Zero re-renders on keypress.',
    icon: ScrollText,
    color: 'text-emerald-500',
  },
  {
    name: 'React Router',
    sub: 'v7',
    desc: 'Client-side routing with nested layouts, loaders, and typed params.',
    icon: Layers,
    color: 'text-blue-500',
  },
  {
    name: 'shadcn/ui',
    sub: 'Radix + Tailwind v4',
    desc: 'Unstyled, accessible primitives composed into a custom design system.',
    icon: Code2,
    color: 'text-primary',
  },
  {
    name: 'E-Commerce Lab',
    sub: 'Fake Store API',
    desc: 'Infinite scroll catalog, product detail, cart, checkout — real-world patterns on a safe sandbox.',
    icon: ShoppingBag,
    color: 'text-orange-500',
  },
]

export function StackSection() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <motion.div
        className="flex items-center gap-4 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        custom={0}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          02 — The Stack
        </span>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      <motion.h2
        className="font-heading font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4 text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        custom={1}
      >
        Tools chosen with <span className="text-primary">intention.</span>
      </motion.h2>

      <motion.p
        className="text-muted-foreground max-w-xl mb-16 text-base"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        custom={2}
      >
        Not a tutorial stack. Each library represents a real production decision — evaluated for
        complexity cost vs. long-term value.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={i + 3}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start justify-between mb-4">
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <Badge variant="secondary" className="text-[10px] tracking-wide">
                {item.sub}
              </Badge>
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            <motion.div
              className="absolute bottom-0 left-6 right-6 h-px bg-primary"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
