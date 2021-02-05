import React, {useEffect} from 'react'
import FormContainer from "../../components/FormGenerator/FormContainer";
import {connect} from "react-redux";
import {getDeliveryCash, updateDeliveryCash} from "../../redux/reducers/orderReducer";
import {settingsInputConfig} from "../../configs/Settings/inputFormConfig";



const SettingsPage  = props=>{
    useEffect(()=>{
        props.getDeliveryCash()
    },[])
    return(
        <>
            <h2 className='page-content__title'>Настройки</h2>
            <FormContainer
                valueById={props.deliveryCash}
                initialVals={{
                    deliveryPrice: props.deliveryCash?.deliveryPrice
                }}
                createReq={props.updateDeliveryCash}
                inputConfig={settingsInputConfig}
                isLoading={props.orderFetchLoader}
                urlToTable={'/settings'}
            />
        </>
    )
}
const mapStateToProps = state=>{
    return{
        orderFetchLoader: state.order.orderFetchLoader,
        deliveryCash: state.order.deliveryCash
    }
}
export default connect(mapStateToProps,{updateDeliveryCash,getDeliveryCash})(SettingsPage)