import React from 'react'
import './Header.css'


const Header = ()=>{
    return(
        <div className='header'>
        <div className='container'>
        <div className="header__container">
            <h3>Admin panel of Organic in KG</h3>
            <div className="header-profile">
                <span className='header-profile__name'>Бермет</span>
                <span className='header-profile__password'>Сменить пароль</span>
                <span>/</span>
                <span className='header-profile__exit'>Выйти</span>
            </div>
        </div>
        </div>
        </div>

    )
}

export default Header