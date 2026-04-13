import { useQuery } from '@tanstack/react-query'
import { productsKeys, getPaginatedProducts } from '@/api/products'

export function useProducts(page: number, category?: string, limit: number = 8) {
  return useQuery({
    queryKey: productsKeys.list({ page, category }),
    queryFn: () => getPaginatedProducts(page, limit, category),
    // Keep previous data while loading new page
    placeholderData: (previousData) => previousData,
  })
}
