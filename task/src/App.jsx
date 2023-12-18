import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import './App.css'
import Login from './Login';
import Dashboard from './Dashboard';
import Book from './Book';
import Author from './Author';
import Edit from './Edit';
import Navbar from './Navbar';


function App() {
 

  return (
<div>

 <Router>
 <Navbar/>
    <Routes>
     
    <Route  exact path="/" element={<Dashboard />}/>
    <Route  exact path="/book" element={<Book />}/>
    <Route path="/edit/:id" element={<Edit/>}/>
    <Route path="/Author" element={<Author/>}/>
    
    </Routes>
    </Router>  

</div>
  )
}

export default App
