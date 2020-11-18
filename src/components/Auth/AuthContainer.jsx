import React from 'react'
import AuthForm from "./AuthForm";



const AuthContainer = ()=>{
    const submitHandler = (values)=>console.log(values)
    return(
        <AuthForm submitHandler={submitHandler}/>
    )
}

export default AuthContainer