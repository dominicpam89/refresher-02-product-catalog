import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { productsKeys, getPaginatedProducts } from '@/api/products'

type useProductsParams = {
  page: number
  limit: number
  category?: string
}

type useInfiniteProductsParams = {
  limit: number
  category?: string
}

export const useProducts = ({ page, category, limit = 8 }: useProductsParams) => {
  return useQuery({
    queryKey: productsKeys.list({ page, category }),
    queryFn: () =>
      getPaginatedProducts(page, limit, category)
        .then((data) => data)
        .catch(() => {
          throw new Error("PAGINATED RETRIEVE ERROR: couldn't get products")
        }),
    placeholderData: (prevData) => prevData,
  })
}

export const useInfiniteProducts = ({ limit = 8, category }: useInfiniteProductsParams) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: productsKeys.infinite(category),
    queryFn: ({ pageParam = 1 }) => getPaginatedProducts(pageParam, limit, category),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.currentPage < lastPageParam) {
        return lastPage.currentPage + 1
      }
      return undefined
    },
  })
}
