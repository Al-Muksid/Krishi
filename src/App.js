import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Router path="/login">
            <Login/>
          </Router>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
