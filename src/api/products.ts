import { apiClient } from './client'
import type { Product } from '@/features/products/types'

export const productsApi = {
  getAllProducts: () => apiClient.get<Product[]>('/products'),
  getProduct: (id: number) => apiClient.get<Product>(`/products/${id}`),
  getProductsByCategory: (category: string) =>
    apiClient.get<Product[]>(`/products/category/${category}`),
}

// Pagination function (client-side for demo)
export const getPaginatedProducts = async (page: number, limit: number = 8, category?: string) => {
  const response = category
    ? await productsApi.getProductsByCategory(category)
    : await productsApi.getAllProducts()
  const allProducts = response.data
  const start = (page - 1) * limit
  const end = start + limit
  const paginatedData = allProducts.slice(start, end)
  return {
    data: paginatedData,
    currentPage: page,
    totalPages: Math.ceil(allProducts.length / limit),
    totalItems: allProducts.length,
  }
}

// Query keys
export const productsKeys = {
  all: ['products'] as const,
  lists: () => [...productsKeys.all, 'list'] as const,
  list: (filters: { page: number; category?: string }) =>
    [...productsKeys.lists(), filters] as const,
  infinite: (category?: string) => [...productsKeys.all, 'infinite', category] as const,
  details: () => [...productsKeys.all, 'detail'] as const,
  detail: (id: number) => [...productsKeys.details(), id] as const,
}
