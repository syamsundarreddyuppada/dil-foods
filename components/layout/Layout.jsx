import React from 'react'
import HeaderNav from '../header/HeaderNav'
import Footer from '../footer/Footer'
const Layout = ({children}) => {
  return (
      <div>
          <header>
            <HeaderNav />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
    </div>
  )
}

export default Layout