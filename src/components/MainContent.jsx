import React from 'react'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Certificates from './Certificates'
import Project from './Project'
import Footer from './Footer'

const MainContent = () => {
  return (
    <main className='p-4 md:ml-64 md:p-8 pb-20 pt-20 md:pt-8 overflow-y-scroll scrollbar-none'>
        <Header/>
        <About/>
        <Skills/>
        <Certificates/>
        <Project/>
        <Footer/>
    </main>
  )
}

export default MainContent