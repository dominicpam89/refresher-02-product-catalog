import { useQuery } from '@tanstack/react-query'
import { categoriesApi, categoriesKeys } from '@/api/categories'

export function useCategory() {
  return useQuery({
    queryKey: categoriesKeys.lists(),
    queryFn() {
      categoriesApi
        .getCategories()
        .catch(() => {
          throw new Error("API error: couldn't get categories")
        })
        .then((data) => {
          return data
        })
    },
  })
}
