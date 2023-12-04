import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Shpere from '../../components/TextShpere/Sphere'

const Home = () => {
  return (
    <div className=' w-full sm:w-5/6 m-auto'>
        <NavBar />
        <About />
        <Experience />
        <Projects />
        <Shpere />
        <Contact />
    </div>
  )
}

export default Home