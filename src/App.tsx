import ThemeToggle from './components/ThemeToggle'
import { Button } from './components/ui/button'
export default function App() {
  return (
    <div className="bg-amber-800 w-full h-full text-rose-300">
      Text
      <Button>Test Button</Button>
      <ThemeToggle />
    </div>
  )
}
