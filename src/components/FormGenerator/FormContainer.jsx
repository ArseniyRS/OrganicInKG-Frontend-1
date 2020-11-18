import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";
import Former from "./Former";
import Preloader from "../Preloader/Preloader";
const FormContainer = ({
                           createReq,
                           updReq,
                           match,
                           isLoading,
                           fileUploadKeys,
                           ...props})=>{
    useEffect(()=>{
        if(props.loadSelectorData) {
            props.loadSelectorData()
        }
        if(match.params?.id) {
            props.getByIdFunc(match.params.id)
        }
    },[])

    const handleSubmit =   values=>{

        if(match.params?.id){
            values.id = match.params.id
           return  updReq(match.params.id,values)
        }else {
            return createReq(values,fileUploadKeys)
        }
    }



    return(
        !isLoading
            ?
            <Former handleSubmit={handleSubmit}  {...props}/>
        : <Preloader />

    )
}

export default withRouter(FormContainer)