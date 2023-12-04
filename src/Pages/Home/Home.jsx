import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <>
        <NavBar />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </>
  )
}

export default Home