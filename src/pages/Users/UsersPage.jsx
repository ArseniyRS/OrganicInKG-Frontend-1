import React, {useEffect} from 'react'
import {connect} from "react-redux";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {clearUser, deleteUser, getUserById, getUsers} from "../../redux/reducers/userReducer";
import {UsersColumns} from "../../configs/Users/tableColumnsConfig";
import {recordViewUserConfig} from "../../configs/Users/recordViewConfig";




const CategoriesPage = ({   users,
                            userById,
                            getUsers,
                            getUserById,
                            deleteUser,
                            clearUser,...props})=>{
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
            isLoading={props.userFetchLoader}
            hasData={props.hasUsers}
        />
    )
}
const mapStateToProps = state=>{
    return{
        users: state.user.users,
        userById: state.user.userById,
        userFetchLoader: state.user.userFetchLoader,
        hasUsers: state.user.hasUsers
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
