import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";
import Former from "./Former";
import withLoader from "../HOC/withLoader";
import {initialValuesGetter} from "../../utils/initialValuesGetter";
import Preloader from "../Preloader/Preloader";
const FormContainer = ({
                           createReq,
                           updReq,
                           match,
                            //data,
                           ...props})=>{
    useEffect(()=>{

        props.loadSelectorData()
        if(match.params?.id) {
            props.getByIdFunc(match.params.id)
        }
    },[])

    const handleSubmit =values=>{
        if(match.params?.id){
            values.id = match.params.id
           return  updReq(match.params.id,values)
        }else{
            return  createReq(values)
        }
    }

    return(
        (props.valueById && props.optionsForSelector && match.params?.id) ||
        (!match.params?.id && props.optionsForSelector)
            ?
            <Former handleSubmit={handleSubmit}  {...props}/>
        : <Preloader />

    )
}

export default withRouter(FormContainer)