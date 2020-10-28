import React from 'react'
import './Btns.css'
import {deleteSVG} from "../../assets/icons";
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";


const DeleteBtn = ({toggleModal})=>{
    return(
        <img className={'deleteBtn'} src={deleteSVG} alt=""  onClick={()=>toggleModal({isOpen:true,title:'Вы действительно хотите удалить запись?'})}/>
    )
}
export default connect(null,{toggleModal})(DeleteBtn)