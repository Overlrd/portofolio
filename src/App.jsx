import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portofolio from './components/portofolio/Portofolio'
import Contact from './components/contact/Contact'
import Certifications from './components/Certifications/Certifications'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Service/>
      <Portofolio/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App