import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    clearOrder, getOrderById, createOrder, deleteOrder, getOrders, updateOrder, clearOrders
} from "../../redux/reducers/orderReducer";

import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {OrderColumns} from "../../configs/Orders/tableColumnsConfig";
import {recordViewOrderConfig} from "../../configs/Orders/recordViewConfig";
import {orderInputConfig} from "../../configs/Orders/inputFormConfig";
import {toBeautifyFieldsValue} from "../../utils/toBeatifyFiledsValue";




const OrdersPage = ({orders,orderById,clearOrder,  getOrderById, createOrder,deleteOrder, getOrders, updateOrder,...props})=>{

    return(
        <PageRenderer
            pageUrl ={'orders'}
            pageTitle ={'Заказы'}

            tableData={orders}
            tableColumnsConfig={OrderColumns}

            recordViewTitlesConfig={recordViewOrderConfig}
            recordViewValuesConfig={{
                orderNumber: orderById?.orderNumber,
                client: <div>{orderById?.lastName} {orderById?.firstName}  | {orderById?.phoneNumber}</div>,
                orderStatus: orderById?.orderStatus ,
                deliveryAddress:orderById?.deliveryAddress,
                deliveryType: orderById?.deliveryType,
                desiredDeliveryDate: orderById?.desiredDeliveryDate,
                elsomPaymentOrderStatus: orderById?.elsomPaymentOrderStatus,
                paymentType: orderById?.paymentType,
                storageAddress: orderById?.storageAddress,
                product:  orderById?.products?.map(item=>{
                    return <div><span>{item.product.name}</span>  <span>{`${item.amount}  ${item.product?.measureUnitResponse?.name}`}</span>  <span> {`${item.totalPrice} ${toBeautifyFieldsValue(item?.product?.currency)}`}  </span></div>
                }),
                totalPrice: orderById?.orderTotalPrice
            }}

            optionsForSelectorData={{
                status:  [ 'AWAITING_DELIVERY','DELIVERED_AND_PAID','PAID_AWAITNG_DELIVERY', 'DELIVERED', 'CLOSED'],
                deliveryType: ['COURIER', 'STORAGE'],
                paymentType: ['ELSOM','CASH']

            }}
            formInputsConfig ={orderInputConfig}
            creatorTitle={'Создание заказа'}
            updaterTitle={'Редактирование заказа'}
           adding={false}
            updaterInitialFormValues={{
                firstName: orderById?.firstName,
                lastName: orderById?.lastName,
                phoneNumber: orderById?.phoneNumber,
                deliveryAddress: orderById?.deliveryAddress,
                deliveryType: orderById?.deliveryType,
                desiredDeliveryDate: orderById?.desiredDeliveryDate,
                paymentType: orderById?.paymentType,
                storageAddress: orderById?.storageAddress,
                orderStatus: orderById?.orderStatus,

            }}

            getDataFunc={getOrders}
            valueById={orderById}
            getByIdFunc={getOrderById}
            createFunc={createOrder}
            updateFunc={updateOrder}
            clearFunc={clearOrder}
            deleteFunc={deleteOrder}
            isLoading={props.orderFetchLoader}
            hasData={props.hasOrders}
            clearTable = {props.clearOrders}

        />
    )
}
const mapStateToProps = state=>{
    return{
        orders: state.order.orders,
        orderById: state.order.orderById,
        orderFetchLoader: state.order.orderFetchLoader,
        hasOrders: state.order.hasOrders
    }
}

export  default  connect(mapStateToProps,
    {
        clearOrder,
        getOrderById,
        createOrder,
        deleteOrder,
        getOrders,
        updateOrder,clearOrders
    }
)(OrdersPage)
