import React, {useEffect} from 'react'
import RecordViewer from "./RecordViewer";
import {withRouter} from "react-router-dom";
import Preloader from "../Preloader/Preloader";



const RecordViewerContainer = (
    {
        titles,
        urlToUpd,
        urlToTable,
        match,
        valueById,
        clearFunc,
        getByIdFunc,

        isLoading
    }
)=>{
    useEffect(()=>{
        getByIdFunc(match.params.id)
        return ()=>clearFunc()
    },[])
    return(
        valueById && !isLoading ?
        <RecordViewer
            titles={titles}
            values={valueById}
            urlToUpd={urlToUpd}
            urlToTable={urlToTable}
        /> : <Preloader />
    )
}

export default withRouter(RecordViewerContainer)