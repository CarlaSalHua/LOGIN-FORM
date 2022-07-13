import React, {useEffect, useRef, useState} from 'react';
//import Create from '../CreateAccount/Create.jsx';
import Home from '../Home/Home.jsx';
import {sendData} from '../actions/data.jsx';
import { BrowserRouter, Link, Route, Redirect, useHistory} from 'react-router-dom';
import './Login.scss';
const URL_LOGIN = 'http://localhost/loginphp/login.php';



const Login= ( )=> {
  const [error, setError]= useState(null);
  const [wait, setWait]= useState(false);
  // const [connected, setConnected]= useState(false);
  // let history= useHistory();

  const refUser =useRef(null);
  const refClave= useRef(null);
  
  // const access= (estado)=> {
  //   setConnected(estado)
  //   //console.log ('123',access)
  // }

  const handleLogin= async ()=> {
    setWait(true);
    const data={
      "usuario": refUser.current.value,
      "clave": refClave.current.value
    };
    console.log ('holi', data)
    const resJson= await sendData(URL_LOGIN, data);
    //console.log ('res event', resJson);
    //access(resJson.conectado)
    console.log ('res event', resJson.conectado);
    //setConnected(resJson.conectado);
    setError(resJson.error)
    setWait(false);
  }

  // useEffect(() => { 
  //   if(connected){
  //       <Redirect to={'/home'}/>
  //       history.ppush('/home')
  //   }

  // }, [connected])
  

  return (
    <div className='login' >
      <div className='row'>
        <div className='col-sm-4 offset-4 mt-5'>
          <div className='card pt-2'>
            <div className='card-header'>
              <h3>Iniciar</h3>
            </div>

            <div className='card-body'>
              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                  ✉️
                  </span>
                </div>
                <input
                  type='email'
                  className='form-control'
                  placeholder='user@gmail.com'
                  aria-label='username'
                  aria-describedby='basic-addon1'
                  ref={refUser}
                />
              </div>
            </div>

            <div className='card-body'>
              <div className='input-group mb-4'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon2'>
                  🔐
                  </span>
                </div>
                <input
                  type='password'
                  className='form-control'
                  placeholder='clave'
                  aria-label='clave'
                  aria-describedby='basic-addon2'
                  ref={refClave}
                />
              </div>
              {
                  error &&
                  <div className='alert alert-danger'>
                    {error}
                  </div>
              }
              
              <button 
              onClick={handleLogin}
              disabled={wait}
              className='btn btn-dark btn-lg btn-block'>
                Acceder
              </button>
              {/*{ 
                connected? <Link redirect={'/home'}/>:null
                } */}

              {/* <div className='card-footer'>
                <span>Olvido su clave?</span>
                <a href='http://'>recuperar cuenta</a>
              </div> */}
                
                <div className='card-footer'>
                  <span>No tiene cuenta?</span>
                  <Link to='/registrar'><span>Crear cuenta</span></Link>
                </div>
              
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;