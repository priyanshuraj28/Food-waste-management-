import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,     
  } from "react-router-dom"

import LoginPage from './Componenets/Login/LoginPage/Login'
import SignUpPage from './Componenets/Login/SignUp/SignUp'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to ="/login"/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/signup">
            <SignUpPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;