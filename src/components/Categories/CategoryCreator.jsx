import React, {useEffect} from 'react'
import FormContainer from "../FormGenerator/FormContainer";
import {categoryInputConfig} from "./inputConfig";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {writeRecordId} from "../../redux/reducers/tableReducer";
import {createCategory, getCategory, updateCategory} from "../../redux/reducers/categoryReducer";
import {withLoader} from "../HOC/withLoader";



const CategoryCreator = (props)=>{
    useEffect(()=>{
        props.getCategory()
    },[])
    return(
        <FormContainer
            urlToTable={'/categories'}
            //data={props.categories}
            loadData={false}
            createReq = {props.createCategory}
            updReq ={props.updateCategory}
            formTitle = {"Создание категории"}
            inputConfig ={categoryInputConfig}
            optionsForSelector = {props.categories}
            initialVals={{
                name: '',
                description: '',
                parentCategoryId: '',

            }}
        />
    )
}


export default connect(null,{getCategory,createCategory,updateCategory})(withRouter(CategoryCreator))