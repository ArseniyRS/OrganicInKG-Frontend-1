import React, {useEffect} from 'react'
import FormContainer from "../FormGenerator/FormContainer";
import {categoryInputConfig, productInputConfig} from "./inputConfig";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {createProduct, getProductById, getProducts, updateProduct} from "../../redux/reducers/productReducer";



const ProductUpdater = (props)=>{
    useEffect(()=>{
        props.getProductById(props.match.params.id)
    },[])
    return(
        <FormContainer
            urlToTable={'/products'}
            loadData={true}
            initialVals={{
                name: props.productById.name,
                categoryId: props.productById.categoryId,
                productImages: [],
                description: props.productById.description,
                price: props.productById.price,
                measure: props.productById.measure,
            }}
            formTitle = {"Редактирование товара"}
            inputConfig ={productInputConfig}
            createReq = {props.createProduct}
            updReq ={props.updateProduct}
        />
    )
}
const mapStateToProps = state=>{
    return{
        productById: state.product.productById
    }
}

export default connect(mapStateToProps,{createProduct,updateProduct,getProductById})(withRouter(ProductUpdater))