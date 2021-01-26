import React from 'react'
import FormContainer from "../../components/FormGenerator/FormContainer";
import {connect} from "react-redux";
import {getDeliveryCash, updateDeliveryCash} from "../../redux/reducers/orderReducer";
import {settingsInputConfig} from "../../configs/Settings/inputFormConfig";



const SettingsPage  = props=>{
    return(
        <>
            <h2 className='page-content__title'>Настройки</h2>
            <FormContainer
                getByIdFunc={props.getDeliveryCash}
                valueById={props.deliveryCash}
                initialVals={{
                    deliveryPrice: props.deliveryCash?.deliveryPrice
                }}
                updReq={props.updateDeliveryCash}
                formTitle={'Настройки заказа'}
                inputConfig={settingsInputConfig}
                isLoading={props.orderFetchLoader}
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