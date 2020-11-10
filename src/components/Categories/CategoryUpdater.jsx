import React, {useEffect} from 'react'
import FormContainer from "../FormGenerator/FormContainer";
import {categoryInputConfig} from "./inputConfig";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {createCategory, getCategory, getCategoryById, updateCategory} from "../../redux/reducers/categoryReducer";



const CategoryUpdater = (props)=>{
    useEffect(()=>{
        props.getCategoryById(props.match.params.id)
    },[])
    return(
        <FormContainer
            urlToTable={'/categories'}
            //data={props.categories}
            initialVals={{
                name: props.categoryById.name,
                description: props.categoryById.description,
                parentCategoryId: props.categoryById.parentCategory.id,

            }}
            loadData={true}
            createReq = {props.createCategory}
            updReq ={props.updateCategory}
            formTitle = {"Редактирование категории"}
            inputConfig ={categoryInputConfig}
            optionsForSelector = {props.categories}
        />
    )
}
const mapStateToProps = state=>{
    return{
        categoryById: state.categories.categoryById
    }
}

export default connect(mapStateToProps,{getCategoryById,createCategory,updateCategory})(withRouter(CategoryUpdater))