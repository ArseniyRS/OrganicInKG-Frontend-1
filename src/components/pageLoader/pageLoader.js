import React, {useEffect, useRef, useState} from 'react'
import './pageLoader.css'
import {loaderLogoSVG} from '../../assets/icons'
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import {Transition,Spring,config} from "react-spring/renderprops";
import {togglePageLoader} from "../../redux/reducers/mainReducer";

const PageLoader = ({isPageLoader})=>{

    return(
        <>
            <div className="box" ><img src={loaderLogoSVG}  alt=""/></div>
        </>
    )
}
const mapStateToProps = state=>{
    return{

        isPageLoader: state.main.isPageLoader,

    }
}
export default connect(mapStateToProps,{togglePageLoader})(PageLoader)