import React, {useEffect} from 'react'
import {expChecker} from "../Auth/expChecker";
import {tokensChecker} from "../Auth/tokensChecker";
import {logout} from "../Auth/logout";
import Preloader from "../Preloader/Preloader";





const withLogged = Component =>
{
    return props=>
    {

        return(
            props.isAuthorized===undefined ? <Preloader /> : <Component {...props}/>
        )
    }
}

export default  withLogged


