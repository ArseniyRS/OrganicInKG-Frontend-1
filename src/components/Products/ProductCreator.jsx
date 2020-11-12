import React, {useEffect} from 'react'
import FormContainer from "../FormGenerator/FormContainer";
import { productInputConfig} from "./inputConfig";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {createProduct, getProducts, updateProduct} from "../../redux/reducers/productReducer";



const ProductCreator = (props)=>{
    return(
        <FormContainer
            urlToTable={'/products'}
            loadData={false}
            initialVals={{
                name: '',
                categoryId: '',
                productImages: [],
                description: '',
                price: '',
                measure: '',
            }}
            formTitle = {"Создание товара"}
            inputConfig ={productInputConfig}
            createReq = {props.createProduct}
            updReq ={props.updateProduct}

        />
    )
}


export default connect(null,{createProduct,updateProduct})(withRouter(ProductCreator))