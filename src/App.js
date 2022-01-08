import './App.css';
import React, { Component }from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Me from './components/Me';


class App extends Component {
  render() {
      return (
        <div>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/about' 
          component={About}/>
          <Route exact path ='/projects' component={Projects}/>
          <Route exact path ='/work' component={Work}/>
          <Route exact path ='/me' component={Me}/>
          <Redirect to='/'/>
        </Switch>
        </div>
            );
  }
}

export default App;