import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Me from './components/Me';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route exact path ='/about' element={<About />} />
        <Route exact path ='/projects' element={<Projects />} />
        <Route exact path ='/work' element={<Work />} />
        <Route exact path ='/me' element={<Me />} />
      </Routes>
    );
  }
}

export default App;