import HomePage from '@/pages/HomePage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import ProductsPage from '@/pages/ProductsPage'
import ProductsPageLayout from '@/pages/ProductsPageLayout'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  {
    path: '/products',
    Component: ProductsPageLayout,
    children: [
      { index: true, Component: ProductsPage },
      { path: ':id', Component: ProductDetailPage },
    ],
  },
])
