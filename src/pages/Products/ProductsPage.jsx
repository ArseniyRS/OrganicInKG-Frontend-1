import React, {useEffect} from 'react'
import {connect} from "react-redux";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";


import {ProductColumns} from "../../configs/Products/tableColumnsConfig";
import {recordViewProductConfig} from "../../configs/Products/recordViewConfig";
import {productInputConfig} from "../../configs/Products/inputFormConfig";
import {
    clearProduct,
    createProduct,
    deleteProduct, getMeasureUnits,
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
                          getActiveProviders,
                          hasProducts,
                          measureUnits,
                          getMeasureUnits,
    ...props
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
                provider: activeProviders  ? [...activeProviders] : [],
                currency: ['SOM','USD'],
                units: measureUnits  ?  [...measureUnits] : []
            }}
            recordViewValuesConfig={{
                name: productById?.name,
                category: productById?.category?.name,
                supplier: productById?.supplier?.fullName,
                description: productById?.description,
                price: `${productById?.price} ${productById?.currency}`,
                measure: `${productById?.measure} ${productById?.measureUnitResponse?.name}`,
                images: productById?.productImages?.map(item=>item.imageUrl),
                boughtCount: productById?.boughtCount,
                raiting: productById?.raiting,
                comments: productById?.comment?.map(item=>{
                    return <div><span>{`${item.client?.lastName} ${item.client?.firstName} ${item.client?.middleName}`}</span>
                        <span>{item.client?.email}</span>  <span> {item.comment} </span></div>
                })

            }}
            loadSelectorData={[getCategory,getActiveProviders,getMeasureUnits]}
            creatorInitialFormValues={{
                name: '',
                categoryId: null,
                supplierId: null,
                description: '',
                price: 0,
                currency: '',
                measure: 0,
                measureUnitId: 0,
                images: []
            }}
            updaterInitialFormValues={{
                name: productById?.name,
                categoryId: productById?.category?.id,
                supplierId: productById?.supplier?.id,
                description: productById?.description,
                price: productById?.price,
                currency: productById?.currency,
                measure: productById?.measure,
                measureUnitId: productById?.measureUnitResponse?.id,
                images: productById?.productImages?.map(item=>item.imageUrl)
            }}
            getDataFunc={getProducts}
            valueById={productById}
            getByIdFunc={getProductById}
            createFunc={createProduct}
            updateFunc={updateProduct}
            clearFunc={clearProduct}
            deleteFunc={deleteProduct}
            hasData={hasProducts}
            isLoading={props.productFetchLoader}
        />
    )
}
const mapStateToProps = state=>{
    return{
        products: state.product.products,
        hasProducts: state.product.hasProducts,
        productById: state.product.productById,
        ratingById: state.product.ratingById,
        categories: state.category.categories,
        activeProviders: state.provider.activeProviders,
        measureUnits : state.product.measureUnits,
        productFetchLoader: state.product.productFetchLoader,

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
        clearProduct,
        getMeasureUnits
    }
)(ProductsPage)
