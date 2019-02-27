import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Dashboard from "./Components/dashboard/Dashboard";
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
