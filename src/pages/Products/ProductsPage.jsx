import React, {useEffect} from 'react'
import {connect} from "react-redux";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";


import {ProductColumns} from "../../configs/Products/tableColumnsConfig";
import {recordViewProductConfig} from "../../configs/Products/recordViewConfig";
import {productInputConfig} from "../../configs/Products/inputFormConfig";
import {
    clearProduct,
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct
} from "../../redux/reducers/productReducer";
import {getProviders} from "../../redux/reducers/providerReducer";
import {getCategory} from "../../redux/reducers/categoryReducer";




const ProductsPage = ({   products,
                          productById,
                          getProducts,
                          getProductById,
                          createProduct,
                          updateProduct,
                          deleteProduct,
                          clearProduct,
                          categories,
                          providers,
                          getCategory,
                          getProviders
                      })=>{
    return(
        <PageRenderer
            pageUrl ={'products'}
            pageTitle ={'Товары'}

            tableData={products}
            tableColumnsConfig={ProductColumns}

            recordViewTitlesConfig={recordViewProductConfig}

            creatorTitle={'Создание товара'}
            updaterTitle={'Редактирование товара'}
            formInputsConfig={productInputConfig}
            optionsForSelectorData={{
                category: categories ? [...categories] : [],
                provider: providers ? [...providers] : []
            }}
            loadSelectorData={[getCategory,getProviders]}
            creatorInitialFormValues={{
                name: '',
                categoryId: null,
                supplierId: null,
                description: '',
                price: 0,
                measure: 0,
            }}
            updaterInitialFormValues={{
                name: productById?.name,
                categoryId: productById?.category?.id,
                supplierId: productById?.supplier?.id,
                description: productById?.description,
                price: productById?.price,
                measure: productById?.measure,
            }}
            getDataFunc={getProducts}
            valueById={productById}
            getByIdFunc={getProductById}
            createFunc={createProduct}
            updateFunc={updateProduct}
            clearFunc={clearProduct}
            deleteFunc={deleteProduct}

        />
    )
}
const mapStateToProps = state=>{
    return{
        products: state.product.products,
        productById: state.product.productById,
        categories: state.category.categories,
        providers: state.provider.providers
    }
}

export  default  connect(mapStateToProps,
    {
        getCategory,
        getProviders,
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,
        clearProduct
    }
)(ProductsPage)
