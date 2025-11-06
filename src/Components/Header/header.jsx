import styles from './header.module.css'
import React from 'react'
import useDarkMode from '../../hooks/useDarkMode.jsx'

function Header() {
    const [isDarkMode, toggleTheme] = useDarkMode();
  return (
    <header className={styles.headerContainer}>
        <ul className={styles.navList}>
            <li className={styles.navItem}> 
                <a href="https://github.com/lukaeawdev" target="_blank">
                    <img src="github.png" alt="GitHub" />
                </a>
            </li>
            <li className={styles.navItem}>
                <a href="https://www.instagram.com/lukaeaw/">
                    <img src="instagram.png" alt="Instagram" />
                </a>
            </li>
            <li className={`${styles.navItem} ${styles.themeButtonContainer}`}>
                <button onClick={toggleTheme} className={styles.themeToggleButton}>
                    <img src={isDarkMode ? '/light.png' : '/night.png'} alt="Tema Değiştirici" />
                </button>
            </li>
                

        </ul>
    </header>
  )
}

export default Header