import React, {InputHTMLAttributes, useEffect, useRef} from 'react'
import './AuthPage.css'
import AuthContainer from "../../containers/Auth/AuthContainer";
const AuthPage = ()=>{


    return(
        <div className='auth__container'>
           <div className="auth__block">
               <div className="auth__title">Авторизация</div>
               <AuthContainer />
           </div>
        </div>

    )
}

export  default  AuthPage