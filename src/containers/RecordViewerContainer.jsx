import React, {useEffect} from 'react'
import RecordViewer from "../components/RecordViewer/RecordViewer";
import {connect} from "react-redux";
import {writeRecordId} from "../redux/reducers/tableReducer";
import {createCategory, getCategory, getCategoryById, updateCategory} from "../redux/reducers/categoryReducer";
import {withLoader} from "../components/HOC/withLoader";
import {withRouter} from "react-router-dom";



const RecordViewerContainer = (
    {
        titles,urlToUpd,urlToTable,categoryById,getCategoryById,match
    }
)=>{
    useEffect(()=>{
        getCategoryById(match.params.id)
    },[])
    return(
        <RecordViewer
            titles={titles}
            values={categoryById}
            urlToUpd={urlToUpd}
            urlToTable={urlToTable}
        />
    )
}
const mapStateToProps = state=>{
    return{
        categoryById: state.categories.categoryById
    }
}
export default connect(mapStateToProps,{getCategoryById})(withRouter(RecordViewerContainer))