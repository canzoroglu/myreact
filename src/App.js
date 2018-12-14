import React, { Component } from 'react';
// import PeopleList from "./Components/PeopleList";
// import AddPeople from "./Components/AddPeople";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Post from "./Components/Post";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/posts/:post_id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
