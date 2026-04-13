import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { GitForkIcon } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <p className="font-heading font-black text-lg text-foreground">dominicpam89</p>
          <p className="text-sm text-muted-foreground mt-1">
            Frontend Engineering Lab · {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
            asChild
          >
            <a href="https://github.com/dominicpam89" target="_blank" rel="noopener noreferrer">
              <GitForkIcon className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-xs text-muted-foreground">
            Built with Vite · React 19 · TypeScript
          </span>
        </div>
      </div>
    </footer>
  )
}
