import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Projectdetails  from './components/projects/Projectdetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Createmessage from './components/projects/Createmessage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
         <Route exact path = '/' component = {Dashboard} />
         <Route path = '/project/:id' component = {Projectdetails} />
         <Route path = '/signin' component = {Signin} />
         <Route path = '/signup' component = {Signup} />
         <Route path = '/create' component = {Createmessage} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
