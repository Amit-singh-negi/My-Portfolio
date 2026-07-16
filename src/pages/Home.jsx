import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import MyProject from '../components/MyProject'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Hero/>
    <About/>
    <Skills/>
    <MyProject/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home
