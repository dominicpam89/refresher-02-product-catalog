import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { GitForkIcon, ArrowUpRight } from 'lucide-react'
import { AnimatedHeading } from './AnimatedHeading'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, -60])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-150 h-150 rounded-full"
          style={{
            background:
              'radial-gradient(circle, oklch(0.514 0.222 16.935 / 0.08) 0%, transparent 70%)',
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-px bg-border"
          initial={{ height: 0 }}
          animate={{ height: '40%' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <motion.div style={{ opacity: heroOpacity, y: heroY }}>
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-px bg-primary" />
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-sans">
            Frontend Engineering Lab - Refresher Project 2
          </span>
        </motion.div>

        {/* Main heading */}
        <h1 className="font-heading font-black leading-[0.92] tracking-tight mb-6">
          <div className="text-[clamp(3rem,10vw,7.5rem)] text-foreground">
            <AnimatedHeading text="Learning" delay={0.1} />
          </div>
          <div className="text-[clamp(3rem,10vw,7.5rem)]">
            <AnimatedHeading text="by" delay={0.2} />
            <span className="text-primary ml-[0.2em]">
              <AnimatedHeading text="building." delay={0.25} />
            </span>
          </div>
        </h1>

        {/* Subheading */}
        <motion.p
          className="text-[clamp(1rem,2.5vw,1.35rem)] text-muted-foreground max-w-2xl leading-relaxed font-sans mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          A deliberate reentry into modern frontend. Rebuilding instincts through a real e-commerce
          product catalog. Every dependency chosen with intent. Every pattern understood before it
          ships.
        </motion.p>

        {/* Author + CTA */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-heading font-black text-sm">D</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-none mb-0.5">
                dominicpam89
              </p>
              <p className="text-xs text-muted-foreground">Solopreneur · Full-Stack Dev</p>
            </div>
          </div>
          <Separator orientation="vertical" className="h-8 hidden sm:block" />
          <Button
            variant="outline"
            className="gap-2 border-primary/30 hover:border-primary hover:text-primary transition-colors"
            asChild
          >
            <a href="https://github.com/dominicpam89" target="_blank" rel="noopener noreferrer">
              <GitForkIcon className="w-4 h-4" />
              View on GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <motion.div
          className="w-px h-10 bg-linear-to-b from-primary to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
