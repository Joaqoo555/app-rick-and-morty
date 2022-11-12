import React from 'react'
import SearchBar from './SearchBar'
import styles from "../styles/header.module.css"

function Header() {
  return (
    <header className={styles.header}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </header>
  )
}

export default Header

