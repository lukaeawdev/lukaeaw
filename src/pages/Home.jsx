import React from 'react'
import About from '../Components/About/about.jsx'
import Skills from '../Components/Skills/skills.jsx'
import Header from '../Components/Header/header.jsx'

function Home() {
    return (
        <div>
            <Header />
            <About />
            <Skills />
        </div>
    )
}

export default Home