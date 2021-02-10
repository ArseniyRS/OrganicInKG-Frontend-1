import React, {useEffect, useState} from 'react'
import TableItem from "./Table-item";
import './Table.css'
import Preloader from "../Preloader/Preloader";
import {connect, useDispatch} from "react-redux";
import {writeTableMessage} from "../../redux/reducers/tableReducer";
import ErrorMsg from "../Modals/ErrorMessage";
import SearchPanel from "../Search-panel/SearchPanel";
import AddBtn from "../Btns/AddBtn";
import DeleteBtn from "../Btns/DeleteBtn";
import InfiniteScroll from 'react-infinite-scroll-component';

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
                   urlToCreate,
                   hasData,
                   clearTable
               })=>{
    const [searchText,setSearchText] = useState('')
    const [page,setPage] = useState(1)
    useEffect(()=>{
        return ()=>{
            writeTableMessage('')
            clearTable()
        }
    },[])
    const dispatch = useDispatch()
    useEffect(() => {
        const timeoutId = setTimeout(() => {
                    getDataFunc(1,searchText)
                    setPage(2)
                    dispatch({type: 'SEARCHING'})
            }, 1000);
        return () => clearTimeout(timeoutId);
    }, [searchText]);
    const elements = data.map(item=> <TableItem key={item.id} columns={columns} data={item} handlerClick = {handlerClick} deleting={deleting}/>)
    return(
        <div className='table-container'>
            <div className='page-functional'>
                <SearchPanel handleSearchText={setSearchText} />
                <div className={'page-functional__btns'}>
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
            </div>
            <div className="tableItem-container__wrapper">
                {tableMessage && <ErrorMsg text={tableMessage}/>}
                    <InfiniteScroll
                        dataLength={data.length} //This is important field to render the next data
                        next={() => {
                            getDataFunc(page, searchText)
                            setPage(page + 1)
                        }}
                        hasMore={hasData}
                        loader={<Preloader/>}
                        endMessage={
                            <p style={{textAlign: 'center'}}>
                                <b>Загружены все записи.</b>
                            </p>
                        }
                        initialScrollY={0}
                    >
                        {elements}
                    </InfiniteScroll>
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


