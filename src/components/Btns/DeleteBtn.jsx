import React from 'react'
import './Btns.css'
import {deleteSVG} from "../../assets/icons";
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";
import {writeTableMessage} from "../../redux/reducers/tableReducer";


const DeleteBtn = ({toggleModal,deleteFunc,elementsToDelete,writeTableMessage})=>{

    const confirmHandler = async ()=>{
           await deleteFunc(elementsToDelete)
    }

    return(
        <img className={'deleteBtn'} src={deleteSVG} alt=""  onClick={()=>{
            if(elementsToDelete.length===0){
             return writeTableMessage('Вы не выбрали ни одной записи!')
            }
            return toggleModal({isOpen:true,title:'Вы действительно хотите удалить запись(и)?',confirmFunc: confirmHandler})
        }}/>
    )
}
const mapStateToProps = state=>{
    return{
        elementsToDelete : state.table.elementsToDelete
    }
}
export default connect(mapStateToProps,{toggleModal,writeTableMessage})(DeleteBtn)