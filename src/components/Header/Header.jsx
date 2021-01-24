import React, {useEffect} from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import {logout} from "../Auth/logout";
import {getUserName, toggleAuth, writeUserId} from "../../redux/reducers/mainReducer";
import {connect} from "react-redux";
import {logoSVG} from '../../assets/icons'
import {expChecker} from "../Auth/expChecker";
import Preloader from "../Preloader/Preloader";

const Header = (props)=>{

useEffect(()=>{
    if(expChecker()) {
        props.getUserName()
        props.writeUserId(parseInt(localStorage.getItem('id')))
    }
},[])
    return(
        <div className='header'>
        <div className='container'>

        <div className="header__container">
            <Link to={"/providers"}><img src={logoSVG} alt=""/></Link>
            <div className="header-profile">
                {props.username ?
                <span className='header-profile__name'>{props.username}</span>
                :
                    <Preloader width={'6px'} height={'6px'}/>}

                <Link to={"/profile"}><span className='header-profile__password'>Профиль</span></Link>
                <span className='header-profile__divider'>/</span>
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
export default connect(mapStateToProps,{toggleAuth,getUserName,writeUserId})(Header)