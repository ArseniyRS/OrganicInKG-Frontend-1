import React from 'react'
import './Btns.css'
import {deleteSVG} from "../../assets/icons";
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";


const DeleteBtn = ({toggleModal,deleteFunc,elementsToDelete})=>{

    const confirmHandler = async ()=>{
        if(elementsToDelete.length!==0) {
           await deleteFunc(elementsToDelete)
            toggleModal({isOpen:true,title:'Записи успешно удалены.'})

        }
        return toggleModal({isOpen:true,title:'Вы не выбрали ни одной записи'})
    }

    return(
        <img className={'deleteBtn'} src={deleteSVG} alt=""  onClick={()=>toggleModal({isOpen:true,title:'Вы действительно хотите удалить запись?',confirmFunc: confirmHandler})}/>
    )
}
const mapStateToProps = state=>{
    return{
        elementsToDelete : state.table.elementsToDelete
    }
}
export default connect(mapStateToProps,{toggleModal})(DeleteBtn)