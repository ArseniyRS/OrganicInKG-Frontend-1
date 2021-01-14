import React, {useEffect, useState} from 'react'
import TableItem from "./Table-item";
import './Table.css'
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {writeTableMessage} from "../../redux/reducers/tableReducer";
import ErrorMsg from "../Modals/ErrorMessage";

import SearchPanel from "../Search-panel/SearchPanel";
import AddBtn from "../Btns/AddBtn";
import DeleteBtn from "../Btns/DeleteBtn";
import InfiniteLoader from 'react-infinite-loader'




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
        getDataFunc(1)
        return ()=>{
            writeTableMessage('')
        }
    },[])
    const [searchText,setSearchText] = useState('')


    const elements = data.map(item=>{
        return (
            <div key={item.id}>
            <TableItem columns={columns} data={item} handlerClick = {handlerClick} deleting={deleting}/>
            </div>
        )
    })
    const [visitCounter,setVisitCounter] = useState(2)
   const  handleVisit = () => {
        console.log('visited')
        getDataFunc(visitCounter)
       setVisitCounter(visitCounter+1)
    }
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
                {(tableMessage && isLoading) && <ErrorMsg text={tableMessage}/>}
                    {elements}
                 <InfiniteLoader
                    loaderStyle={{borderColor: 'rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2) rgb(0,155,0)'}}
                    onVisited={() => handleVisit()}
                    //containerElement={'tableItem-container__wrapper'}
                />

            </div>

        </div>
    )
}
const mapStateToProps = state=>{
    return{
        tableMessage : state.table.tableMessage
    }
}
export default connect(mapStateToProps,{writeTableMessage})(Table)


