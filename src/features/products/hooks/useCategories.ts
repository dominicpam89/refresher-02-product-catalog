import { useQuery } from '@tanstack/react-query'
import { categoriesApi, categoriesKeys } from '@/api/categories'

export function useCategories() {
  return useQuery({
    queryKey: categoriesKeys.lists(),
    queryFn: () => categoriesApi.getCategories().then((res) => res.data),
    staleTime: 1000 * 60 * 10, // categories don't change often
  })
}
