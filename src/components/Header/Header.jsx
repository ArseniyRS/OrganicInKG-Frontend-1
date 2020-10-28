import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";


const Header = ()=>{
    return(
        <div className='header'>
        <div className='container'>
        <div className="header__container">
            <Link to={"/main"}><h3>Admin panel of Organic in KG</h3></Link>
            <div className="header-profile">
                <span className='header-profile__name'>Бермет</span>
                <Link to={"/profile"}><span className='header-profile__password'>Сменить пароль</span></Link>
                <span>/</span>
                <span className='header-profile__exit'>Выйти</span>
            </div>
        </div>
        </div>
        </div>

    )
}

export default Header