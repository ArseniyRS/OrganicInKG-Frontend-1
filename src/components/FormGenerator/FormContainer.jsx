import React from 'react'
import {withRouter} from "react-router-dom";
import Former from "./Former";
const FormContainer = ({
                           createReq,
                           updReq,
                           loadData,
                           match,
                           ...props})=>{
    
    const handleSubmit =values=>{
        if(loadData){
            createReq(values)
        }else{
            updReq(match.params.id.params.id,values)
        }
    }
    return(

            <Former handleSubmit={handleSubmit} {...props}/>

    )
}

export default withRouter(FormContainer)