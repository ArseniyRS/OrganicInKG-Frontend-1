import React from 'react'
import './Header.css'
import {Link, Redirect, withRouter} from "react-router-dom";
import {logout} from "../Auth/logout";
import {toggleAuth} from "../../redux/reducers/mainReducer";
import {connect} from "react-redux";
import {logoSVG} from '../../assets/icons'

const Header = (props)=>{
console.log(props.username)
    return(
        <div className='header'>
        <div className='container'>
        <div className="header__container">
            <Link to={"/providers"}><img src={logoSVG} alt=""/></Link>
            <div className="header-profile">
                <span className='header-profile__name'>{props.username}</span>
                <Link to={"/profile"}><span className='header-profile__password'>Сменить пароль</span></Link>
                <span>/</span>
                <span className='header-profile__exit' onClick={()=> {
                    logout()
                    props.toggleAuth(false)
                }}>Выйти</span>
            </div>
        </div>
        </div>
        </div>

    )
}
const mapStateToProps = state=>{
    return{
        username:state.main.username
    }
}
export default connect(mapStateToProps,{toggleAuth})(Header)