import { apiClient } from './client'

export const categoriesApi = {
  getCategories: () => apiClient.get<string[]>('/products/categories'),
}

export const categoriesKeys = {
  all: ['categories'] as const,
  lists: () => [...categoriesKeys.all, 'list'] as const,
}
