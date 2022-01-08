import React, { Component }from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Me from './components/Me';


class App extends Component {
  render() {
      return (
        <div>
        <Routes>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/about' 
          component={About}/>
          <Route exact path ='/projects' component={Projects}/>
          <Route exact path ='/work' component={Work}/>
          <Route exact path ='/me' component={Me}/>
          <Route path="*" component={Home}/>
    />
        </Routes>
        </div>
            );
  }
}

export default App;