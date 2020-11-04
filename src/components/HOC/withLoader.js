import React from 'react'
import {useSelector} from "react-redux";




const withLoader = Component =>
{
    return props=>
    {
    const loader = useSelector(state=>state.main.isFetchLoader)
        return(
            loader ? <h2>Loading...</h2> :<Component {...props}/>
        )
    }
}


export default withLoader