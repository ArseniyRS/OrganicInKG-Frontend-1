import React from 'react'
import {errorSVG} from "../../assets/icons";



const ErrorMsg = ({text})=>{
    return(

        <span className={'errorMessage'}><img src={errorSVG} alt=""/>{text}</span>

    )
}

export default ErrorMsg