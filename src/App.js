import Cards from './components/Cards.jsx';
import Header from './components/Header.jsx';
import characters from './data.js';

function App () {

  return (
    <div className='App'>
      <Header />
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
