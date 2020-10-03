import React, {useEffect, useState} from 'react'
import { Table} from 'antd';
import 'antd/dist/antd.css';
import './CRMTable.css'


import {withRouter} from "react-router-dom";



const CRMTable : React.FunctionComponent = (props)=>{



    const [searchText,setSearchText] = useState('')
    const [isLoader, setIsLoader]= useState('')



    let tableState = {
        className: 'table',
        loading: isLoader,
        pagination:{
            position: ['none','bottomCenter'],
            pageSize: 5
        },
       // dataSource: data,
       // columns: columns
    }








    return(
        <div className='crmTable'>
            <div className='crmTable__title'>
                {/*<h2>{title}</h2>*/}
                <div className='crmTable__searchField'>


                        {/*<div className='crmTable__recordCreator' onClick={()=>history.push(linkForCreate)}>*/}
                        {/*    <img*/}
                        {/*        src='' alt=""/>*/}
                        {/*</div>*/}
                        : <></>}

                </div>
            </div>

            <Table/>

        </div>
    )
}

export default withRouter(CRMTable)