import { Route, Routes } from "react-router-dom";

//Components
import Home from "./Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Details from "./components/Details/Details.jsx"
import About from "./components/About/About.jsx"
import Error404 from "./components/Error/Error404.jsx";


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
