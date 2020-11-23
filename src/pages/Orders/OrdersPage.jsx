import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    clearOrder,  getOrderById, createOrder,deleteOrder, getOrders, updateOrder
} from "../../redux/reducers/orderReducer";

import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {OrderColumns} from "../../configs/Orders/tableColumnsConfig";
import {recordViewOrderConfig} from "../../configs/Orders/recordViewConfig";
import {orderInputConfig} from "../../configs/Orders/inputFormConfig";




const OrdersPage = ({orders,orderById,clearOrder,  getOrderById, createOrder,deleteOrder, getOrders, updateOrder})=>{
    return(
        <PageRenderer
            pageUrl ={'orders'}
            pageTitle ={'Заказы'}

            tableData={orders}
            tableColumnsConfig={OrderColumns}

            recordViewTitlesConfig={recordViewOrderConfig}

            formInputsConfig ={orderInputConfig}
            creatorTitle={'Создание заказа'}
            updaterTitle={'Редактирование заказа'}
            creatorInitialFormValues={{
                deliveryAddress: '',
                deliveryType: '',
                desiredDeliveryDate: '',
                paymentType: '',
                storageAddress: ''
            }}
            updaterInitialFormValues={{

            }}

            getDataFunc={getOrders}
            valueById={orderById}
            getByIdFunc={getOrderById}
            createFunc={createOrder}
            updateFunc={updateOrder}
            clearFunc={clearOrder}
            deleteFunc={deleteOrder}

        />
    )
}
const mapStateToProps = state=>{
    return{
        orders: state.order.orders,
        orderById: state.order.orderById
    }
}

export  default  connect(mapStateToProps,
    {
        clearOrder,
        getOrderById,
        createOrder,
        deleteOrder,
        getOrders,
        updateOrder
    }
)(OrdersPage)
