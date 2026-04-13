import { Outlet } from 'react-router'

export default function ProductsPageLayout() {
  return (
    <>
      <header>nav here</header>
      <main>
        <Outlet />
      </main>
      <footer>footer here</footer>
    </>
  )
}
