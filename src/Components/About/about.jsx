import React from 'react'
import styles from './about.module.css'

function About() {
  return (
    <div className={styles.aboutSection}>
        <h1 id={styles.main}>lukaeaw</h1>
        <h2 id={styles.subtitle}>Front-End Developer</h2>
        <p id={styles.about}>👋 Hi! I'm <b>Kerem</b>, a 16-year-old <b>Front-End Developer</b> passionate about creating innovative, interactive, and user-centered web applications. 💻✨ I love combining <b>design</b> and <b>technology</b> to craft clean, efficient, and visually engaging digital experiences. 🎨🚀 Always exploring new tools, improving my skills, and bringing ideas to life through creative and functional solutions. 💡🌍</p>
    </div>
  )
}

export default About