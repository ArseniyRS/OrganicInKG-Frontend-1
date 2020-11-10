import React from 'react'
import AuthForm from "../../components/Auth/AuthForm";
import {connect} from "react-redux";
import {signIn} from "../../redux/reducers/mainReducer";




const AuthContainer = props=>{

    const submitHandler = (data)=>{
        console.log(data)
        props.signIn(data)
    }
    return(
        <AuthForm {...props} submitHandler={submitHandler}/>
    )
}

export default connect(null,{signIn})(AuthContainer)