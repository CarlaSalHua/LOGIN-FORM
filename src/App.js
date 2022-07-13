import React, {useState} from 'react';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Create from './components/CreateAccount/Create';
import Home from './components/Home/Home';
import LandingPage from './components/Landing/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/registrar' component={Create}/>
          <Route exact path='/home' component={Home}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// {connected ?
//   <Route exact path='/home' component={Home}/>:<Route exact path='/' component={Login}><Login access={access}/></Route>
// }