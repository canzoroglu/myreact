import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <h1>Start MarioPlan</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
