import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={ <Home /> } />
        <Route path='about' element={ <About /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='*' element={ <Navigate replace to="/"/> }/>
      </Route>
    </Routes> 
    </BrowserRouter>

    </div>
  );
}

export default App;