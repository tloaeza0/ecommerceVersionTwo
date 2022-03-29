import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import Rare from './Components/Rare';
import Contact from './Components/Contact';
import OtherProducts from './Components/OtherProducts';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    
      <Router>
      <Navbar/>
      <div>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Products' element = {<Products/>}/>
        <Route path = '/Rare' element = {<Rare/>}/>
        <Route path = '/Contact' element = {<Contact/>}/>
      </Routes>
      </div>
      <Footer/>
      <OtherProducts/>
      </Router>
   
  );
}



export default App;

