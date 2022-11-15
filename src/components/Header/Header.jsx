import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from "./header.module.css"

function Header({onSearch}) {
  return (
    <header className={styles.header}>
        <SearchBar onSearch={onSearch} />
    </header>                         
  )
}

export default Header

