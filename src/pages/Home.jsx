import React from 'react'
import About from '../Components/About/about.jsx'
import Skills from '../Components/Skills/skills.jsx'
import Header from '../Components/Header/header.jsx'
import GitHubRepos from '../Components/githubrepos/githubReposCard.jsx'
import styles from './Home.module.css'
function Home() {
    return (
        <div>
            <Header />
            <main className={styles.mainContent}></main>
            <About />
            <Skills />
            <GitHubRepos />
        </div>
    )
}

export default Home