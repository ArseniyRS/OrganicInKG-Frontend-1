import React from 'react'
import {Form} from "formik";
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";



const CancelBtn = ({toggleModal})=>{
    return(
        <div className='createOrEditBtn-cancel'
                onClick={()=>toggleModal({
                    isOpen:true,
                    title:'Вы действительно хотите\n' +
                        'отменить изменения?'})}>
        Отмена
        </div>

    )
}


export default connect(null,{toggleModal})(CancelBtn)