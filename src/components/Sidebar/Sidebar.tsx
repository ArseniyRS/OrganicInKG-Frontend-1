import React from 'react'
import {Link} from "react-router-dom";
import './Sidebar.css'
import {categorySVG, orderSVG, productSVG, providerSVG, questionSVG, userSVG} from "../../assets/icons";

const Sidebar  = ()=>{
    return(
        <div className='sidebar__container'>
            <ul className='sidebar'>
                <li className='sidebar__item'><img src={providerSVG} alt=""/><Link to='/providers' >Поставщики</Link></li>
                <li className='sidebar__item'><img src={orderSVG} alt=""/><Link to='/orders' >Заказы</Link></li>
                <li className='sidebar__item'><img src={productSVG} alt=""/><Link to='/products' >Товары</Link></li>
                <li className='sidebar__item'><img src={userSVG} alt=""/><Link to='/users' >Пользователи</Link></li>
                <li className='sidebar__item'><img src={categorySVG} alt=""/><Link to='/categories'>Категории</Link></li>
                <li className='sidebar__item'><img src={questionSVG} alt=""/><Link to='/questions'>Вопросы</Link></li>
            </ul>
        </div>
        // <div className='sidebar__container'>
        //     <div className='sidebar'>
        //        <Link to='/providers' className='sidebar__item'>  <img src="" alt=""/>Поставщики</Link>
        //     <Link to='/orders' className='sidebar__item'>  <img src="" alt=""/>Заказы</Link>
        //     <Link to='/products' className='sidebar__item'>  <img src="" alt=""/>Товары</Link>
        //     <Link to='/users' className='sidebar__item'>  <img src="" alt=""/>Пользователи</Link>
        //     <Link to='/categories' className='sidebar__item'>  <img src="" alt=""/>Категории</Link>
        //     </div>
        //
        // </div>
    )
}

export default Sidebar