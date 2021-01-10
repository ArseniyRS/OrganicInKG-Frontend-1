import React, {useEffect, useState} from 'react'
import TableItem from "./Table-item";
import './Table.css'
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {writeTableMessage} from "../../redux/reducers/tableReducer";
import ErrorMsg from "../Modals/ErrorMessage";
import { Pagination } from 'antd';
import ReactPaginate from 'react-paginate';

import SearchPanel from "../Search-panel/SearchPanel";
import AddBtn from "../Btns/AddBtn";
import DeleteBtn from "../Btns/DeleteBtn";
import {tableDataSorter} from "./tableDataSorter";
import {dataDivider, pageCounter} from "./dataDivider";


const Table = ({isLoading,
                   getDataFunc,
                   data=[],
                   columns=[],
                   handlerClick,
                   deleting,
                   tableMessage,
                   writeTableMessage,
                   deleteFunc,
                   adding,
                   urlToCreate})=>{
    useEffect(()=>{
        getDataFunc()
        return ()=>{
            writeTableMessage('')
        }
    },[])
    const [searchText,setSearchText] = useState('')
   const [page,setPage] = useState(1)


  const onChangePagination = (page)=>setPage(page.selected)

    const elements = dataDivider(tableDataSorter(data,searchText),page,4).map(item=>{
        return (
            <div key={item.id}>
            <TableItem columns={columns} data={item} handlerClick = {handlerClick} deleting={deleting}/>
            </div>
        )
    })
    return(

        <div className='table-container'>
            <div className='page-functional'>
                <SearchPanel handleSearchText={setSearchText} />
                {adding &&
                <AddBtn
                    urlToCreate={urlToCreate}
                />
                }
                {deleting &&
                <DeleteBtn
                    deleteFunc = {deleteFunc}
                />}
            </div>

            <div className="tableItem-container__wrapper">
                { isLoading && <div  className='table-loading-wrapper'><Preloader /></div> }
                {(tableMessage && isLoading) && <ErrorMsg text={tableMessage}/>}
                {elements}
            </div>

            <ReactPaginate
                initialPage={0}
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCounter(tableDataSorter(data,searchText).length,4)}
                onPageChange={onChangePagination}
                containerClassName={'ant-pagination'}
                subContainerClassName={'ant-pagination-item'}
                pageClassName={'ant-pagination-item'}
                pageLinkClassName={'ant-pagination-item-link'}
                previousClassName={'ant-pagination-prev'}
                nextClassName={'ant-pagination-next'}
                nextLinkClassName={'ant-pagination-item-link'}
                previousLinkClassName={'ant-pagination-item-link'}
                disabledClassName={'ant-pagination-disabled'}
                activeClassName={'ant-pagination-item-active'}
            />
        </div>
    )
}
const mapStateToProps = state=>{
    return{
        tableMessage : state.table.tableMessage
    }
}
export default connect(mapStateToProps,{writeTableMessage})(Table)


