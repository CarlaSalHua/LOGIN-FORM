import React, {useState} from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [connected, setConnected]= useState(false);

  const access= (estado)=> {
    setConnected(estado)
    //console.log ('123',access)
  }


  return (
    connected?
      <Home/>: <Login access={access}/>
  );
}

export default App;
