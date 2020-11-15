// import React, {useEffect} from 'react'
// import FormContainer from "../FormGenerator/FormContainer";
// import {categoryInputConfig} from "./inputFormConfig";
// import {Route, withRouter} from "react-router-dom";
// import {connect} from "react-redux";
// import {createCategory, getCategory, getCategoryById, updateCategory} from "../../redux/reducers/categoryReducer";
// import {withLoader} from "../HOC/withLoader";
//
//
//
// const RecordUpdater = ({
//                            match,
//                            getByIdFunc,
//                            valueById,
//                            urlToTable,
//                            updaterInitialFormValues,
//                            updReq,
//                            formTitle,
//                            inputConfig,
//                            optionsForSelector,
//                        })=>{
//     useEffect(()=>{
//         props.getCategory()
//         getByIdFunc(match.params.id)
//     },[])
//     return(
//         valueById && props.categories ?
//         <FormContainer
//             urlToTable={urlToTable}
//             initialVals={updaterInitialFormValues}
//             loadData={true}
//             updReq ={updReq}
//             formTitle = {formTitle}
//             inputConfig ={inputConfig}
//             optionsForSelector = {optionsForSelector}
//         />
//         : <Pr
//     )
// }
//
//
// export default withRouter(RecordUpdater)