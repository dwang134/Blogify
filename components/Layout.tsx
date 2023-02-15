import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-slate-50 to-white'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout