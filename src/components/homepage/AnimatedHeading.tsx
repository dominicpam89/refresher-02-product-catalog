import { motion } from 'motion/react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedHeading({ text, className, delay = 0 }: AnimatedHeadingProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <motion.span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}
