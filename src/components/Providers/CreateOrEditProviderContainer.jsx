import React, {useEffect} from 'react'
import CreateOrEditProviderForm from "./CreateOrEditProviderForm";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createProvider, updateProvider} from "../../redux/reducers/providerReducer";
import Loader from "../Loader/Loader";
import {getTags} from "../../redux/reducers/tagReducer";


const CreateOrEditProviderContainer = (props)=>{
    useEffect(()=>{
        props.getTags()
    },[])
    const submitHandler = values=>{
        if(props.loadData===0) {
            props.createProvider(values)
        }else if(props.loadData===1){
            props.updateProvider(props.match.params.provider_id,values)
        }
        props.history.push('/providers')
    }

    let data
    if( props.loadData===1) {
        data = props.providers.find(item => item.id === props.match.params.provider_id)
    }
    return(
        props.tags.length===0 || (data===undefined && props.loadData===1) ? <Loader /> :
        <CreateOrEditProviderForm
            {...props}
            submitHandler={submitHandler}
            data={data}
            tags={props.tags}
        />
    )
}
const mapStateToProps = state=>{
    return{
        tags: state.tags.tags
    }
}
export default connect(mapStateToProps,{createProvider,getTags,updateProvider})(withRouter(CreateOrEditProviderContainer))