import React from 'react'
import {toggleModal} from "../../redux/reducers/modalReducer";
import {connect} from "react-redux";



const EditBtn = ({toggleModal,confirmFunc,urlToTable='main'})=>{
    return(
        <div className='createOrEditBtn-submit'
                onClick={()=>toggleModal(
                    {   isOpen:true,
                        title:'Вы действительно хотите сохранить изменения?',
                        confirmFunc: confirmFunc,
                        urlToTable: urlToTable
                    },
                    )}>
            Сохранить</div>
                )
}

export default connect(null,{toggleModal})(EditBtn)