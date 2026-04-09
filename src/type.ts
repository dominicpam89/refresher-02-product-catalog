import type { PropsWithChildren } from "react"

export type Theme = "dark" | "light" | "system"
export type ThemeProviderProps =  PropsWithChildren & {
    defaultTheme?: Theme
    storageKey: string
}
export type ThemeState = {
    theme: Theme
    changeTheme: (t:Theme)=>void
}