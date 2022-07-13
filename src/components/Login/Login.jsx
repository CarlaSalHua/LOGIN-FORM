import React, {useRef, useState} from 'react';
import sendData from '../actions/data.jsx';
import './Login.scss';
const URL_LOGIN = 'http://localhost/loginphp/login.php';



const Login= (props)=> {
  const [error, setError]= useState(null);
  const [wait, setWait]= useState(false);

  const refUser =useRef(null);
  const refClave= useRef(null);

  const handleLogin= async ()=> {
    setWait(true);
    const data={
      "usuario": refUser.current.value,
      "clave": refClave.current.value
    };
    //console.log ('holi', data)
    const resJson= await sendData(URL_LOGIN, data);
    //console.log ('res event', resJson);
    props.access(resJson.conectado)
    console.log ('res event', resJson.conectado);
    setError(resJson.error)
    setWait(false);
  }

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
                  placeholder='correo'
                  aria-label='Username'
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

            <div className='card-footer'>
              <span>Olvido su clave?</span>
              <br/>
              <a href='http://'>recuperar cuenta</a>
            </div>
            
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;