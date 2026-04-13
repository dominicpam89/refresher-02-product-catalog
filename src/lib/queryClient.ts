import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'
import { createElement } from 'react'

export const queryClient = new QueryClient()

export default function QueryClientProviderUI({ children }: PropsWithChildren) {
  return createElement(QueryClientProvider, { client: queryClient }, children)
}
