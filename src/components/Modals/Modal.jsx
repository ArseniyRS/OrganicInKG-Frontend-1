import React, {useState} from 'react'
import './Modal.css'
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";


const Modal = ({visible,toggleModal})=>{
    console.log(visible)
    return(
        visible.isOpen &&
        <>
        <div className='modal__wrapper' onClick={()=>toggleModal({isOpen:false,title:''})}>
        </div>
            <div className='modal__container'>
            <h2>{visible.title}</h2>
            <div className='modal__btns'>
                <div className='modal__btns-confirm' onClick={()=>toggleModal({isOpen:false,title:''})}>Да</div>
                <div className='modal__btns-cancel' onClick={()=>toggleModal({isOpen:false,title:''})}>Нет</div>

            </div>
        </div>
        </>
    )
}
const mapStateToProps = state=>{
    return{
        visible : state.modal.isOpenModal
    }
}
export default connect(mapStateToProps,{toggleModal})(Modal);