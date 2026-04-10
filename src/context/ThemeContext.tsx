import { createContext, useEffect, useMemo } from 'react'
import type { Theme, ThemeState, ThemeProviderProps } from '@/type'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const ThemeContext = createContext<ThemeState>({
  theme: 'system',
  changeTheme: (t: Theme) => {
    t
  },
})

const STORAGE_KEY = 'ui-theme'
const DARK_CLASS = 'dark'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
}

export default function ThemeContextProvider({
  storageKey = STORAGE_KEY,
  children,
  defaultTheme,
}: ThemeProviderProps) {
  const { storedVal: theme, setValue: changeTheme } = useLocalStorage<Theme>(
    storageKey,
    defaultTheme || 'dark'
  )
  const resolvedTheme = useMemo(() => {
    return theme === 'system' ? getSystemTheme() : theme
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    if (resolvedTheme === 'dark') {
      root.classList.add(DARK_CLASS)
    } else {
      root.classList.remove(DARK_CLASS)
    }
  }, [resolvedTheme])

  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const root = document.documentElement
      mq.matches ? root.classList.add(DARK_CLASS) : root.classList.remove(DARK_CLASS)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const value = useMemo(() => ({ theme, changeTheme }), [theme, changeTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
