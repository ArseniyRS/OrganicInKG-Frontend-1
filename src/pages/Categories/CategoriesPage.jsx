import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
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




const CategoriesPage = ({categories,categoryById,getCategory,getCategoryById,createCategory,updateCategory,deleteCategory,clearCategory})=>{
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
            optionsForSelectorData={{
                category: categories ? [...categories] : []
            }}
            creatorInitialFormValues={{
                name: '',
                description: '',
                parentCategoryId: null}}
            updaterInitialFormValues={{
                name: categoryById?.name,
                description: categoryById?.description,
                parentCategoryId: categoryById?.parentCategory?.id ? categoryById.parentCategory.id :  null,
            }}
            getDataFunc={getCategory}
            valueById={categoryById}
            getByIdFunc={getCategoryById}
            createFunc={createCategory}
            updateFunc={updateCategory}
            clearFunc={clearCategory}
            deleteFunc={deleteCategory}

        />
    )
}
const mapStateToProps = state=>{
    return{
        categories: state.category.categories,
        categoryById: state.category.categoryById
    }
}

export  default  connect(mapStateToProps,
    {
        getCategory,
        getCategoryById,
        createCategory,
        updateCategory,
        deleteCategory,
        clearCategory
    }
    )(CategoriesPage)
