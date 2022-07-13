import React, {useState} from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Create from './components/CreateAccount/Create';

function App() {
  const [connected, setConnected]= useState(false);

  const access= (estado)=> {
    setConnected(estado)
    //console.log ('123',access)
  }


  return (
    // connected?
    //   <Home/>: <Login access={access}/>
    <Create/>
  );
}

export default App;
