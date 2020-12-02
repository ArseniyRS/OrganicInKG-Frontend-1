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
import {getActiveProviders} from "../../redux/reducers/providerReducer";
import {getCategory} from "../../redux/reducers/categoryReducer";




const ProductsPage = ({   products,
                          productById,
                          ratingById,
                          getProducts,
                          getProductById,
                          createProduct,
                          updateProduct,
                          deleteProduct,
                          clearProduct,
                          categories,
                          activeProviders,
                          getCategory,
                          getActiveProviders
                      })=>{
    // const productForView = productById
    // if(productById) {
    //     productForView['raiting'] = ratingById
    // }
    console.log(productById?.productImages.map(item=>item.imageUrl))
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
                provider: activeProviders ? [...activeProviders] : []
            }}
            loadSelectorData={[getCategory,getActiveProviders]}
            creatorInitialFormValues={{
                name: '',
                categoryId: null,
                supplierId: null,
                description: '',
                price: 0,
                measure: 0,
                images: []
            }}
            updaterInitialFormValues={{
                name: productById?.name,
                categoryId: productById?.category?.id,
                supplierId: productById?.supplier?.id,
                description: productById?.description,
                price: productById?.price,
                measure: productById?.measure,
                images: productById?.productImages.map(item=>item.imageUrl)
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
        ratingById: state.product.ratingById,
        categories: state.category.categories,
        activeProviders: state.provider.activeProviders
    }
}

export  default  connect(mapStateToProps,
    {
        getCategory,
        getActiveProviders,
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,
        clearProduct
    }
)(ProductsPage)
