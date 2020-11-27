import React, {useEffect, useState} from 'react'
import TableItem from "./Table-item";
import './Table.css'
import withLoader from "../HOC/withLoader";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {writeTableMessage} from "../../redux/reducers/tableReducer";
import ErrorMsg from "../Modals/ErrorMessage";
import {Pagination} from "antd";
//import 'antd/dist/antd.css';

const Table = ({isLoading,getDataFunc,data=[],columns=[],handlerClick,deleting,tableMessage,writeTableMessage})=>{
    useEffect(()=>{
        getDataFunc()
        return ()=>{
            data=[]
            columns=[]
            writeTableMessage('')
        }
    },[])
    const onChangePagination = (page,pageSize)=>{
        console.log(page)
    }

    const elements = data.map(item=>{
        return (
            <div key={item.id}>
            <TableItem columns={columns} data={item} handlerClick = {handlerClick} deleting={deleting}/>
            </div>
        )
    })
    return(
        !isLoading ?
        <div className='table-container'>
            {tableMessage && <ErrorMsg text={tableMessage}/>}
            {elements}

            <Pagination
                onChange={onChangePagination}
                defaultCurrent={1}
                total={50} />
        </div> : <Preloader />
    )
}
const mapStateToProps = state=>{
    return{
        tableMessage : state.table.tableMessage
    }
}
export default connect(mapStateToProps,{writeTableMessage})(Table)


