import React, {useEffect} from 'react'
import CreateOrEditOrdersForm from "./CreateOrEditOrdersForm";




const CreateOrEditOrdersContainer = (props)=>{

    return(
        <>
        <CreateOrEditOrdersForm {...props}/>
        </>
    )
}

export default CreateOrEditOrdersContainer