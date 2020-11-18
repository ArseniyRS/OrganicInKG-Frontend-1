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




const ProductsPage = ({   products,
                          productById,
                          getProducts,
                          getProductById,
                          createProduct,
                          updateProduct,
                          deleteProduct,
                          clearProduct,
                          categories,
                          providers
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
            optionsForSelectorData={[categories,providers]}
            // loadSelectorData={}
            creatorInitialFormValues={{
                name: '',
                categoryId: null,
                supplierId: null,
                description: '',
                price: 0,
               measure: 0,

            }}
            updaterInitialFormValues={{}}
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
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,
        clearProduct
    }
)(ProductsPage)
