import React, {useEffect, useState} from 'react'
import './Modal.css'
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";


const Modal = ({modal,toggleModal})=>{
    const [confirmed,setConfirmed] = useState(false)
    const handleConfirm = ()=>{
        modal.confirmFunc()
        setConfirmed(true)
    }
    useEffect(()=>{
            return ()=>setConfirmed(false)

    },[])
    return(
        modal.isOpen ?
        <>

        <div className='modal__wrapper' onClick={()=>toggleModal({isOpen:false,title:''})}>
        </div>
            <div className='modal__container'>
            <h2>{modal.title}</h2>
            <div className='modal__btns'>
                {!confirmed &&
                    <>
                <div className='modal__btns-confirm' onClick={()=>handleConfirm()}>Да</div>
                <div className='modal__btns-cancel' onClick={()=>toggleModal({isOpen:false,title:''})}>Нет</div>
                </>
                }
            </div>
        </div>
        </> : <></>
    )
}
const mapStateToProps = state=>{
    return{
        modal : state.modal.isOpenModal
    }
}
export default connect(mapStateToProps,{toggleModal})(Modal);