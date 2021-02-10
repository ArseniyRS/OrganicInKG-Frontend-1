import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    clearCategories,
    clearCategory,
    createCategory,
    deleteCategory,
    getCategory,
    getCategoryById, updateCategory
} from "../../redux/reducers/categoryReducer";
import {recordViewCategoryConfig} from "../../configs/Categories/recordViewConfig";
import {CategoryColumns} from "../../configs/Categories/tableColumnsConfig";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {categoryInputConfig} from "../../configs/Categories/inputFormConfig";




const CategoriesPage = ({categories,hasCategories,categoryById,getSearchedCategory,getCategory,getCategoryById,createCategory,updateCategory,deleteCategory,clearCategory,...props})=>{
    return(
        <PageRenderer
            pageUrl ={'categories'}
            pageTitle ={'Категории'}

            tableData={categories}
            tableColumnsConfig={CategoryColumns}

            recordViewTitlesConfig={recordViewCategoryConfig}

            creatorTitle={'Создание категории'}
            updaterTitle={'Редактирование категории'}
            formInputsConfig={categoryInputConfig}
            loadSelectorData={[getCategory]}
            clearSelectorData = {[props.clearCategories]}
            optionsForSelectorData={{
                category: categories ? [...categories] : []
            }}
            creatorInitialFormValues={{
                name: '',
                description: '',
                parentCategoryId: null,
                image: ''}}
            updaterInitialFormValues={{
                name: categoryById?.name,
                description: categoryById?.description,
                parentCategoryId: categoryById?.parentCategory?.id ? categoryById.parentCategory.id :  null,
                image:  categoryById?.imagePath
            }}
            getDataFunc={getCategory}
            valueById={categoryById}
            getByIdFunc={getCategoryById}
            createFunc={createCategory}
            updateFunc={updateCategory}
            clearFunc={clearCategory}
            deleteFunc={deleteCategory}
            hasData={hasCategories}
            isLoading={props.categoryFetchLoader}
            clearTable = {props.clearCategories}
        />
    )
}
const mapStateToProps = state=>{
    return{
        categories: state.category.categories,
        categoryById: state.category.categoryById,
        hasCategories: state.category.hasCategories,
        categoryFetchLoader: state.category.categoryFetchLoader
    }
}

export  default  connect(mapStateToProps,
    {
        getCategory,
        getCategoryById,
        createCategory,
        updateCategory,
        deleteCategory,
        clearCategory,
        clearCategories
    }
    )(CategoriesPage)
