import React, {useEffect} from 'react'
import CreateOrEditCategoryForm from "./CreateOrEditCategoryForm";
import {createCategory, updateCategory} from "../../redux/reducers/categoryReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";




const CreateOrEditCategoryContainer = (props)=>{
    const handleSubmit =values=>{
        if(props.loadData){
            props.createCategory(values)
        }else{
           props.updateCategory(props.match.params.id.params.id,values)
        }
    }
    return(
        <>
            <CreateOrEditCategoryForm {...props}/>
        </>
    )
}

export default connect(null,{createCategory,updateCategory})(withRouter(CreateOrEditCategoryContainer))