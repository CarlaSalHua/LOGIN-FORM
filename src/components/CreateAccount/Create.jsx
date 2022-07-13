import React, {useRef, useState} from "react";
import {newUser} from '../actions/data.jsx'
import './Create.scss';

const URL_CREATE= 'http://localhost/loginphp/registrar.php';


const Create= (props)=> {
    const refUser= useRef(null);
    const refClave= useRef(null);
    const refNombre= useRef(null);
    const refApellidos= useRef(null);

    const handleCreate= async ()=> {
        const data = {
            "nombre": refNombre.current.value,
            "apellidos": refApellidos.current.value,
            "usuario":refUser.current.value,
            "clave": refClave.current.value,
        };
        console.log('datitos', data )
        const resJson= await newUser (URL_CREATE, data);
        //console.log('evento de', resJson)
    }

  return (
    <div className='create' >
        <div className='row'>
            <div className='col-sm-4 offset-4 mt-5'>
                <div className='card pt-2'>
                    <div className='card-header'>
                        <h3>Create Account</h3>
                        <p>Ingrese sus datos para crear su cuenta</p>
                    </div>

                    <div className='card-body'>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                            <label className='input-group-text' id='basic-addon1'>
                            Nombre
                            </label>
                            </div>
                            <input
                            type='text'
                            className='form-control'
                            placeholder='nombre'
                            aria-label='nombre'
                            aria-describedby='basic-addon1'
                            ref={refNombre}
                            required
                            />
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                            <label className='input-group-text' id='basic-addon1'>
                            Apellidos
                            </label>
                            </div>
                            <input
                            type='text'
                            className='form-control'
                            placeholder='apellidos'
                            aria-label='apellidos'
                            aria-describedby='basic-addon1'
                            ref={refApellidos}
                            required
                            />
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                            <label className='input-group-text' id='basic-addon1'>
                            ✉️ Correo
                            </label>
                            </div>
                            <input
                            type='email'
                            className='form-control'
                            placeholder='user@gmail.com'
                            aria-label='usuario'
                            aria-describedby='basic-addon1'
                            ref={refUser}
                            required
                            />
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='input-group mb-4'>
                            <div className='input-group-prepend'>
                                <label className='input-group-text' id='basic-addon2'>
                                🔐 Clave
                                </label>
                            </div>
                            <input
                            type='password'
                            className='form-control'
                            placeholder='password'
                            aria-label='clave'
                            aria-describedby='basic-addon2'
                            ref={refClave}
                            required
                            />
                        </div>
                        
                        <button
                            onClick={handleCreate}
                            type='submit'
                            className='btn btn-dark btn-lg btn-block'>
                            Crear cuenta
                        </button>
                    
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Create;