import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/header'
import Home from './components/home'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Login />
            } />
          <Route path="/home" element={
            <>
              <Header />
              <Home />
            </>
            } />
        </Routes>
      </Router>
    </div>

  )                             
}

export default App
