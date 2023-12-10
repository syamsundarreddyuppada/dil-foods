import React from 'react'
import HeaderNav from '../header/HeaderNav'
import Footer from '../footer/Footer'
import { useRouter } from 'next/router'
const Layout = ({ children }) => {
  const router = useRouter()
  return (
      <div>
            <HeaderNav />
          <main>
            {children}
          </main>
          {router.pathname === "/" ? <footer>
            <Footer/>
          </footer> :""} 
    </div>
  )
}

export default Layout