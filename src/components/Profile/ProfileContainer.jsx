import React, {useEffect} from 'react'
import ProfileForm from "./ProfileForm";
import {getUserById, updateUser} from "../../redux/reducers/userReducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";



const ProfileContainer = (props)=>{
    useEffect(()=>{
        props.getUserById(localStorage.getItem('id'))
    },[])
   // console.log(props.profile)
    const handleSubmit = values=>{
       // console.log(values)
        //props.updateUser(values,localStorage.getItem('id'))
    }
    return(
        props.profile ?
        <ProfileForm {...props} handleSubmit={handleSubmit}/> :
            <Preloader />
    )
}

const mapStateToProps = state=>{
    return{
        profile: state.user.userById
    }
}
export default connect(mapStateToProps,{updateUser,getUserById})(ProfileContainer)