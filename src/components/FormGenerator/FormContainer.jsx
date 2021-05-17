import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";
import Former from "./Former";
import Preloader from "../Preloader/Preloader";
const FormContainer = ({
                           createReq,
                           updReq,
                           match,
                           isLoading,
                           ...props})=>{
    useEffect(()=>{
        if(props.loadSelectorData) {
            for(let i=0;i<props.loadSelectorData.length;i++){
                props.loadSelectorData[i]()
            }
        }
        if(match.params?.id) {
            props.getByIdFunc(match.params.id)
        }
        return ()=>{
            if(props.clearSelectorData) {
                for(let i=0;i<props.clearSelectorData.length;i++){
                    props.clearSelectorData[i]()
                }
            }
        }
    },[])

    const handleSubmit = async values=>{

        if(match.params?.id){
            await updReq(match.params.id,values)
        }else {
            await  createReq(values)
        }
    }

    console.log(match)
    return(
        (!isLoading && props.valueById && match.params.id) || (!isLoading && !props.valueById && !match.params.id)
        || match.path === "/settings"
            ?
            <Former handleSubmit={handleSubmit}  {...props}/>
        : <Preloader />

    )
}

export default withRouter(FormContainer)