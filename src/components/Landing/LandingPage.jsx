import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './LandingPage.scss';

const LandingPage=()=> {

    
  
  return (
    <div className='landing'>

        <div className='contentButton'>
            <Link to='/login'>
                <button className='buttonLogin'>
                    <span>Iniciar</span>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default LandingPage;