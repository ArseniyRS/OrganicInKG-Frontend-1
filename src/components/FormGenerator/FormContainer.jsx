import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";
import Former from "./Former";
import withLoader from "../HOC/withLoader";
import {initialValuesGetter} from "../../utils/initialValuesGetter";
const FormContainer = ({
                           createReq,
                           updReq,
                           loadData,
                           match,
                            //data,
                           ...props})=>{
    // const [initialVals,setInitialVals] = useState(undefined)
    //
    //    useEffect(()=>{
    //        if(loadData){
    //            setInitialVals(initialValuesGetter(data.find(item=>parseInt(match.params.id)===parseInt(item.id)),true))
    //        }else{
    //            setInitialVals(initialValuesGetter(data[0],false))
    //        }
    //        return ()=>{
    //            setInitialVals(undefined)
    //        }
    //    },[])

    const handleSubmit =values=>{

        if(loadData){
            values.id = match.params.id
           return  updReq(match.params.id,values)

        }else{

            return  createReq(values)
        }
    }

    return(

            <Former handleSubmit={handleSubmit}  {...props}/>


    )
}

export default withRouter(FormContainer)