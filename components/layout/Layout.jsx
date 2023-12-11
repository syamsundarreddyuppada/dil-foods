import React from 'react'
import HeaderNav from '../header/HeaderNav'
import Footer from '../footer/Footer'
import { useRouter } from 'next/router'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
      </footer> : ""} 
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default Layout