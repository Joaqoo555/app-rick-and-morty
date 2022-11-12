import Cards from './components/Cards.jsx';
import Header from './components/Header.jsx';
import characters from './data.js';
import NavBar from './components/NavBar.jsx';

function App () {

  return (
    <div className='App'>
      <Header />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <NavBar />
    </div>
  )
}

export default App
