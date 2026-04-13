import { Outlet } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function ProductsPageLayout() {
  return (
    <>
      <header>nav here</header>
      <main>
        <Outlet />
      </main>
      <div>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
      </div>
      <footer>footer here</footer>
    </>
  )
}
