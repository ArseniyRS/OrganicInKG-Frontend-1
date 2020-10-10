import React, {InputHTMLAttributes, useEffect, useRef} from 'react'
import { Route } from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import './AuthPage.css'
const AuthPage = ()=>{


    return(
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
					<span className="login100-form-title ">
						Вход
					</span>


                            <div className="wrap-input100 validate-input" data-validate="Введите логин">
                                <input className="input100" type="text" name="username"  autoComplete="off"/>
                                    <span className="focus-input100" data-placeholder="Логин"></span>
                            </div>

                            <div className="wrap-input100 validate-input " data-validate="Введите пароль">
                                <input className="input100" type="password" name="pass" autoComplete="off"/>
                                    <span className="focus-input100" data-placeholder="Пароль"></span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                   Войти
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

    )
}

export  default  AuthPage