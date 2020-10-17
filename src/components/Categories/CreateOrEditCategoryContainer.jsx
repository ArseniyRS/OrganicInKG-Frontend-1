import React, {useEffect} from 'react'
import CreateOrEditCategoryForm from "./CreateOrEditCategoryForm";




const CreateOrEditCategoryContainer = (props)=>{

    return(
        <>
            <CreateOrEditCategoryForm {...props}/>
        </>
    )
}

export default CreateOrEditCategoryContainer