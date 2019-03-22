import React, { Component }  from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import Post from "./Article";
import "./App.css";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/post/:id" component={Post} />
        <Route exact={true} path="/" component={Home} />
      </BrowserRouter>
      );
  }
}

export default App;
