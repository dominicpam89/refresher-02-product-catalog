import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeContextProvider from '@/context/ThemeContext.tsx'
import QueryClientProviderUI from './lib/queryClient.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProviderUI>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </QueryClientProviderUI>
  </StrictMode>
)
