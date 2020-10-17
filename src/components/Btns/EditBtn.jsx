import React from 'react'
import {toggleModal} from "../../redux/reducers/modalReducer";
import {connect} from "react-redux";



const EditBtn = ({toggleModal})=>{
    return(
        <button className='createOrEditBtn-submit' type='submit'
                onClick={()=>toggleModal({isOpen:true,title:'Вы действительно хотите сохранить изменения?'})}>
            Сохранить</button>
                )
}

export default connect(null,{toggleModal})(EditBtn)