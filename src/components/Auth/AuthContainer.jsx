import React from 'react'
import AuthForm from "./AuthForm";
import {connect} from "react-redux";
import {authSignIn, togglePageLoader} from "../../redux/reducers/mainReducer";



const AuthContainer = ({authSignIn})=>{

    const submitHandler = (values)=>authSignIn(values)
    return(
        <AuthForm submitHandler={submitHandler}/>
    )
}

export default connect(null,{authSignIn})(AuthContainer)