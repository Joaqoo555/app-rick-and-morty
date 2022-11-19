import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//Components
import Home from "./Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Details from "./components/Details/Details.jsx"
import About from "./components/About/About.jsx"
import Error404 from "./components/Error/Error404.jsx";
import Form from "./components/Form/Form.jsx";


function App() {
  const [access, setAcces] = useState(false)
  const navigate = useNavigate()
  const userDefault = "joaquincarrera@gmail.com"
  const passwordDefault = "joaquin1"

  function handleSubmit({username, password}){
    if(userDefault === username && passwordDefault === password){
      setAcces(true)
      navigate("/home")
    }else if(userDefault !== username){
      alert("Este gmail no esta logueado en la app")
    }else if(passwordDefault !== password){
      alert("La contraseña es incorrecta")
    }else{
      alert("contraseña y clave incorrecta")
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  return (
    <div className="App">
      <NavBar/>    
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/" index element={<Form myHandleSubmit={handleSubmit}/>} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
