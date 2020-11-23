import React, {useEffect, useState} from 'react'
import './Modal.css'
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";
import {withRouter} from "react-router-dom";


const Modal = ({modal,toggleModal,history,isLoading})=>{
   // const [confirmLoading,setConfirmLoading] = useState(false)
    const handleConfirm = async ()=>{
        if(modal.confirmFunc) {
            console.log(modal.confirmFunc)
           await modal.confirmFunc()
        }
            toggleModal({isOpen:false,title:''})
            history.push(modal.urlToTable)
        }

    return(
        modal.isOpen ?
        <>

        <div className='modal__wrapper' onClick={()=>toggleModal({isOpen:false,title:''})}>
        </div>
            <div className='modal__container'>
            <h2>{modal.title}</h2>
            <div className='modal__btns'>
                <div className='modal__btns-confirm' onClick={()=>handleConfirm()}>Да</div>
                <div className='modal__btns-cancel' onClick={()=>toggleModal({isOpen:false,title:''})}>Нет</div>

            </div>
        </div>
        </> : <></>
    )
}
const mapStateToProps = state=>{
    return{
        isLoading: state.main.isFetchLoader,
        modal : state.modal.isOpenModal
    }
}
export default connect(mapStateToProps,{toggleModal})(withRouter(Modal));