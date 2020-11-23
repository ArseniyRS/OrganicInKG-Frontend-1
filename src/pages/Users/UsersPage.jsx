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
import {clearUser, deleteUser, getUserById, getUsers} from "../../redux/reducers/userReducer";
import {UsersColumns} from "../../configs/Users/tableColumnsConfig";
import {recordViewUserConfig} from "../../configs/Users/recordViewConfig";




const CategoriesPage = ({   users,
                            userById,
                            getUsers,
                            getUserById,
                            deleteUser,
                            clearUser})=>{
    return(
        <PageRenderer
            pageUrl ={'users'}
            pageTitle ={'Пользователи'}

            tableData={users}
            tableColumnsConfig={UsersColumns}

            recordViewTitlesConfig={recordViewUserConfig}



            getDataFunc={getUsers}
            valueById={userById}
            getByIdFunc={getUserById}
            clearFunc={clearUser}
            deleteFunc={deleteUser}
            adding={false}
            editing={false}
        />
    )
}
const mapStateToProps = state=>{
    return{
        users: state.user.users,
        userById: state.user.userById
    }
}

export  default  connect(mapStateToProps,
    {
        getUsers,
        getUserById,
        deleteUser,
        clearUser
    }
)(CategoriesPage)
