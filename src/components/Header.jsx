import React from 'react'
import SearchBar from './SearchBar'
import styles from "../styles/header.module.css"
import {} from "react-icons"

function Header() {
  return (
    <header className={styles.header}>
        <h1></h1>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </header>
  )
}

export default Header

