import {
  HeroSection,
  StackSection,
  ProjectSection,
  PhilosophySection,
  FooterSection,
} from '@/components/homepage'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <StackSection />
      <ProjectSection />
      <PhilosophySection />
      <FooterSection />
    </div>
  )
}
