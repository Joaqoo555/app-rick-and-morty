import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from "react-router-dom"

//import normalize en root
import "./styles/index.css"

ReactDOM.render( <BrowserRouter><App /></BrowserRouter> , document.getElementById('root') );
