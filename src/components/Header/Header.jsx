import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from "./header.module.css"

function Header({onSearch,  onCloseAll}) {
  //renderizado de titulo de app y searchBar
  return (
    <header className={styles.header}>
      <h1 className={styles.tittle_app}>App of Rick and Morty | Joaquin Carrera</h1>
        <SearchBar onSearch={onSearch} onCloseAll={onCloseAll}/>
    </header>                         
  )
}

export default Header

