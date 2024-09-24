
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/header'
import Home from './components/home'
import { getUserAuth } from './actions'
import { connect } from 'react-redux'

export function App(props) {
  console.log(props)
  useEffect(()=>{
      props.getUserAuth;  // Ensure the function is called safely
  },[props.getUserAuth])
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

const mapStateToProps = (state) =>{
  return {};
};

const mapDispatchToProps = (dispatch) =>({
  getUserAuth: () => dispatch(getUserAuth),
})

export default connect(mapStateToProps, mapDispatchToProps)
