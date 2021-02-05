import React, {useEffect} from 'react'
import ProfileForm from "./ProfileForm";
import {getUserById, updateUser} from "../../redux/reducers/userReducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";



const ProfileContainer = (props)=>{
    useEffect(()=>{
        if(props.userId) {
            props.getUserById(props.userId)
        }
    },[props.userId])
    const handleSubmit = values=>props.updateUser(values,localStorage.getItem('id'))

    return(
        !props.userFetchLoader && !props.authFetchLoader && props.profile   ?
        <ProfileForm {...props} handleSubmit={handleSubmit}/> :
            <Preloader />
    )
}

const mapStateToProps = state=>{
    return{
        authFetchLoader: state.main.authFetchLoader,
        userFetchLoader: state.user.userFetchLoader,
        userId: state.main.userId,
        profile: state.user.userById
    }
}
export default connect(mapStateToProps,{updateUser,getUserById})(ProfileContainer)